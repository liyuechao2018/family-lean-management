#!/bin/bash
# ============================================
# 家庭精益化管理系统 - 生产服务器部署脚本
# 使用方法：
#   1. SSH 登录到生产服务器
#   2. 执行此脚本：bash <(curl -s https://raw.githubusercontent.com/liyuechao2018/family-lean-management/main/deploy/setup-server.sh)
#   或者下载后执行：bash setup-server.sh
# ============================================

set -e  # 任何错误立即退出

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# ============================================
# 1. 检查系统环境
# ============================================
log_info "检查系统环境..."

if [ "$EUID" -eq 0 ]; then
    log_warn "检测到你以 root 用户运行，建议使用非 root 用户（如 ubuntu）"
    read -p "继续以 root 运行？(y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_error "部署取消"
        exit 1
    fi
fi

# 检查操作系统
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$NAME
    log_info "检测到操作系统: $OS"
else
    log_error "无法检测操作系统"
    exit 1
fi

# ============================================
# 2. 安装 Node.js（如果未安装）
# ============================================
log_info "检查 Node.js..."

if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    log_info "Node.js 已安装: $NODE_VERSION"
else
    log_info "安装 Node.js 20 LTS..."
    
    if [[ "$OS" == *"Ubuntu"* ]] || [[ "$OS" == *"Debian"* ]]; then
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif [[ "$OS" == *"CentOS"* ]] || [[ "$OS" == *"Red Hat"* ]]; then
        curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
        sudo yum install -y nodejs
    else
        log_error "不支持的操作系统，请手动安装 Node.js 20+"
        exit 1
    fi
    
    log_info "Node.js 安装完成: $(node -v)"
fi

# 检查 npm
if ! command -v npm &> /dev/null; then
    log_error "npm 未安装"
    exit 1
fi
log_info "npm 版本: $(npm -v)"

# ============================================
# 3. 安装 PM2（进程管理器）
# ============================================
log_info "检查 PM2..."

if command -v pm2 &> /dev/null; then
    log_info "PM2 已安装: $(pm2 -v)"
else
    log_info "安装 PM2..."
    npm install -g pm2
    log_info "PM2 安装完成"
fi

# ============================================
# 4. 配置防火墙（如果需要）
# ============================================
log_info "检查端口 3210 是否可用..."
if command -v ufw &> /dev/null; then
    sudo ufw allow 3210/tcp 2>/dev/null || true
    log_info "防火墙规则已更新（如果有权限）"
fi

# ============================================
# 5. 克隆或更新代码
# ============================================
log_info "配置部署目录..."

# 默认部署目录
DEFAULT_DEPLOY_DIR="$HOME/family-lean-management"
read -p "输入部署目录 [$DEFAULT_DEPLOY_DIR]: " DEPLOY_DIR
DEPLOY_DIR=${DEPLOY_DIR:-$DEFAULT_DEPLOY_DIR}

log_info "部署目录: $DEPLOY_DIR"

if [ -d "$DEPLOY_DIR" ]; then
    log_info "目录已存在，执行 git pull..."
    cd "$DEPLOY_DIR"
    git pull origin master
else
    log_info "克隆仓库..."
    git clone https://github.com/liyuechao2018/family-lean-management.git "$DEPLOY_DIR"
    cd "$DEPLOY_DIR"
fi

# ============================================
# 6. 安装依赖
# ============================================
log_info "安装 npm 依赖..."
npm install

# ============================================
# 7. 配置环境变量
# ============================================
log_info "配置环境变量..."

if [ ! -f .env ]; then
    cat > .env << 'EOL'
# 数据库 URL (SQLite)
DATABASE_URL="file:./prod.db"

# 其他环境变量（根据需要添加）
# NEXT_PUBLIC_API_URL=https://www.liyuechao.com
EOL
    log_info ".env 文件已创建"
else
    log_info ".env 文件已存在，跳过"
fi

# ============================================
# 8. 初始化数据库
# ============================================
log_info "初始化数据库..."

# 生成 Prisma Client
npx prisma generate

# 推送 schema 到数据库（首次）
npx prisma db push

log_info "数据库初始化完成"

# ============================================
# 9. 构建项目
# ============================================
log_info "构建生产版本..."
npm run build

# ============================================
# 10. 启动应用（使用 PM2）
# ============================================
log_info "启动应用..."

# 检查是否已经在 PM2 中运行
if pm2 list | grep -q "family-lean"; then
    log_info "应用已在 PM2 中运行，执行重启..."
    pm2 restart family-lean --update-env
else
    log_info "首次启动应用..."
    pm2 start npm --name "family-lean" -- start
fi

# 保存 PM2 配置（开机自启）
pm2 save
pm2 startup | grep "sudo" | bash || true

log_info "应用已启动！"
pm2 status

# ============================================
# 11. 配置 Nginx 反向代理（可选）
# ============================================
echo ""
log_warn "=== Nginx 反向代理配置（可选）==="
log_info "如果你想通过 https://www.liyuechao.com 访问应用，需要配置 Nginx"
log_info "以下是 Nginx 配置示例："
echo ""
cat << 'EOL'
server {
    listen 80;
    server_name www.liyuechao.com;

    location / {
        proxy_pass http://localhost:3210;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOL

echo ""
read -p "是否已配置 Nginx？(y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    log_info "请手动重启 Nginx: sudo systemctl restart nginx"
fi

# ============================================
# 12. 配置自动更新（Webhook）
# ============================================
echo ""
log_info "=== 配置自动更新 ==="

# 创建 webhook 脚本
log_info "创建 webhook 脚本..."

mkdir -p "$DEPLOY_DIR/deploy"

cat > "$DEPLOY_DIR/deploy/webhook.sh" << EOL
#!/bin/bash
# Webhook 自动部署脚本
# 当 GitHub 收到 push 事件时，此脚本会被调用

cd "$DEPLOY_DIR"
echo "[\$(date)] 收到 webhook，开始更新..." >> "$DEPLOY_DIR/deploy/webhook.log"

# 拉取最新代码
git pull origin master >> "$DEPLOY_DIR/deploy/webhook.log" 2>&1

# 安装依赖（如果有变化）
npm install >> "$DEPLOY_DIR/deploy/webhook.log" 2>&1

# 生成 Prisma Client
npx prisma generate >> "$DEPLOY_DIR/deploy/webhook.log" 2>&1

# 推送数据库变更
npx prisma db push >> "$DEPLOY_DIR/deploy/webhook.log" 2>&1

# 重新构建
npm run build >> "$DEPLOY_DIR/deploy/webhook.log" 2>&1

# 重启应用
pm2 restart family-lean --update-env >> "$DEPLOY_DIR/deploy/webhook.log" 2>&1

echo "[\$(date)] 更新完成" >> "$DEPLOY_DIR/deploy/webhook.log"
EOL

chmod +x "$DEPLOY_DIR/deploy/webhook.sh"

log_info "Webhook 脚本已创建: $DEPLOY_DIR/deploy/webhook.sh"

# ============================================
# 13. 生成 Webhook 密钥
# ============================================
log_info "生成 Webhook 密钥..."

WEBHOOK_SECRET=$(openssl rand -hex 32)
echo "$WEBHOOK_SECRET" > "$DEPLOY_DIR/deploy/webhook-secret.txt"

log_info "Webhook 密钥已生成并保存到: $DEPLOY_DIR/deploy/webhook-secret.txt"
log_warn "请保存此密钥，稍后需要在 GitHub Webhook 配置中使用："
echo ""
echo "    $WEBHOOK_SECRET"
echo ""

# ============================================
# 完成
# ============================================
echo ""
log_info "=========================================="
log_info "部署完成！"
log_info "=========================================="
echo ""
log_info "应用信息："
log_info "  - 部署目录: $DEPLOY_DIR"
log_info "  - 本地访问: http://localhost:3210"
log_info "  - PM2 状态: pm2 status"
log_info "  - 查看日志: pm2 logs family-lean"
echo ""
log_warn "下一步："
log_warn "1. 配置 Nginx 反向代理（如果需要）"
log_warn "2. 配置 GitHub Webhook 实现自动更新"
log_warn "   - Payload URL: http://www.liyuechao.com:9000/webhook"
log_warn "   - Secret: $WEBHOOK_SECRET"
echo ""
log_info "Webhook 部署脚本: $DEPLOY_DIR/deploy/webhook.sh"
log_info "Webhook 日志: $DEPLOY_DIR/deploy/webhook.log"
echo ""

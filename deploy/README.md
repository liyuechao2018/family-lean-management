# 生产服务器部署指南

本目录包含家庭精益化管理系统的生产服务器部署脚本和配置。

## 📋 部署流程概览

1. ✅ 在服务器上执行 `setup-server.sh`（自动安装依赖、配置环境、启动应用）
2. ✅ 配置 Nginx 反向代理（可选，用于域名访问）
3. ✅ 启动 Webhook 服务（接收 GitHub 推送通知）
4. ✅ 在 GitHub 配置 Webhook（实现自动更新）

---

## 🚀 步骤 1：在服务器上执行部署脚本

### 方式 A：直接执行（推荐）

SSH 登录到你的生产服务器，然后执行：

```bash
# 方式 1：直接执行（需要服务器能访问 GitHub）
bash <(curl -s https://raw.githubusercontent.com/liyuechao2018/family-lean-management/main/deploy/setup-server.sh)

# 方式 2：先下载再执行（推荐）
curl -O https://raw.githubusercontent.com/liyuechao2018/family-lean-management/main/deploy/setup-server.sh
chmod +x setup-server.sh
bash setup-server.sh
```

### 方式 B：手动复制脚本内容

如果服务器无法访问 GitHub，你可以：
1. 在本地打开 `setup-server.sh`
2. 复制全部内容
3. 在服务器上创建文件并粘贴
4. 执行 `bash setup-server.sh`

---

## 📝 部署脚本会做什么？

脚本会自动完成以下操作：

1. ✅ 检查/安装 Node.js 20+（通过 nvm 或包管理器）
2. ✅ 检查/安装 PM2（进程管理器，用于后台运行和自动重启）
3. ✅ 克隆 GitHub 仓库到 `~/family-lean-management`
4. ✅ 安装 npm 依赖
5. ✅ 创建 `.env` 环境变量文件
6. ✅ 初始化 SQLite 数据库（通过 Prisma）
7. ✅ 构建生产版本（`npm run build`）
8. ✅ 使用 PM2 启动应用（端口 3210）
9. ✅ 创建 Webhook 脚本（`deploy/webhook.sh`）
10. ✅ 生成 Webhook 密钥（保存到 `deploy/webhook-secret.txt`）

---

## 🌐 步骤 2：配置 Nginx 反向代理（可选）

如果你想通过 `https://www.liyuechao.com` 访问应用（而不是直接访问 `http://localhost:3210`），需要配置 Nginx。

### 安装 Nginx

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```

### 配置 Nginx

创建 Nginx 配置文件：

```bash
sudo nano /etc/nginx/sites-available/family-lean
```

粘贴以下内容：

```nginx
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
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/family-lean /etc/nginx/sites-enabled/
sudo nginx -t  # 检查配置
sudo systemctl restart nginx
```

---

## 🔔 步骤 3：启动 Webhook 服务

Webhook 服务用于接收 GitHub 的推送通知，触发自动部署。

### 方式 A：使用 PM2 管理 Webhook 服务（推荐）

```bash
cd ~/family-lean-management/deploy
pm2 start webhook-server.js --name "family-lean-webhook"
pm2 save
```

### 方式 B：后台运行

```bash
cd ~/family-lean-management/deploy
nohup node webhook-server.js > webhook-server.log 2>&1 &
```

### 检查 Webhook 服务是否运行

```bash
# 方式 A
pm2 status

# 方式 B
ps aux | grep webhook-server
```

### 测试 Webhook 服务

```bash
# 在服务器上执行
curl http://localhost:9000/webhook -X POST -H "Content-Type: application/json" -d '{"repository":{"full_name":"liyuechao2018/family-lean-management"},"ref":"refs/heads/master"}'
```

---

## 🔗 步骤 4：在 GitHub 配置 Webhook

### 1. 获取 Webhook 密钥

在服务器上执行：

```bash
cat ~/family-lean-management/deploy/webhook-secret.txt
```

复制输出的密钥（如：`a1b2c3d4e5f6...`）

### 2. 在 GitHub 添加 Webhook

1. 打开 https://github.com/liyuechao2018/family-lean-management/settings/hooks
2. 点击 **Add webhook**
3. 填写以下信息：
   - **Payload URL**: `http://www.liyuechao.com:9000/webhook`
     - 如果使用 Nginx 反向代理，可以用 `https://www.liyuechao.com/webhook`
   - **Content type**: `application/json`
   - **Secret**: 粘贴刚才复制的密钥
   - **Events**: 选择 **Just the push event**
   - **Active**: ✅ 勾选
4. 点击 **Add webhook**

### 3. 测试 Webhook

1. 在 GitHub Webhook 配置页面，点击 **Recent Deliveries**
2. 如果没有推送记录，可以手动触发一次：
   - 修改 README.md
   - 提交并推送：`git commit -am "test webhook" && git push origin master`
3. 检查服务器日志：
   ```bash
   tail -f ~/family-lean-management/deploy/webhook.log
   ```

---

## 🔄 自动部署工作流程

配置完成后，工作流程如下：

```
你在本地修改代码
    ↓
git push origin master
    ↓
GitHub 发送 Webhook 通知到服务器
    ↓
Webhook 服务接收通知，执行 deploy/webhook.sh
    ↓
脚本自动执行：
    1. git pull（拉取最新代码）
    2. npm install（安装新依赖）
    3. npx prisma generate（生成 Prisma Client）
    4. npx prisma db push（更新数据库）
    5. npm run build（重新构建）
    6. pm2 restart family-lean（重启应用）
    ↓
用户访问到最新版本 🎉
```

---

## 🛠️ 常用管理命令

### 查看应用状态

```bash
pm2 status
```

### 查看应用日志

```bash
pm2 logs family-lean
```

### 重启应用

```bash
pm2 restart family-lean
```

### 停止应用

```bash
pm2 stop family-lean
```

### 手动部署（不经过 Webhook）

```bash
cd ~/family-lean-management
bash deploy/webhook.sh
```

### 查看 Webhook 日志

```bash
tail -f ~/family-lean-management/deploy/webhook.log
```

---

## ❓ 常见问题

### Q1：Webhook 服务无法启动（端口 9000 被占用）

修改 `webhook-server.js` 的端口：

```javascript
const PORT = process.env.PORT || 9000;  // 改成其他端口，如 9001
```

然后重启服务：

```bash
pm2 restart family-lean-webhook
```

### Q2：GitHub Webhook 显示 "Timeout"

原因：服务器防火墙阻止了 9000 端口。

解决：

```bash
# Ubuntu/Debian
sudo ufw allow 9000/tcp

# CentOS/RHEL
sudo firewall-cmd --permanent --add-port=9000/tcp
sudo firewall-cmd --reload
```

### Q3：自动部署失败（数据库迁移错误）

手动执行数据库迁移：

```bash
cd ~/family-lean-management
npx prisma db push --accept-data-loss  # ⚠️ 会丢失数据，谨慎使用
```

### Q4：如何回滚到上一个版本？

```bash
cd ~/family-lean-management
git log --oneline  # 找到上一个版本的 commit ID
git reset --hard <commit-id>
pm2 restart family-lean --update-env
```

---

## 📞 技术支持

如果遇到问题，请检查以下日志：

1. **应用日志**：`pm2 logs family-lean`
2. **Webhook 日志**：`~/family-lean-management/deploy/webhook.log`
3. **Nginx 日志**：`/var/log/nginx/error.log`
4. **PM2 日志**：`~/.pm2/logs/`

---

**祝部署顺利！ 🎉**

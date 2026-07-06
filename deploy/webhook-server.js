#!/usr/bin/env node
// ============================================
// GitHub Webhook 接收服务
// 用于接收 GitHub 的 push 事件，触发自动部署
// ============================================

const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// 配置
const PORT = process.env.PORT || 9000;
const SECRET_PATH = path.join(__dirname, 'webhook-secret.txt');
const DEPLOY_SCRIPT = path.join(__dirname, 'webhook.sh');
const LOG_FILE = path.join(__dirname, 'webhook.log');

// 读取 webhook 密钥
function getSecret() {
  try {
    return fs.readFileSync(SECRET_PATH, 'utf8').trim();
  } catch (err) {
    console.error('[ERROR] 无法读取 webhook 密钥:', SECRET_PATH);
    console.error('请先运行部署脚本生成密钥');
    process.exit(1);
  }
}

// 验证 GitHub 签名
function verifySignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

// 记录日志
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, logMessage);
  console.log(logMessage.trim());
}

// 执行部署脚本
function deploy() {
  log('开始执行部署脚本...');
  
  exec(`bash "${DEPLOY_SCRIPT}"`, (error, stdout, stderr) => {
    if (error) {
      log(`[ERROR] 部署失败: ${error.message}`);
      if (stdout) log(`[stdout] ${stdout}`);
      if (stderr) log(`[stderr] ${stderr}`);
      return;
    }
    log('部署完成！');
    if (stdout) log(`[stdout] ${stdout}`);
  });
}

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 只处理 POST 请求
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  // 只处理 /webhook 路径
  if (req.url !== '/webhook') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  // 读取请求体
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    // 验证签名
    const signature = req.headers['x-hub-signature-256'];
    const secret = getSecret();

    if (!signature) {
      log('[ERROR] 缺少签名');
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing signature' }));
      return;
    }

    if (!verifySignature(body, signature, secret)) {
      log('[ERROR] 签名验证失败');
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid signature' }));
      return;
    }

    // 解析事件
    const event = req.headers['x-github-event'];
    const payload = JSON.parse(body);

    log(`收到 GitHub 事件: ${event}`);
    log(`仓库: ${payload.repository?.full_name}`);
    log(`分支: ${payload.ref}`);

    // 只处理 master 分支的 push 事件
    if (event === 'push' && payload.ref === 'refs/heads/master') {
      log('触发自动部署...');
      
      // 异步执行部署（不阻塞响应）
      deploy();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Deployment triggered' }));
    } else {
      log('忽略事件（不是 master 分支的 push）');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Event ignored' }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`GitHub Webhook 服务已启动: http://localhost:${PORT}/webhook`);
  console.log(`部署脚本: ${DEPLOY_SCRIPT}`);
  console.log(`日志文件: ${LOG_FILE}`);
});

// 优雅退出
process.on('SIGTERM', () => {
  console.log('正在关闭 Webhook 服务...');
  server.close(() => {
    console.log('Webhook 服务已关闭');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('正在关闭 Webhook 服务...');
  server.close(() => {
    console.log('Webhook 服务已关闭');
    process.exit(0);
  });
});

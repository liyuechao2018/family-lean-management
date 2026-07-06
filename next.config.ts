import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 部署到子路径 /lean-management
  basePath: '/lean-management',
  // 确保在子路径下正确解析静态资源
  assetPrefix: '/lean-management/',
};

export default nextConfig;

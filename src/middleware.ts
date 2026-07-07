import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-production';

function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // 临时调试日志
  console.log('[middleware] pathname:', pathname, 'hasToken:', !!request.cookies.get('auth_token')?.value);

  // 跳过鉴权的路径（basePath 模式下 pathname 包含 basePath）
  const publicPaths = [
    '/lean-management/login',
    '/lean-management/register',
    '/lean-management/api/auth/',
    '/lean-management/_next/',
    '/lean-management/favicon.ico',
  ];
  if (publicPaths.some(p => pathname.startsWith(p))) {
    console.log('[middleware] public path, skipping');
    return NextResponse.next();
  }

  // 只保护 /lean-management 下的路由
  if (!pathname.startsWith('/lean-management')) {
    console.log('[middleware] not under /lean-management, skipping');
    return NextResponse.next();
  }

  // 检查 token
  const token = request.cookies.get('auth_token')?.value;
  if (!token || !verifyToken(token)) {
    console.log('[middleware] no valid token, redirecting to login');
    const loginUrl = new URL('/lean-management/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  console.log('[middleware] valid token, proceeding');
  return NextResponse.next();
}

// 注意：basePath 模式下 matcher 不要包含 basePath 前缀
// Next.js 会自动处理 basePath，否则会变成双重的 /lean-management/lean-management/...
export const config = {
  matcher: [
    '/:path*',
  ],
};

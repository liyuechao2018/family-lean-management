import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-production';

// 注意：basePath 模式下 middleware 的 pathname 不包含 basePath 前缀
// Next.js 在调用 middleware 前已经剥离了 basePath

function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 跳过鉴权的路径（不含 basePath 前缀）
  const publicPaths = [
    '/login',
    '/register',
    '/api/auth/',
    '/_next/',
    '/favicon.ico',
  ];
  if (publicPaths.some(p => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // 检查 token
  const token = request.cookies.get('auth_token')?.value;
  if (!token || !verifyToken(token)) {
    const loginUrl = new URL('/lean-management/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 排除静态资源，只拦截页面和 API 路由
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

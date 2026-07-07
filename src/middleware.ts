import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-production';
const PROTECTED_PREFIX = '/lean-management/';

function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 跳过鉴权的路径
  const publicPaths = [
    '/lean-management/login',
    '/lean-management/register',
    '/lean-management/api/auth/',
    '/lean-management/_next/',
    '/lean-management/favicon.ico',
  ];
  if (publicPaths.some(p => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // 只保护 /lean-management 下的路由
  if (!pathname.startsWith(PROTECTED_PREFIX)) {
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
  matcher: ['/lean-management/:path*'],
};

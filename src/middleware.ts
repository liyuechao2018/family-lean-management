import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 注意：basePath 模式下 middleware 的 pathname 不包含 basePath 前缀
// 例如访问 /lean-management/tasks 时，pathname 是 /tasks

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 公开路径（不需要鉴权）—— 不含 basePath 前缀
  const publicPaths = [
    '/login',
    '/api/auth/',
    '/_next/',
    '/favicon.ico',
  ];
  if (publicPaths.some(p => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // 检查 token（只检查是否存在，JWT 验证由 API 层处理）
  const token = request.cookies.get('auth_token')?.value;
  if (!token) {
    // redirect 时需要包含 basePath
    const loginUrl = new URL('/lean-management/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// matcher 不含 basePath 前缀（Next.js 会自动处理）
export const config = {
  matcher: [
    '/:path*',
  ],
};

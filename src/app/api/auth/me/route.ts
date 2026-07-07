import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function GET(request: Request) {
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(/auth_token=([^;]+)/);
  if (!match) {
    return NextResponse.json({ error: '未登录' }, { status: 401 });
  }

  const payload = verifyToken(match[1]);
  if (!payload) {
    return NextResponse.json({ error: 'Token 无效' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, name: true },
  });

  if (!user) {
    return NextResponse.json({ error: '用户不存在' }, { status: 401 });
  }

  return NextResponse.json({ user });
}

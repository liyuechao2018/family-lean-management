import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, signToken, getCookieOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: '邮箱和密码不能为空' }, { status: 400 });
    }

    // 检查用户是否已存在
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: '该邮箱已注册' }, { status: 400 });
    }

    // 创建用户
    const passwordHash = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: passwordHash, name },
    });

    // 生成 token
    const token = signToken({ userId: user.id, email: user.email });
    const res = NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name } });

    // 设置 cookie
    const opts = getCookieOptions();
    res.cookies.set({ ...opts, value: token });

    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword, signToken, getCookieOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: '邮箱和密码不能为空' }, { status: 400 });
    }

    // 查找用户
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: '邮箱或密码错误' }, { status: 401 });
    }

    // 验证密码
    const valid = await comparePassword(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: '邮箱或密码错误' }, { status: 401 });
    }

    // 生成 token
    const token = signToken({ userId: user.id, email: user.email });
    const res = NextResponse.json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name },
    });

    // 设置 cookie
    const opts = getCookieOptions();
    res.cookies.set({ ...opts, value: token });

    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

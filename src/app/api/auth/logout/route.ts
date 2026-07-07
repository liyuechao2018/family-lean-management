import { NextResponse } from 'next/server';
import { getCookieOptions } from '@/lib/auth';

export async function POST() {
  const res = NextResponse.json({ success: true });
  const opts = getCookieOptions();
  res.cookies.set({ ...opts, value: '', maxAge: 0 });
  return res;
}

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-production';
const TOKEN_NAME = 'auth_token';
// 7 天有效期
const EXPIRES_IN = 60 * 60 * 24 * 7;

export interface JwtPayload {
  userId: string;
  email: string;
}

/** 生成 JWT Token */
export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRES_IN });
}

/** 验证 JWT Token */
export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}

/** 密码哈希 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

/** 验证密码 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/** 从 cookie 中获取当前用户 */
export async function getCurrentUser(): Promise<JwtPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

/** 设置 auth cookie 的参数 */
export function getCookieOptions() {
  return {
    name: TOKEN_NAME,
    value: '',
    httpOnly: true,
    path: '/',
    maxAge: EXPIRES_IN,
    sameSite: 'lax' as const,
  };
}

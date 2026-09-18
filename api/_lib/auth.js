// 鉴权工具：
//  1) Supabase JWT（登录用户 / 管理员）
//  2) manage_token（订单确认邮件里的管理链接，游客改期/取消用，无需注册）

import crypto from 'crypto';
import { getDB } from './db.js';

export const MANAGE_TOKEN_TTL_HOURS = 72;

export function httpError(status, message) {
  const e = new Error(message);
  e.status = status;
  return e;
}

// ———— Supabase JWT ————

export async function getUser(req) {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7).trim() : null;
  if (!token) return null;
  const db = getDB();
  const { data, error } = await db.auth.getUser(token);
  if (error || !data || !data.user) return null;
  return data.user;
}

export async function requireUser(req) {
  const u = await getUser(req);
  if (!u) throw httpError(401, 'Please sign in');
  return u;
}

export async function isAdmin(userId) {
  const db = getDB();
  const { data } = await db.from('profiles').select('role').eq('id', userId).single();
  return data && data.role === 'admin';
}

export async function requireAdmin(req) {
  const u = await requireUser(req);
  if (!(await isAdmin(u.id))) throw httpError(403, 'Admin only');
  return u;
}

// ———— manage_token ————

export function newManageToken() {
  return crypto.randomBytes(32).toString('hex');
}

export function hashToken(token) {
  return crypto.createHash('sha256').update(String(token)).digest('hex');
}

function timingSafeEq(a, b) {
  const A = Buffer.from(String(a));
  const B = Buffer.from(String(b));
  return A.length === B.length && crypto.timingSafeEqual(A, B);
}

// order 需包含 manage_token_hash / manage_token_expires_at（存的是 SHA-256 摘要）
export function verifyManageToken(order, token) {
  if (!order || !token) return false;
  if (!order.manage_token_hash) return false;
  if (
    order.manage_token_expires_at &&
    new Date(order.manage_token_expires_at).getTime() < Date.now()
  ) {
    return false;
  }
  return timingSafeEq(order.manage_token_hash, hashToken(token));
}

// 随机人类可读订单号：VCG-YYYYMMDD-XXXXXX
export function newOrderNo() {
  const d = new Date();
  const ymd = d.getUTCFullYear() +
    String(d.getUTCMonth() + 1).padStart(2, '0') +
    String(d.getUTCDate()).padStart(2, '0');
  const rnd = crypto.randomBytes(4).toString('hex').toUpperCase();
  return `VCG-${ymd}-${rnd}`;
}

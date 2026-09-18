// 输入校验与清洗

export function isEmail(v) {
  return typeof v === 'string' && /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(v);
}

// 去控制字符 + trim + 截断
export function str(v, maxLen = 500) {
  if (typeof v !== 'string') return '';
  return v
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, maxLen);
}

export function int(v, fallback, min, max) {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(Math.max(Math.round(n), min), max);
}

// YYYY-MM-DD
export function isDate(v) {
  return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v + 'T00:00:00Z'));
}

// honeypot：隐藏字段 website_url 被填 = 机器人
export function isHoneypotTripped(body) {
  return Boolean(
    body && typeof body.website_url === 'string' && body.website_url.trim() !== ''
  );
}

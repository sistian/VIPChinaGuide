// 统一 HTTP 响应 + CORS + 安全体
// 同源部署下浏览器请求无需 CORS；FRONTEND_URL 命中的来源才放行跨域（过渡期兼容旧部署）

const ALLOWED_ORIGINS = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((s) => s.trim().replace(/\/+$/, ''))
  .filter(Boolean);

function applyCommon(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
}

// 返回 true 表示这是 OPTIONS 预检，调用方直接 return
export function cors(req, res) {
  applyCommon(res);
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin.replace(/\/+$/, ''))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Max-Age', '86400');
  }
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return true;
  }
  return false;
}

export function json(res, status, data) {
  res.status(status).json(data);
}

export function errJson(res, status, message, extra) {
  json(res, status, { error: message, ...(extra || {}) });
}

export function clientIp(req) {
  return (
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.headers['x-real-ip'] ||
    'unknown'
  );
}

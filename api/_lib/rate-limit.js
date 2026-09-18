// 内存滑动窗口限流（尽力而为：Serverless 冷启动会重置计数，足够挡住单实例滥用；
// 若后续遇到规模化滥用，再升级为 Upstash Redis 分布式限流）

const buckets = new Map();

export function rateLimit(key, limit, windowMs) {
  const now = Date.now();
  let b = buckets.get(key);
  if (!b || now > b.resetAt) {
    b = { count: 0, resetAt: now + windowMs };
    buckets.set(key, b);
  }
  b.count += 1;

  // 防内存膨胀：超过 5000 个桶时清理过期的
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (now > v.resetAt) buckets.delete(k);
    }
  }

  return { ok: b.count <= limit, retryAfterSec: Math.ceil((b.resetAt - now) / 1000) };
}

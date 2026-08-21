const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
export function getCountdownParts(target, now = Date.now()) {
  const remaining = new Date(target).getTime() - now
  if (!Number.isFinite(remaining) || remaining <= 0) return null
  return { days: Math.floor(remaining / DAY), hours: Math.floor((remaining % DAY) / HOUR), minutes: Math.floor((remaining % HOUR) / MINUTE), seconds: Math.floor((remaining % MINUTE) / SECOND) }
}

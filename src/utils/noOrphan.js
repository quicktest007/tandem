/** Keep the last two words together to avoid single-word orphans. */
export function noOrphan(text) {
  const value = String(text).trim()
  const breakAt = value.lastIndexOf(' ')
  if (breakAt === -1) return value
  return `${value.slice(0, breakAt)}\u00A0${value.slice(breakAt + 1)}`
}

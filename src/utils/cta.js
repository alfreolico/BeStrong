export function buildCtaUrl({ kind, destination, message = '' }) {
  if (!destination) return null
  if (kind === 'whatsapp') {
    const phone = destination.replace(/\D/g, '')
    return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null
  }
  try {
    const url = new URL(destination)
    if (!['http:', 'https:'].includes(url.protocol)) return null
    if (message) url.searchParams.set('message', message)
    return url.toString()
  } catch { return null }
}

import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getCountdownParts } from '../utils/countdown'
export function Countdown({ config }) {
  const [parts, setParts] = useState(() => getCountdownParts(config.target))
  useEffect(() => { const update = () => setParts(getCountdownParts(config.target)); update(); const id = window.setInterval(update, 1000); return () => window.clearInterval(id) }, [config.target])
  if (!parts) return <p className="countdown-finished">Este momento ya ocurrió. Gracias por ser parte.</p>
  return <section className="countdown" aria-label="Cuenta regresiva para el evento">{Object.entries(parts).map(([label, value]) => <div className="countdown-unit" key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</section>
}

Countdown.propTypes = { config: PropTypes.shape({ target: PropTypes.string.isRequired }).isRequired }

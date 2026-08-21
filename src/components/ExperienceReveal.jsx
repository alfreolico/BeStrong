export function ExperienceReveal({ config, onOpen }) {
  const onKeyDown = (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onOpen() } }
  return <main className={`reveal-screen theme--${config.theme}`}><div className="reveal-card"><p className="eyebrow">{config.reveal.eyebrow}</p><span className="reveal-mark" aria-hidden="true">{config.mode === 'gift' ? '♥' : '✦'}</span><h1>{config.mode === 'gift' ? config.identity.recipient : config.identity.hosts}</h1><p className="reveal-copy">{config.mode === 'gift' ? 'Hay algo preparado especialmente para ti.' : 'Nos encantaría contar contigo.'}</p><button className="reveal-button" onClick={onOpen} onKeyDown={onKeyDown}>{config.reveal.label}</button></div></main>
}

ExperienceReveal.propTypes = { config: PropTypes.shape({ mode: PropTypes.string.isRequired, theme: PropTypes.string.isRequired, reveal: PropTypes.shape({ eyebrow: PropTypes.string.isRequired, label: PropTypes.string.isRequired }).isRequired, identity: PropTypes.shape({ recipient: PropTypes.string, hosts: PropTypes.string }).isRequired }).isRequired, onOpen: PropTypes.func.isRequired }
import PropTypes from 'prop-types'

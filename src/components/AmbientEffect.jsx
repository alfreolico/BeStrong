function getParticleStyle(index) {
  return { '--x': `${(index * 37) % 100}%`, '--delay': `${(index % 8) * -0.7}s`, '--duration': `${7 + (index % 5)}s`, '--size': `${12 + (index % 4) * 5}px` }
}
export function AmbientEffect({ effect }) {
  if (!effect?.type || !effect.count) return null
  const symbol = effect.type === 'hearts' ? '♥' : '✦'
  return <div className={`ambient-effect ambient-effect--${effect.type}`} aria-hidden="true">{Array.from({ length: effect.count }, (_, index) => <span className="ambient-particle" key={index} style={getParticleStyle(index)}>{symbol}</span>)}</div>
}

AmbientEffect.propTypes = { effect: PropTypes.shape({ type: PropTypes.string, count: PropTypes.number }) }
import PropTypes from 'prop-types'

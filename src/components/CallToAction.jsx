import { buildCtaUrl } from '../utils/cta'
import PropTypes from 'prop-types'
export function CallToAction({ cta }) { if (!cta?.enabled) return null; const href = buildCtaUrl(cta); return href ? <a className="primary-cta" href={href} target="_blank" rel="noreferrer noopener">{cta.label}</a> : null }

CallToAction.propTypes = { cta: PropTypes.shape({ enabled: PropTypes.bool, kind: PropTypes.string, destination: PropTypes.string, message: PropTypes.string, label: PropTypes.string }) }

export function Gallery({ gallery }) {
  if (!gallery?.enabled || !gallery.items?.length) return null
  return <section className="content-section gallery-section" aria-labelledby="gallery-title"><p className="section-kicker">Recuerdos</p><h2 id="gallery-title">{gallery.title}</h2><div className={`gallery-grid gallery-grid--${Math.min(gallery.items.length, 3)}`}>{gallery.items.map((image) => <figure className="gallery-item" key={image.src}><img src={image.src} alt={image.alt} /></figure>)}</div></section>
}

Gallery.propTypes = { gallery: PropTypes.shape({ enabled: PropTypes.bool, title: PropTypes.string, items: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })) }) }
import PropTypes from 'prop-types'

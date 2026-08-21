import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
export function MusicControl({ music }) {
  const audioRef = useRef(null); const [isPlaying, setIsPlaying] = useState(false)
  if (!music?.enabled || !music.src) return null
  const togglePlayback = async () => { if (!audioRef.current) return; if (audioRef.current.paused) { try { await audioRef.current.play(); setIsPlaying(true) } catch { setIsPlaying(false) } } else { audioRef.current.pause(); setIsPlaying(false) } }
  return <div className="music-control"><audio ref={audioRef} loop preload="metadata" onEnded={() => setIsPlaying(false)}><source src={music.src} type="audio/mpeg" /></audio><button type="button" onClick={togglePlayback} aria-pressed={isPlaying}><span aria-hidden="true">{isPlaying ? 'Ⅱ' : '▶'}</span>{isPlaying ? `Pausar ${music.label}` : `Reproducir ${music.label}`}</button></div>
}

MusicControl.propTypes = { music: PropTypes.shape({ enabled: PropTypes.bool, src: PropTypes.string, label: PropTypes.string }) }

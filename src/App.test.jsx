import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { ExperiencePage } from './components/ExperiencePage'
import { Countdown } from './components/Countdown'
import { Gallery } from './components/Gallery'
import { MusicControl } from './components/MusicControl'
import { experiences, getExperienceId } from './config/experiences'
import { buildCtaUrl } from './utils/cta'

function renderExperience(id) {
  window.history.pushState({}, '', `/?experience=${id}`)
  return render(<App />)
}

describe('Special Moments', () => {
  afterEach(() => window.history.pushState({}, '', '/'))

  it('T1 renders the romantic preset after reveal', () => {
    renderExperience('romantic')
    fireEvent.click(screen.getByRole('button', { name: 'Abrir regalo' }))
    expect(screen.getByText(experiences.romantic.hero.title)).toBeTruthy()
    expect(screen.getByText('Una dedicatoria')).toBeTruthy()
  })

  it('T2 renders the invitation preset after reveal', () => {
    renderExperience('invitation')
    fireEvent.click(screen.getByRole('button', { name: 'Abrir invitación' }))
    expect(screen.getByText('Casa Lumen')).toBeTruthy()
    expect(screen.getByText('Dress code')).toBeTruthy()
  })

  it('T3 does not render disabled optional sections', () => {
    const config = { ...experiences.romantic, gallery: { enabled: false }, music: { enabled: false }, cta: { enabled: false } }
    render(<ExperiencePage config={config} />)
    expect(screen.queryByText('Pequeños recuerdos')).toBeNull()
    expect(screen.queryByRole('button', { name: /Reproducir/ })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Enviar un mensaje' })).toBeNull()
  })

  it('T4 opens the reveal on click', () => {
    renderExperience('romantic')
    fireEvent.click(screen.getByRole('button', { name: 'Abrir regalo' }))
    expect(screen.getByRole('main').className).toContain('experience')
  })

  it('T5 opens the reveal with keyboard', () => {
    renderExperience('invitation')
    fireEvent.keyDown(screen.getByRole('button', { name: 'Abrir invitación' }), { key: 'Enter' })
    expect(screen.getByText('Confirmar asistencia')).toBeTruthy()
  })

  it('T6 renders gallery content from configuration', () => {
    render(<Gallery gallery={{ enabled: true, title: 'Galería configurable', items: [{ src: '/custom.jpg', alt: 'Imagen personalizada' }] }} />)
    expect(screen.getByRole('img', { name: 'Imagen personalizada' }).getAttribute('src')).toBe('/custom.jpg')
  })

  it('T7 only renders music control when enabled', () => {
    const { rerender } = render(<MusicControl music={{ enabled: false }} />)
    expect(screen.queryByRole('button')).toBeNull()
    rerender(<MusicControl music={{ enabled: true, src: '/song.mp3', label: 'Música demo' }} />)
    expect(screen.getByRole('button', { name: 'Reproducir Música demo' })).toBeTruthy()
  })

  it('T8 builds safe WhatsApp and RSVP URLs', () => {
    expect(buildCtaUrl({ kind: 'whatsapp', destination: '+52 (938) 144-8996', message: 'Hola & gracias' })).toBe('https://wa.me/529381448996?text=Hola%20%26%20gracias')
    expect(buildCtaUrl({ kind: 'rsvp', destination: 'https://example.com/rsvp', message: 'Sí' })).toBe('https://example.com/rsvp?message=S%C3%AD')
    expect(buildCtaUrl({ kind: 'rsvp', destination: 'javascript:alert(1)' })).toBeNull()
  })

  it('T9 renders countdown parts with controlled time', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2027-06-10T18:30:00-06:00'))
    render(<Countdown config={{ target: '2027-06-12T18:30:00-06:00' }} />)
    expect(screen.getByText('02')).toBeTruthy()
    expect(screen.getByText('days')).toBeTruthy()
    vi.useRealTimers()
  })

  it('T10 handles a past countdown', () => {
    render(<Countdown config={{ target: '2020-01-01T00:00:00-06:00' }} />)
    expect(screen.getByText(/ya ocurrió/)).toBeTruthy()
  })

  it('T11 selects known presets and falls back safely', () => {
    expect(getExperienceId('?experience=invitation')).toBe('invitation')
    expect(getExperienceId('?experience=unknown')).toBe('romantic')
  })

  it('T12 uses configured content instead of the former Valentine title', () => {
    render(<ExperiencePage config={experiences.romantic} />)
    expect(screen.queryByText('¿Serás mi San Valentín?')).toBeNull()
    expect(screen.getByText(experiences.romantic.hero.title)).toBeTruthy()
  })
})

import romanticMusic from '../assets/larolita.mp3'

const romanticGallery = [
  { src: '/izquierda.jpeg', alt: 'Pareja caminando durante una tarde especial' },
  { src: '/centro.jpeg', alt: 'Recuerdo de una celebración romántica' },
  { src: '/derecha.jpeg', alt: 'Momento compartido al aire libre' },
]

export const experiences = {
  romantic: {
    id: 'romantic', mode: 'gift', theme: 'romantic',
    reveal: { eyebrow: 'Un momento para ti', label: 'Abrir regalo' },
    identity: { recipient: 'Alguien muy especial', sender: 'Con cariño' },
    hero: { eyebrow: 'Una experiencia para recordar', title: 'Nuestro momento favorito todavía está por venir.', subtitle: 'Una pequeña pausa para celebrar lo que hace única esta fecha.' },
    dedication: { title: 'Para ti', message: 'Gracias por convertir los días comunes en recuerdos que quiero guardar para siempre.' },
    gallery: { enabled: true, title: 'Pequeños recuerdos', items: romanticGallery },
    music: { enabled: true, src: romanticMusic, label: 'Nuestra canción' },
    cta: { enabled: true, kind: 'whatsapp', destination: '529381448996', message: 'Acabo de abrir tu experiencia especial. Gracias por este momento.', label: 'Enviar un mensaje' },
    effects: { type: 'hearts', count: 24 },
  },
  invitation: {
    id: 'invitation', mode: 'invitation', theme: 'elegant',
    reveal: { eyebrow: 'Una invitación especial', label: 'Abrir invitación' },
    identity: { hosts: 'Amelia & Daniel', sender: 'Demo ficticia' },
    hero: { eyebrow: 'Save the date', title: 'Una noche para brindar por los nuevos comienzos.', subtitle: 'Acompáñanos a celebrar una fecha que queremos recordar contigo.' },
    event: {
      dateLabel: 'Sábado, 12 de junio de 2027', timeLabel: '18:30 h',
      countdown: { enabled: true, target: '2027-06-12T18:30:00-06:00' },
      location: { venue: 'Casa Lumen', address: 'Av. de la Luz 128, Ciudad de Ejemplo', directionsUrl: 'https://example.com/directions' },
      dressCode: 'Elegante contemporáneo',
    },
    gallery: { enabled: true, title: 'La atmósfera', items: romanticGallery.slice(0, 2) },
    music: { enabled: false },
    cta: { enabled: true, kind: 'rsvp', destination: 'https://example.com/rsvp', message: 'Confirmo mi asistencia a la celebración.', label: 'Confirmar asistencia' },
    effects: { type: 'sparkles', count: 18 },
  },
}

export const defaultExperienceId = 'romantic'
export function getExperienceId(search = '') {
  const requested = new URLSearchParams(search).get('experience')
  return Object.hasOwn(experiences, requested) ? requested : defaultExperienceId
}

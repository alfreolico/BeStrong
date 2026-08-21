import { useState } from 'react'
import { ExperiencePage } from './components/ExperiencePage'
import { ExperienceReveal } from './components/ExperienceReveal'
import { experiences, getExperienceId } from './config/experiences'

function App() {
  const config = experiences[getExperienceId(window.location.search)]
  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? <ExperiencePage config={config} /> : <ExperienceReveal config={config} onOpen={() => setIsOpen(true)} />
}

export default App

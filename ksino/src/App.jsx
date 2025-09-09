import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import LandingPage from './components/LandingPage'
import { getRandomWhatsAppLink } from './utils/trafficDistribution'

function App() {
  const [whatsappLink, setWhatsappLink] = useState('')

  useEffect(() => {
    // Obtener link de WhatsApp según distribución de tráfico
    const link = getRandomWhatsAppLink()
    setWhatsappLink(link)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank')
  }

  return (
    <div className="app">
      <LandingPage 
        onWhatsAppClick={handleWhatsAppClick}
      />
    </div>
  )
}

export default App

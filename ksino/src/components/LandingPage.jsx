import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './LandingPage.scss'

const LandingPage = ({ onWhatsAppClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images] = useState([
    "/src/assets/images/1.jpeg",
    "/src/assets/images/2.jpeg"
  ])

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="landing-page">
      {/* Carrusel de imágenes de fondo */}
      <div className="image-carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
          >
            <img 
              src={img} 
              alt={`Imperial Luck ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      {/* Overlay oscuro */}
      <div className="overlay" />

      {/* Contenido superpuesto */}
      <div className="content-overlay">
        <Container fluid className="h-100">
          <Row className="h-100 align-items-center justify-content-center">
            <Col xs={12} className="text-center">
              <div className="content-wrapper">
                {/* Logo o título */}
                <div className="brand-section mb-4">
                  <h1 className="brand-title">Imperial Luck</h1>
                  <p className="brand-subtitle">Tu suerte te espera</p>
                </div>

                {/* Botón de WhatsApp */}
                <div className="cta-section">
                  <Button 
                    variant="success" 
                    size="lg" 
                    className="whatsapp-btn"
                    onClick={onWhatsAppClick}
                  >
                    <i className="fab fa-whatsapp me-2"></i>
                    ¡Juega Ahora!
                  </Button>
                </div>

                {/* Texto adicional */}
                <div className="additional-text mt-4">
                  <p className="text-muted">
                    Únete a la diversión y gana grandes premios
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default LandingPage

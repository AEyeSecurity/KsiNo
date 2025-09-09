import { LANDING_CONFIG } from '../config/landingConfig'

// Función para obtener un link de WhatsApp aleatorio según la distribución
export const getRandomWhatsAppLink = () => {
  const random = Math.random() * 100
  let cumulativePercentage = 0
  
  for (let i = 0; i < LANDING_CONFIG.traffic.percentages.length; i++) {
    cumulativePercentage += LANDING_CONFIG.traffic.percentages[i]
    if (random <= cumulativePercentage) {
      const whatsappData = LANDING_CONFIG.traffic.whatsappNumbers[i]
      const encodedMessage = encodeURIComponent(whatsappData.message)
      return `https://wa.me/${whatsappData.number}?text=${encodedMessage}`
    }
  }
  
  // Fallback al primer número
  const firstNumber = LANDING_CONFIG.traffic.whatsappNumbers[0]
  const encodedMessage = encodeURIComponent(firstNumber.message)
  return `https://wa.me/${firstNumber.number}?text=${encodedMessage}`
}

// Función para obtener una imagen aleatoria
export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * LANDING_CONFIG.images.length)
  return LANDING_CONFIG.images[randomIndex]
}

// Función para obtener información de la marca
export const getBrandInfo = () => {
  return LANDING_CONFIG.brand
}

// Función para obtener configuración de colores
export const getColors = () => {
  return LANDING_CONFIG.colors
}

export default LANDING_CONFIG

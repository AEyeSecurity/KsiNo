// Configuración personalizable para las landing pages
export const LANDING_CONFIG = {
  // Información de la marca
  brand: {
    name: "Imperial Luck",
    subtitle: "Tu suerte te espera",
    description: "Únete a la diversión y gana grandes premios"
  },

  // Configuración de distribución de tráfico
  traffic: {
    // Porcentajes de distribución (deben sumar 100)
    percentages: [33, 33, 34], // 33%, 33%, 34%
    
    // Números de WhatsApp para cada cajero
    whatsappNumbers: [
      {
        number: "1234567890", // Reemplaza con el número real del primer cajero
        message: "Hola! Quiero jugar en Imperial Luck"
      },
      {
        number: "0987654321", // Reemplaza con el número real del segundo cajero
        message: "¡Hola! Me interesa jugar"
      },
      {
        number: "1122334455", // Reemplaza con el número real del tercer cajero
        message: "Quiero empezar a jugar ahora"
      }
    ]
  },

  // Imágenes para rotar (usando tus imágenes locales)
  images: [
    "/src/assets/images/1.jpeg",
    "/src/assets/images/2.jpeg"
  ],

  // Colores personalizables
  colors: {
    primary: "#25D366", // Verde WhatsApp
    secondary: "#FFD700", // Dorado
    background: "#1a1a1a",
    text: "#ffffff"
  }
}

// Función para agregar más cajeros
export const addCajero = (number, message, percentage) => {
  LANDING_CONFIG.traffic.whatsappNumbers.push({ number, message })
  LANDING_CONFIG.traffic.percentages.push(percentage)
  
  // Rebalancear porcentajes para que sumen 100
  const total = LANDING_CONFIG.traffic.percentages.reduce((sum, p) => sum + p, 0)
  LANDING_CONFIG.traffic.percentages = LANDING_CONFIG.traffic.percentages.map(p => 
    Math.round((p / total) * 100)
  )
}

// Función para actualizar porcentajes
export const updatePercentages = (newPercentages) => {
  const total = newPercentages.reduce((sum, p) => sum + p, 0)
  if (total !== 100) {
    console.warn('Los porcentajes deben sumar 100. Ajustando automáticamente...')
    LANDING_CONFIG.traffic.percentages = newPercentages.map(p => 
      Math.round((p / total) * 100)
    )
  } else {
    LANDING_CONFIG.traffic.percentages = newPercentages
  }
}

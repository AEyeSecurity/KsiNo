# Sistema de Landing Pages Rotativas - Imperial Luck

## Descripción
Sistema de landing pages para casinos con distribución automática de tráfico a diferentes números de WhatsApp según porcentajes configurables.

## Características
- ✅ Landing pages rotativas con imágenes aleatorias
- ✅ Distribución de tráfico por porcentajes (33%, 33%, 34%)
- ✅ Botones de WhatsApp que redirigen a diferentes cajeros
- ✅ Diseño responsive y moderno
- ✅ Panel de administración para gestionar cajeros
- ✅ Palabras seguras para evitar censura de IA

## Instalación
```bash
npm install
npm run dev
```

## Configuración

### 1. Números de WhatsApp
Edita el archivo `src/config/landingConfig.js` y actualiza los números:

```javascript
whatsappNumbers: [
  {
    number: "1234567890", // Tu número real
    message: "Hola! Quiero jugar en Imperial Luck"
  },
  // ... más cajeros
]
```

### 2. Imágenes
Agrega tus imágenes en `src/assets/images/` y actualiza la configuración:

```javascript
images: [
  "/src/assets/images/casino1.jpg",
  "/src/assets/images/casino2.jpg", 
  // ... más imágenes
]
```

### 3. Distribución de Tráfico
Modifica los porcentajes en `landingConfig.js`:

```javascript
percentages: [33, 33, 34], // Deben sumar 100
```

## Uso

### Landing Page Principal
- Cada visitante verá una imagen aleatoria
- Al hacer clic en "¡Juega Ahora!", se redirige a WhatsApp
- El número de WhatsApp se asigna según los porcentajes configurados

### Panel de Administración
Accede a `/admin` para:
- Ver la distribución actual de tráfico
- Modificar porcentajes
- Agregar nuevos cajeros
- Gestionar mensajes de WhatsApp

## Estructura del Proyecto
```
src/
├── components/
│   ├── LandingPage.jsx      # Componente principal
│   ├── LandingPage.scss     # Estilos de la landing
│   ├── AdminPanel.jsx       # Panel de administración
│   └── AdminPanel.scss      # Estilos del panel
├── config/
│   └── landingConfig.js     # Configuración principal
├── utils/
│   └── trafficDistribution.js # Lógica de distribución
└── assets/
    └── images/              # Imágenes para rotar
```

## Personalización

### Colores
Modifica los colores en `landingConfig.js`:
```javascript
colors: {
  primary: "#25D366",    // Verde WhatsApp
  secondary: "#FFD700",  // Dorado
  background: "#1a1a1a", // Fondo oscuro
  text: "#ffffff"        // Texto blanco
}
```

### Textos
Cambia los textos de la marca:
```javascript
brand: {
  name: "Imperial Luck",
  subtitle: "Tu suerte te espera",
  description: "Únete a la diversión y gana grandes premios"
}
```

## Funciones Disponibles

### Agregar Cajero
```javascript
import { addCajero } from './config/landingConfig'

addCajero("1234567890", "Mensaje personalizado", 25)
```

### Actualizar Porcentajes
```javascript
import { updatePercentages } from './config/landingConfig'

updatePercentages([40, 30, 30]) // 40%, 30%, 30%
```

## Notas Importantes
- Los porcentajes deben sumar exactamente 100
- Los números de WhatsApp deben incluir código de país
- Las imágenes deben estar optimizadas para web
- El sistema es completamente responsive

## Soporte
Para dudas o problemas, revisa la configuración en `landingConfig.js` y asegúrate de que todos los porcentajes sumen 100.

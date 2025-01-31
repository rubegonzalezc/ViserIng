/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1B3C73',    // Azul oscuro corporativo
          secondary: '#FF6B35',  // Naranja vibrante
          accent: '#4A90E2',     // Azul claro
          background: '#F5F7FA', // Gris muy claro para fondos
          surface: '#FFFFFF',    // Blanco para tarjetas
          'text-primary': '#2C3E50',    // Gris oscuro para texto principal
          'text-secondary': '#606F7B',  // Gris medio para texto secundario
          error: '#DC3545',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }
  }
})

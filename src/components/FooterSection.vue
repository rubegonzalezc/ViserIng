<template>
  <v-footer class="custom-footer">
    <v-container>
      <v-row>
        <!-- Logo y descripción -->
        <v-col cols="12" md="4" class="footer-brand">
          <div class="logo-container">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
              alt="Logo"
              width="180"
              class="mb-4"
            ></v-img>
          </div>
          <p class="footer-description">
            Expertos en automatización industrial y soluciones tecnológicas avanzadas para optimizar tus procesos productivos.
          </p>
        </v-col>

        <!-- Enlaces rápidos -->
        <v-col cols="12" sm="6" md="4">
          <h3 class="footer-title">Enlaces Rápidos</h3>
          <v-list class="footer-links">
            <v-list-item
              v-for="(link, index) in quickLinks"
              :key="index"
              :href="link.to"
              class="footer-link-item"
              density="compact"
            >
              <v-icon :icon="link.icon" size="small" class="mr-2"></v-icon>
              {{ link.text }}
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Información de contacto -->
        <v-col cols="12" sm="6" md="4">
          <h3 class="footer-title">Contacto</h3>
          <v-list class="footer-contact">
            <v-list-item
              v-for="(contact, index) in contactInfo"
              :key="index"
              class="contact-item"
              density="compact"
            >
              <v-icon :icon="contact.icon" size="small" class="mr-2"></v-icon>
              {{ contact.text }}
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- Redes sociales y copyright -->
      <v-divider class="my-6"></v-divider>
      
      <div class="footer-bottom">
        <div class="social-links">
          <v-btn
            v-for="(social, index) in socialLinks"
            :key="index"
            :href="social.url"
            target="_blank"
            variant="text"
            icon
            class="social-btn"
          >
            <v-icon :icon="social.icon"></v-icon>
          </v-btn>
        </div>

        <div class="copyright">
          <p>&copy; {{ new Date().getFullYear() }} Viser Ingeniería. Todos los derechos reservados.</p>
          <div class="developer-info">
            Desarrollado por 
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
              alt="Developer Logo"
              width="50"
              height="50"
              class="developer-logo"
              contain
            ></v-img>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
const quickLinks = [
  { text: 'Inicio', to: '#inicio', icon: 'mdi-home' },
  { text: 'Sobre Nosotros', to: '#sobre-nosotros', icon: 'mdi-information' },
  { text: 'Servicios', to: '#servicios', icon: 'mdi-cog' },
  { text: 'Proyectos', to: '#proyectos', icon: 'mdi-briefcase' },
  { text: 'Contacto', to: '#contacto', icon: 'mdi-email' }
]

const contactInfo = [
  { text: 'Av. Principal 123, Ciudad', icon: 'mdi-map-marker' },
  { text: '+1 234 567 890', icon: 'mdi-phone' },
  { text: 'contacto@empresa.com', icon: 'mdi-email' },
  { text: 'Lun - Vie: 9:00 - 18:00', icon: 'mdi-clock' }
]

const socialLinks = [
  { icon: 'mdi-facebook', url: 'https://facebook.com' },
  { icon: 'mdi-twitter', url: 'https://twitter.com' },
  { icon: 'mdi-linkedin', url: 'https://linkedin.com' },
  { icon: 'mdi-instagram', url: 'https://instagram.com' }
]
</script>

<style scoped>
.custom-footer {
  background-color: var(--primary-color);
  color: white;
  padding-top: 4rem;
  padding-bottom: 2rem;
}

.footer-brand {
  margin-bottom: 2rem;
}

.footer-description {
  opacity: 0.8;
  line-height: 1.6;
  margin-top: 1rem;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 40px;
  height: 2px;
  background-color: var(--secondary-color);
}

.footer-links,
.footer-contact {
  background-color: transparent !important;
  padding: 0;
}

.footer-link-item,
.contact-item {
  padding: 4px 0;
  min-height: 35px;
  color: rgba(255, 255, 255, 0.8) !important;
  background-color: transparent !important;
  transition: all 0.3s ease;
}

.footer-link-item:hover {
  color: var(--secondary-color) !important;
  padding-left: 8px;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-btn {
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-btn:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
}

.copyright {
  text-align: center;
  opacity: 0.8;
  font-size: 0.9rem;
}

.developer-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

.developer-logo {
  transition: transform 0.3s ease;
}

.developer-logo:hover {
  transform: scale(1.05);
}

@media (max-width: 960px) {
  .custom-footer {
    padding-top: 3rem;
  }

  .footer-bottom {
    margin-top: 2rem;
  }
}

@media (max-width: 600px) {
  .footer-title {
    margin-top: 2rem;
  }

  .social-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style> 
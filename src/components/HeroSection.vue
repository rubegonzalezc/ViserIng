<template>
  <section class="hero">
    <v-container fluid class="hero-wrapper pa-0">
      <div class="hero-overlay"></div>
      <v-container class="hero-content text-center">
        <h1 class="text-h2 font-weight-bold mb-4">
          Ingeniería en Automatización Industrial
        </h1>
        <p class="text-h5 mb-12">
          Transformando la industria a través de la tecnología y la innovación
        </p>
        
        <v-row class="hero-stats mb-12">
          <v-col cols="12" sm="4" v-for="stat in stats" :key="stat.label">
            <v-card class="stat-item pa-6" flat>
              <div class="stat-number" :data-target="stat.number">0</div>
              <div class="stat-label">{{ stat.label }}</div>
            </v-card>
          </v-col>
        </v-row>

        <div class="hero-cta d-flex justify-center">
          <v-btn
            class="cta-button cta-primary me-6"
            size="x-large"
            rounded="pill"
            @click="scrollToSection('nuestro-trabajo')"
          >
            Ver Proyectos
          </v-btn>
          <v-btn
            class="cta-button cta-secondary"
            size="x-large"
            rounded="pill"
            variant="outlined"
            @click="scrollToSection('contacto')"
          >
            Contáctanos
          </v-btn>
        </div>
      </v-container>
    </v-container>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const stats = [
  { number: 15, label: 'Años de Experiencia' },
  { number: 16, label: 'Proyectos Completados' },
  { number: 9, label: 'Clientes Satisfechos' }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const animateNumbers = () => {
  const stats = document.querySelectorAll('.stat-number')
  
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'))
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    
    const updateNumber = () => {
      current += step
      if (current < target) {
        stat.textContent = Math.floor(current)
        requestAnimationFrame(updateNumber)
      } else {
        stat.textContent = target
      }
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateNumber()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    
    observer.observe(stat)
  })
}

onMounted(() => {
  animateNumbers()
})
</script>

<style>
.hero {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  background: url('@/assets/fondo/Pneumatica-olehidraulica.jpg') center center / cover no-repeat;
  padding-top: 70px; /* Añadido para dar espacio al navbar */
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Overlay oscuro para mejorar legibilidad */
  z-index: 1;
}

.hero-wrapper {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding-top: 4rem; /* Aumentado el padding superior */
}

.hero-stats {
  margin: 0 -12px;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: bold;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  display: inline-flex;
  align-items: flex-start;
}

.stat-number::after {
  content: '+';
  font-size: 2rem;
  margin-left: 5px;
  margin-top: 8px;
  color: var(--secondary-color);
  opacity: 0.8;
  font-weight: 500;
}

.stat-label {
  font-size: 1.1rem;
  color: white;
  opacity: 0.9;
}

.cta-button {
  text-transform: none !important;
  font-weight: 600 !important;
  letter-spacing: normal !important;
  color: var(--text-color) !important;
}

.cta-primary {
  background-color: var(--secondary-color) !important;
  color: var(--text-color) !important;
}

.cta-secondary {
  border-color: white !important;
  color: white !important;
}

@media (max-width: 768px) {
  .hero {
    padding-top: 60px; /* Ajustado para móviles */
  }

  .hero-content {
    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .hero-content h1 {
    font-size: 2rem !important;
    margin-top: 2rem;
  }

  .hero-content p {
    font-size: 1rem !important;
  }

  .hero-stats {
    margin-top: 2rem;
  }

  .stat-number {
    font-size: 2.8rem;
  }
  
  .stat-number::after {
    font-size: 1.6rem;
    margin-top: 6px;
  }
  
  .stat-label {
    font-size: 1rem;
  }
}
</style>
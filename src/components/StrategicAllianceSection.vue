<template>
  <section id="alianza-estrategica" class="section alianza">
    <!-- Patrón de fondo -->
    <div class="background-pattern"></div>
    
    <v-container>
      <h2 class="section-title text-center" data-aos="fade-up">
        Alianza Estratégica
      </h2>
      
      <div class="logo-container mt-8" data-aos="fade-up" data-aos-delay="100">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
          alt="Logo de Tesla"
          class="alianza-logo"
          width="200"
          height="200"
          contain
        ></v-img>
      </div>

      <div class="trabajamos-con mt-16">
        <h3 class="section-subtitle text-center mb-12" data-aos="fade-up">
          Trabajamos con
        </h3>
        
        <!-- Carrusel infinito -->
        <div class="slider">
          <div class="slide-track">
            <!-- Primera serie de logos -->
            <div v-for="logo in partnerLogos" :key="`first-${logo.alt}`" class="slide">
              <v-card class="logo-item" flat>
                <v-img
                  :src="logo.src"
                  :alt="logo.alt"
                  height="80"
                  contain
                  class="partner-logo"
                ></v-img>
              </v-card>
            </div>
            <!-- Segunda serie de logos para el efecto infinito -->
            <div v-for="logo in partnerLogos" :key="`second-${logo.alt}`" class="slide">
              <v-card class="logo-item" flat>
                <v-img
                  :src="logo.src"
                  :alt="logo.alt"
                  height="80"
                  contain
                  class="partner-logo"
                ></v-img>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const partnerLogos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    alt: 'Microsoft'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    alt: 'Google'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    alt: 'IBM'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    alt: 'AWS'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    alt: 'Siemens'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    alt: 'Schneider Electric'
  }
]
</script>

<style scoped>
.alianza {
  background-color: var(--light);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(45deg, var(--primary-color) 25%, transparent 25%),
    linear-gradient(-45deg, var(--primary-color) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--primary-color) 75%),
    linear-gradient(-45deg, transparent 75%, var(--primary-color) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  opacity: 0.03;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.section-subtitle {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.alianza-logo {
  filter: brightness(0) saturate(100%) invert(23%) sepia(90%) saturate(1960%) hue-rotate(235deg) brightness(97%) contrast(98%);
  animation: highlight 3s infinite;
}

.logo-grid {
  margin-top: 2rem;
}

.logo-item {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.logo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.partner-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-item:hover .partner-logo {
  transform: scale(1.1);
}

@keyframes highlight {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

/* Estilos para el carrusel infinito */
.slider {
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: transparent;
  padding: 20px 0;
}

.slide-track {
  display: flex;
  width: calc(250px * 12); /* Ajusta según el número total de logos (original + copia) */
  animation: scroll 30s linear infinite;
}

.slide {
  width: 250px;
  padding: 0 20px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 6)); /* Ajusta según el número de logos original */
  }
}

/* Pausa la animación al hacer hover */
.slider:hover .slide-track {
  animation-play-state: paused;
}

/* Ajustes responsive */
@media (max-width: 960px) {
  .slide {
    width: 200px;
  }
  
  .slide-track {
    width: calc(200px * 12);
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-200px * 6));
    }
  }
}

@media (max-width: 600px) {
  .slide {
    width: 150px;
  }
  
  .slide-track {
    width: calc(150px * 12);
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-150px * 6));
    }
  }
  
  .logo-item {
    height: 80px;
    padding: 0.5rem;
  }
}
</style> 
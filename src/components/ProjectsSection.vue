<template>
  <section id="nuestro-trabajo" class="section work">
    <v-container>
      <h2 class="section-title text-center" data-aos="fade-up">
        Nuestro Trabajo
      </h2>

      <v-row class="mt-12">
        <v-col v-for="service in services" :key="service.title" cols="12" md="4">
          <v-card class="service-card" flat data-aos="fade-up">
            <div class="service-icon">
              <v-icon :icon="service.icon" size="32" color="white"></v-icon>
            </div>
            <h3 class="text-h5 font-weight-bold mb-3">{{ service.title }}</h3>
            <p class="text-body-1">{{ service.description }}</p>
          </v-card>
        </v-col>
      </v-row>

      <div class="gallery mt-16" id="proyectos-destacados">
        <h3 class="section-subtitle text-center mb-12" data-aos="fade-up">
          Proyectos Destacados
        </h3>
        <v-row class="gallery-grid">
          <v-col v-for="project in projects" :key="project.title" cols="12" sm="6" md="4">
            <v-card class="gallery-item" data-aos="fade-up">
              <v-img
                :src="project.image"
                height="250"
                cover
                class="gallery-image"
              ></v-img>
              <div class="gallery-overlay">
                <h4 class="text-h6 font-weight-bold mb-2">{{ project.title }}</h4>
                <p class="text-body-2">{{ project.description }}</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'mdi-cog-outline',
    title: 'Control de Procesos',
    description: 'Sistemas SCADA, PLC y DCS para control y monitoreo de procesos industriales.'
  },
  {
    icon: 'mdi-robot-industrial',
    title: 'Robótica Industrial',
    description: 'Implementación de celdas robóticas y sistemas de manufactura flexible.'
  },
  {
    icon: 'mdi-gauge',
    title: 'Instrumentación',
    description: 'Sistemas de medición y control para variables de proceso.'
  }
]

const projects = [
  {
    image: 'https://www.autex-open.com/wp-content/uploads/2022/09/image.png',
    title: 'Sistema SCADA para Planta Química',
    description: 'Implementación de sistema de control y monitoreo en tiempo real'
  },
  {
    image: 'https://www.autex-open.com/wp-content/uploads/2022/09/image.png',
    title: 'Célula Robótica Automotriz',
    description: 'Automatización de línea de ensamblaje con robots industriales'
  },
  {
    image: 'https://www.autex-open.com/wp-content/uploads/2022/09/image.png',
    title: 'Control de Calidad Automatizado',
    description: 'Sistema de inspección visual por computadora'
  },
  {
    image: 'https://www.autex-open.com/wp-content/uploads/2022/09/image.png',
    title: 'Modernización de Planta',
    description: 'Actualización de sistemas de control legacy'
  },
  {
    image: 'https://www.autex-open.com/wp-content/uploads/2022/09/image.png',
    title: 'Sistema IoT Industrial',
    description: 'Monitoreo remoto de activos industriales'
  },
  {
    image: 'https://www.autex-open.com/wp-content/uploads/2022/09/image.png',
    title: 'Automatización de Almacén',
    description: 'Sistema automatizado de gestión de inventario'
  }
]
</script>

<style scoped>
.section {
  padding: 100px 0;
  background-color: var(--light);
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.section-subtitle {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
}

.service-card {
  padding: 2rem;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
  border-radius: 15px;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.service-icon {
  width: 64px;
  height: 64px;
  background: var(--primary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  height: 250px;
}

.gallery-image {
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 2rem;
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

@media (max-width: 960px) {
  .section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.5rem;
  }

  .service-card {
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .gallery-item {
    margin-bottom: 1rem;
  }

  .service-card {
    padding: 1.5rem;
  }
}
</style> 
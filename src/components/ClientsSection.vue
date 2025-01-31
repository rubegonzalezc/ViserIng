<template>
  <section id="clientes" class="section clients">
    <div class="background-pattern"></div>
    
    <v-container>
      <h2 class="section-title text-center" data-aos="fade-up">
        Nuestros Clientes
      </h2>
      <p class="section-subtitle text-center mb-12" data-aos="fade-up" data-aos-delay="100">
        Empresas que confían en nosotros
      </p>

      <!-- Estadísticas -->
      <v-row class="stats-container mb-16">
        <v-col v-for="stat in stats" :key="stat.value" cols="12" sm="6" md="3">
          <div class="stat-card" data-aos="fade-up">
            <div class="stat-icon">
              <v-icon :icon="stat.icon" size="36" color="primary"></v-icon>
            </div>
            <div class="stat-number" :data-target="stat.value">0</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </v-col>
      </v-row>

      <!-- Carrusel de logos de clientes -->
      <div class="clients-slider">
        <div class="slide-track">
          <!-- Primera serie de logos -->
          <div v-for="client in clients" :key="`first-${client.alt}`" class="slide">
            <v-card class="client-card" flat>
              <v-img
                :src="client.logo"
                :alt="client.alt"
                height="80"
                contain
                class="client-logo"
              ></v-img>
            </v-card>
          </div>
          <!-- Segunda serie para el efecto infinito -->
          <div v-for="client in clients" :key="`second-${client.alt}`" class="slide">
            <v-card class="client-card" flat>
              <v-img
                :src="client.logo"
                :alt="client.alt"
                height="80"
                contain
                class="client-logo"
              ></v-img>
            </v-card>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const stats = [
  {
    icon: 'mdi-office-building',
    value: 4,
    label: 'Clientes Activos'
  },
  {
    icon: 'mdi-check-circle',
    value: 16,
    label: 'Proyectos Completados'
  },
  {
    icon: 'mdi-account-group',
    value: 50,
    label: 'Expertos'
  },
  {
    icon: 'mdi-star',
    value: 98,
    label: '% Satisfacción'
  }
]

const clients = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Logo_Homecenter_Sodimac.png/800px-Logo_Homecenter_Sodimac.png',
    alt: 'Sodimac'
  },
  {
    logo: 'https://dumay.cl/vistas/images/logo-light-gray.png',
    alt: 'Dumay'
  },
  {
    logo: 'https://www.republicparking.cl/web/wp-content/uploads/2022/01/republicparking_logo1-e1731927469392.png',
    alt: 'Republic Parking'
  },
  {
    logo: 'https://www.vinilit.cl/wp-content/uploads/2022/03/logo-vinilit.png',
    alt: 'Vinilit'
  },
  {
    logo: 'https://www.bender-latinamerica.com/fileadmin/bootstrap_package_med/Resources/img/logos/Bender-GmbH-Co-KG-Logo.svg',
    alt: 'Bender'
  },
  {
    logo: 'https://irritec.cl/wp-content/uploads/2025/01/logo-Irritec.png#10572',
    alt: 'Irritec'
  }
]
</script>

<style scoped>
.clients {
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
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

/* Estilos para las estadísticas */
.stat-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

/* Estilos para el carrusel */
.clients-slider {
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: transparent;
  padding: 20px 0;
}

.slide-track {
  display: flex;
  width: calc(250px * 10);
  animation: scroll 25s linear infinite;
}

.slide {
  width: 250px;
  padding: 0 20px;
}

.client-card {
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

.client-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 5));
  }
}

.clients-slider:hover .slide-track {
  animation-play-state: paused;
}

@media (max-width: 960px) {
  .section-title {
    font-size: 2rem;
  }

  .stat-card {
    margin-bottom: 1rem;
  }

  .slide {
    width: 200px;
  }
  
  .slide-track {
    width: calc(200px * 10);
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-200px * 5));
    }
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1.8rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .slide {
    width: 150px;
  }
  
  .slide-track {
    width: calc(150px * 10);
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-150px * 5));
    }
  }
}
</style> 
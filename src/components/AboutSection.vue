<template>
    <section id="sobre-nosotros" class="about-section">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" md="6" class="about-content" data-aos="fade-right">
            <h2 class="text-h3 font-weight-bold mb-6">
              Sobre Nosotros
            </h2>
            <p class="text-body-1 mb-6">
              Somos una empresa líder en automatización industrial, dedicada a transformar y optimizar procesos productivos mediante soluciones tecnológicas avanzadas. Nuestra experiencia y compromiso nos permiten ofrecer servicios de alta calidad que impulsan la eficiencia y competitividad de nuestros clientes.
            </p>
            
            <v-row class="features-grid">
              <v-col v-for="feature in features" :key="feature.title" cols="12" sm="6">
                <div class="feature-item" data-aos="fade-up">
                  <div class="feature-icon">
                    <v-icon :icon="feature.icon" size="32" color="secondary"></v-icon>
                  </div>
                  <h3 class="text-h6 font-weight-bold mb-2">{{ feature.title }}</h3>
                  <p class="text-body-2">{{ feature.description }}</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
  
          <v-col cols="12" md="6" class="about-image" data-aos="fade-left">
            <div class="image-grid">
              <v-img
                src="@/assets/about/planta-procesos.jpg"
                class="main-image"
                cover
                height="400"
              ></v-img>
              <div class="experience-badge">
                <span class="years">15+</span>
                <span class="text">Años de Experiencia</span>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-16">
          <v-col cols="12" md="6" data-aos="fade-up">
            <div class="mission-vision-card">
              <div class="card-icon">
                <v-icon icon="mdi-target" size="32" color="white"></v-icon>
              </div>
              <h3 class="text-h5 font-weight-bold mb-4">Misión</h3>
              <p class="text-body-1">
                Proporcionar soluciones innovadoras en automatización industrial que impulsen la eficiencia 
                y competitividad de nuestros clientes, mediante la implementación de tecnologías avanzadas 
                y un servicio de excelencia.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="100">
            <div class="mission-vision-card">
              <div class="card-icon">
                <v-icon icon="mdi-eye" size="32" color="white"></v-icon>
              </div>
              <h3 class="text-h5 font-weight-bold mb-4">Visión</h3>
              <p class="text-body-1">
                Ser reconocidos como líderes en el sector de la automatización industrial, destacando por 
                nuestra innovación, calidad y compromiso con el éxito de nuestros clientes, contribuyendo 
                al desarrollo tecnológico de la industria.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <script setup>
  const features = [
    {
      icon: 'mdi-cog-outline',
      title: 'Automatización Industrial',
      description: 'Implementamos soluciones automatizadas que optimizan procesos y aumentan la productividad.'
    },
    {
      icon: 'mdi-robot-industrial',
      title: 'Robótica Avanzada',
      description: 'Integramos sistemas robóticos de última generación para mejorar la eficiencia operativa.'
    },
    {
      icon: 'mdi-chart-line',
      title: 'Optimización de Procesos',
      description: 'Analizamos y mejoramos los procesos industriales para maximizar el rendimiento.'
    },
    {
      icon: 'mdi-shield-check-outline',
      title: 'Control de Calidad',
      description: 'Implementamos sistemas de control que garantizan la calidad del producto final.'
    }
  ]
  </script>
  
  <style scoped>
  .about-section {
    padding: 100px 0;
    background-color: var(--light);
    position: relative;
    overflow: hidden;
  }
  
  .about-content {
    position: relative;
    z-index: 2;
  }
  
  .features-grid {
    margin-top: 2rem;
  }
  
  .feature-item {
    padding: 1.5rem;
    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }
  
  .feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
  
  .feature-icon {
    background: var(--primary-color);
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .feature-icon .v-icon {
    color: white !important;
  }
  
  .about-image {
    position: relative;
  }
  
  .image-grid {
    position: relative;
    padding: 2rem;
  }
  
  .main-image {
    border-radius: 20px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  }
  
  .experience-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--secondary-color);
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    transform: translate(-20%, 20%);
  }
  
  .experience-badge .years {
    display: block;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1;
    font-family: 'Space Grotesk', sans-serif;
  }
  
  .experience-badge .text {
    display: block;
    font-size: 1rem;
    opacity: 0.9;
    margin-top: 0.5rem;
  }
  
  @media (max-width: 960px) {
    .about-section {
      padding: 60px 0;
    }
  
    .about-image {
      margin-top: 3rem;
    }
  
    .experience-badge {
      transform: translate(-10%, 10%);
    }
  }
  
  @media (max-width: 600px) {
    .feature-item {
      margin-bottom: 1rem;
    }
  
    .experience-badge {
      padding: 1rem;
    }
  
    .experience-badge .years {
      font-size: 2rem;
    }
  
    .experience-badge .text {
      font-size: 0.9rem;
    }
  }
  
  .mission-vision-card {
    height: 100%;
    padding: 2rem;
    border-radius: 20px;
    background: white;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .mission-vision-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
  
  .mission-vision-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--secondary-color);
  }
  
  .card-icon {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .card-icon .v-icon {
    color: white !important;
  }
  
  @media (max-width: 960px) {
    .mission-vision-card {
      margin-bottom: 2rem;
    }
  }
  
  @media (max-width: 600px) {
    .mission-vision-card {
      padding: 1.5rem;
    }
  }
  </style>
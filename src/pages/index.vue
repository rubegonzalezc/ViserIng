<template>
  <Navbar />
  <div data-aos="fade-up">
    <HeroSection />
  </div>
  
  <div data-aos="fade-up" data-aos-delay="100">
    <AboutSection />
  </div>
  
  <div data-aos="fade-up" data-aos-delay="100">
    <ProjectsSection />
  </div>
  
  <div data-aos="fade-up" data-aos-delay="100">
    <StrategicAllianceSection />
  </div>
  
  <div data-aos="fade-up" data-aos-delay="100">
    <ClientsSection />
  </div>
  
  <div data-aos="fade-up" data-aos-delay="100">
    <ContactSection />
  </div>
  
  <div data-aos="fade-up" data-aos-delay="100">
    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import StrategicAllianceSection from '@/components/StrategicAllianceSection.vue';
import ClientsSection from '@/components/ClientsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<style>
/* Asegurarse de que las secciones tengan suficiente espacio para las animaciones */
section {
  overflow: hidden;
  position: relative;
}

/* Estilos opcionales para suavizar el scroll */
html {
  scroll-behavior: smooth;
}

/* Ajuste para evitar saltos bruscos en móviles */
@media (max-width: 768px) {
  [data-aos] {
    transition-duration: 600ms !important;
  }
}
</style>

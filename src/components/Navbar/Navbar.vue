<template>
  <div class="navbar-wrapper">
    <v-app-bar
      app
      :class="{'navbar-scrolled': isScrolled}"
      class="navbar"
      elevation="0"
    >
      <div class="nav-container">
        <!-- Logo lado izquierdo -->
        <div class="nav-left">
          <router-link to="/" class="logo-link">
            <v-img
              src="@/assets/logo.png"
              alt="Viser Ingeniería Logo"
              width="150"
              height="50"
              contain
              class="logo-image"
            />
          </router-link>
        </div>
  
        <!-- Contenido lado derecho -->
        <div class="nav-right">
          <!-- Enlaces versión desktop -->
          <nav-links class="d-none d-sm-flex" />
  
          <!-- Botón móvil -->
          <v-btn
            class="mobile-menu-btn d-flex d-sm-none"
            icon
            @click="toggleMenu"
          >
            <v-icon>{{ mobileMenuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  
    <!-- Menú móvil fullscreen -->
    <div 
      class="mobile-menu-fullscreen"
      :class="{ 'is-active': mobileMenuOpen }"
    >
      <div class="mobile-menu-content">
        <nav-links 
          class="mobile-nav-links" 
          @link-clicked="closeMenu" 
        />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavLinks from '@/components/Navbar/NavLinks.vue'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Prevenir scroll cuando el menú está abierto
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>
  
<style>
.navbar-wrapper {
  position: relative;
}

.navbar {
  position: fixed;
  width: 100%;
  background: var(--primary-color) !important;
  padding: 0.5rem 2rem;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  height: 70px;
}

.navbar-scrolled {
  padding: 0.4rem 2rem;
  backdrop-filter: blur(10px);
  background: var(--primary-color-hover) !important;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-left {
  flex-shrink: 0;
}

.nav-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  text-decoration: none;
  position: relative;
  transition: var(--transition-fast);
  letter-spacing: -0.5px;
}

.logo:hover {
  color: white;
  transform: translateY(-2px);
}

.logo::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary-color);
  transition: var(--transition-fast);
}

.logo:hover::after {
  width: 100%;
}

/* Estilos para móvil */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.mobile-drawer {
  background-color: transparent !important;
  box-shadow: none !important;
}

.mobile-menu-content {
  height: 100%;
  background-color: var(--primary-color);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mobile-menu-header {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.close-btn {
  color: white !important;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-links :deep(.nav-link) {
  color: white !important;
  font-size: 1.5rem !important;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 0.5rem 1rem;
  position: relative;
}

.mobile-nav-links :deep(.nav-link:hover) {
  color: var(--v-secondary-base) !important;
  transform: translateY(-2px);
}

.mobile-nav-links :deep(.nav-link::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--v-secondary-base);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.mobile-nav-links :deep(.nav-link:hover::after) {
  width: 100%;
}

@media (max-width: 600px) {
  .mobile-nav-links :deep(.nav-link) {
    font-size: 1.25rem !important;
  }
}

@media (max-width: 768px) {
  .navbar {
    height: 60px;
    padding: 0.5rem 1rem;
  }

  .nav-container {
    padding: 0;
  }

  .logo-image {
    width: 120px !important;
    height: 40px !important;
  }
}

.mobile-menu-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
}

.mobile-menu-fullscreen.is-active {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.mobile-menu-content {
  text-align: center;
  padding: 2rem;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-links :deep(.nav-link) {
  color: white !important;
  font-size: 1.5rem !important;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 0.5rem 1rem;
  position: relative;
}

.mobile-nav-links :deep(.nav-link:hover) {
  color: var(--v-secondary-base) !important;
  transform: translateY(-2px);
}

.mobile-nav-links :deep(.nav-link::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--v-secondary-base);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.mobile-nav-links :deep(.nav-link:hover::after) {
  width: 100%;
}

/* Asegurar que el botón de menú esté siempre visible */
.mobile-menu-btn {
  position: relative;
  z-index: 1000;
  color: white !important;
}
</style>
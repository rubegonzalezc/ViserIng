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
          <router-link to="/" class="logo text-decoration-none">
            Viser Ingeniería
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
  
    <!-- Menú móvil -->
    <v-navigation-drawer
      v-model="mobileMenuOpen"
      location="right"
      temporary
      class="mobile-drawer"
      width="250"
      style="z-index: 1001"
    >
      <div class="pa-4">
        <nav-links 
          class="mobile-nav-links" 
          @link-clicked="closeMenu" 
        />
      </div>
    </v-navigation-drawer>
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
  }
  
  const closeMenu = () => {
    mobileMenuOpen.value = false
  }
  
  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleClickOutside)
  })
  
  const handleClickOutside = (event) => {
    const drawer = document.querySelector('.mobile-drawer')
    const menuBtn = document.querySelector('.mobile-menu-btn')
    
    if (mobileMenuOpen.value && 
        drawer && 
        !drawer.contains(event.target) && 
        !menuBtn?.contains(event.target)) {
      mobileMenuOpen.value = false
    }
  }
  </script>
  
  <style scoped>
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
  .mobile-drawer {
    padding-top: 2rem;
    background-color: var(--primary-color) !important;
    color: white !important;
  }
  
  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .mobile-nav-links :deep(.nav-link) {
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    display: block;
    text-decoration: none;
  }
  
  .mobile-nav-links :deep(.nav-link:hover) {
    color: var(--secondary-color);
  }
  
  @media (max-width: 600px) {
    .navbar {
      padding: 0.5rem 1rem;
    }
    
    .logo {
      font-size: 1.2rem;
    }
    
    .mobile-menu-btn {
      margin-left: 1rem;
    }
  }
  </style>
<template>
  <div class="nav-links">
    <a
      v-for="link in links"
      :key="link.to"
      :href="link.to"
      class="nav-link"
      @click.prevent="scrollToSection(link.to)"
    >
      {{ link.text }}
    </a>
  </div>
</template>

<script setup>
const emit = defineEmits(['link-clicked'])

const links = [
  { text: 'Inicio', to: '#inicio' },
  { text: 'Sobre Nosotros', to: '#sobre-nosotros' },
  { text: 'Servicios', to: '#nuestro-trabajo' },
  { text: 'Proyectos', to: '#proyectos-destacados' },
  { text: 'Contacto', to: '#contacto' }
]

const scrollToSection = (sectionId) => {
  emit('link-clicked') // Para cerrar el menú móvil
  
  const element = document.querySelector(sectionId)
  if (element) {
    const offset = 80 // Ajusta este valor según la altura de tu navbar
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  } else {
    console.log(`Sección no encontrada: ${sectionId}`) // Para debugging
  }
}
</script>

<style scoped>
.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--secondary-color);
}

@media (max-width: 600px) {
  .nav-links {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    display: block;
  }
}
</style>
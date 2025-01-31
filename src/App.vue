<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: true,
    offset: 50,
    delay: 100
  })
})
</script>

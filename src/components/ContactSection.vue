<template>
  <section id="contacto" class="section contact">
    <div class="background-pattern"></div>
    
    <v-container>
      <h2 class="section-title text-center" data-aos="fade-up">
        Contáctanos
      </h2>
      <p class="section-subtitle text-center mb-12" data-aos="fade-up" data-aos-delay="100">
        Estamos aquí para ayudarte
      </p>

      <div class="contact-wrapper">
        <!-- Información de contacto -->
        <div class="contact-info" data-aos="fade-right">
          <div class="info-card">
            <div class="info-icon">
              <v-icon icon="mdi-map-marker" size="24"></v-icon>
            </div>
            <h3>Ubicación</h3>
            <p>Av. Quillin #4375, Macul, Santiago, Chile</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <v-icon icon="mdi-phone" size="24"></v-icon>
            </div>
            <h3>Teléfono</h3>
            <p>+56 9 6219 0820</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <v-icon icon="mdi-email" size="24"></v-icon>
            </div>
            <h3>Email</h3>
            <p>contacto@viser.cl</p>
          </div>
        </div>

        <!-- Formulario de contacto -->
        <v-form 
          class="contact-form" 
          @submit.prevent="handleSubmit" 
          data-aos="fade-left"
          action="https://formsubmit.co/contacto@viser.cl"
          method="POST"
          ref="formRef"
        >
          <div class="form-header">
            <h3>Envíanos un mensaje</h3>
            <p>Nos pondremos en contacto contigo lo antes posible</p>
          </div>
          
          <div class="form-row">
            <v-text-field
              v-model="formData.nombre"
              name="nombre"
              label="Nombre completo"
              variant="outlined"
              :rules="[rules.required]"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="formData.empresa"
              name="empresa"
              label="Empresa"
              variant="outlined"
            ></v-text-field>
          </div>

          <div class="form-row">
            <v-text-field
              v-model="formData.email"
              name="email"
              label="Email"
              variant="outlined"
              :rules="[rules.required, rules.email]"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="formData.telefono"
              name="telefono"
              label="Teléfono"
              variant="outlined"
            ></v-text-field>
          </div>

          <v-select
            v-model="formData.asunto"
            name="asunto"
            :items="asuntos"
            label="Asunto"
            variant="outlined"
            required
            :rules="[rules.required]"
          ></v-select>

          <v-textarea
            v-model="formData.mensaje"
            name="mensaje"
            label="Mensaje"
            variant="outlined"
            rows="5"
            required
            :rules="[rules.required]"
          ></v-textarea>

          <!-- Campos ocultos de FormSubmit -->
          <input type="hidden" name="_next" value="https://viser.cl/?success=true">
          <input type="hidden" name="_subject" :value="`Nuevo contacto desde Viser - ${formData.nombre}`">
          <input type="hidden" name="_captcha" value="true">
          <input type="hidden" name="_honey" style="display:none">
          <input type="hidden" name="_template" value="box">

          <!-- Personalización del correo -->
          <input type="hidden" name="_email-template" value="
            <h2>Nuevo Contacto desde Viser Ingeniería</h2>
            <p>Se ha recibido un nuevo mensaje de contacto:</p>
            
            <div>
              <p><strong>Nombre:</strong> {nombre}</p>
              <p><strong>Empresa:</strong> {empresa}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Teléfono:</strong> {telefono}</p>
              <p><strong>Asunto:</strong> {asunto}</p>
              <p><strong>Mensaje:</strong></p>
              <p>{mensaje}</p>
            </div>
          ">

          <!-- Respuesta automática -->
          <input type="hidden" name="_autoresponse" value="
            Gracias por contactar con Viser Ingeniería. 
            Hemos recibido su mensaje y nos pondremos en contacto pronto.
            
            Saludos cordiales,
            Equipo Viser Ingeniería
          ">

          <!-- Configuraciones adicionales -->
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_cc" value="otro@viser.cl,otrocorreo@viser.cl">

          <div class="form-footer">
            <v-btn 
              type="submit" 
              color="primary" 
              size="large"
              :loading="loading"
            >
              Enviar mensaje
              <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-container>

    <!-- Snackbar para notificaciones -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="3000"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const formRef = ref(null)

// Modificamos la forma de manejar el estado del formulario
const formData = reactive({
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  asunto: '',
  mensaje: ''
})

const loading = ref(false)
const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
})

const asuntos = [
  'Nuevo proyecto',
  'Consulta técnica',
  'Solicitud de cotización',
  'Otro'
]

const rules = {
  required: v => !!v || 'Este campo es requerido',
  email: v => /.+@.+\..+/.test(v) || 'Email debe ser válido'
}

onMounted(() => {
  if (route.query.success) {
    snackbar.color = 'success'
    snackbar.text = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    snackbar.show = true
  }
})

const handleSubmit = async () => {
  loading.value = true
  try {
    const formElement = formRef.value.$el
    
    // Asegurarnos de que los valores del formulario estén actualizados
    Object.keys(formData).forEach(key => {
      const input = formElement.querySelector(`[name="${key}"]`)
      if (input) {
        input.value = formData[key]
      }
    })
    
    await formElement.submit()
    
    // Limpiar formulario después del envío exitoso
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    snackbar.color = 'error'
    snackbar.text = 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
    snackbar.show = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact {
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

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.info-icon .v-icon {
  color: white;
}

.info-card h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.info-card p {
  color: var(--text-secondary);
}

.contact-form {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.form-header p {
  color: var(--text-secondary);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-footer {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 960px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .contact-info {
    order: 2;
  }

  .contact-form {
    order: 1;
  }
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style> 
<template>
  <div class="container-fluid mt-5 mb-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">
              Formulario de registro de propiedades
            </h2>

            <div class="progress mb-4">
              <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                   role="progressbar"
                   :style="{ width: `${(currentStep / 4) * 100}%` }"
                   :aria-valuenow="(currentStep / 4) * 100"
                   aria-valuemin="0"
                   aria-valuemax="100">
              </div>
            </div>
            <form @submit.prevent="submitForm">
              <!-- Paso 1 -->
              <div v-if="currentStep === 1">
                <h4 class="mb-3">Paso 1: Información personal</h4>
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input type="text" class="form-control border" id="nombre" v-model="formData.nombre" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="formData.email" required>
                </div>
              </div>

              <!-- Paso 2 -->
              <div v-if="currentStep === 2">
                <h4 class="mb-3">Paso 2: Detalles adicionales</h4>
                <div class="mb-3">
                  <label for="telefono" class="form-label">Teléfono</label>
                  <input type="tel" class="form-control" id="telefono" v-model="formData.telefono">
                </div>
                <div class="mb-3">
                  <label for="direccion" class="form-label">Dirección</label>
                  <textarea class="form-control" id="direccion" rows="3" v-model="formData.direccion"></textarea>
                </div>
              </div>

              <!-- Paso 3 -->
              <div v-if="currentStep === 3">
                <h4 class="mb-3">Paso 3: Confirmación</h4>
                <p>Por favor, revisa tu información antes de enviar.</p>
                <ul class="list-group mb-3">
                  <li v-for="(value, key) in formData" :key="key" class="list-group-item">
                    <strong>{{ key }}:</strong> {{ value }}
                  </li>
                </ul>
              </div>

              <!-- Botones de navegación -->
              <div class="d-flex justify-content-between mt-4">
                <button v-if="currentStep > 1" @click="prevStep" type="button" class="btn btn-secondary">
                  Anterior
                </button>
                <button v-if="currentStep < 4" @click="nextStep" type="button" class="btn btn-primary">
                  Siguiente
                </button>
                <button v-if="currentStep === 4" type="submit" class="btn btn-success">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import setNavPills from '@/assets/js/nav-pills.js'

const currentStep = ref(1)
const formData = reactive({
  nombre: '',
  email: '',
  telefono: '',
  direccion: '',
  apellido: ''
})

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

onMounted(() => {
  setNavPills()

  console.log('Componente montado')
})

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const submitForm = () => {
  // Aquí puedes manejar el envío del formulario
  console.log('Formulario enviado:', formData)
  alert('Formulario enviado con éxito!')
}
</script>
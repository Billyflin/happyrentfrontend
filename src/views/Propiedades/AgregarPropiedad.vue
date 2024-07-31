<template>
  <div class="container-fluid mt-4">
    <!-- Mensaje de alerta -->

    <!-- Seccion propiedad -->
    <propiedad-agregar-propiedad @update:propiedad="propiedad = $event" @update:imagenPortada="imagenPortada= $event" />
    <!-- Seccion Propietario -->
    <propiedad-agregar-propietario @update:propietario="propiedad.propietario=$event;console.log($event)" />

    <div v-if="alertMessage" class="alert mt-2" :class="alertClass" role="alert">
      {{ alertMessage }}
    </div>
    <!-- Boton enviar -->
    <material-button :disabled="isSending" class="mt-4" full-width size="lg" variant="success" @click="emitData">
      Enviar
    </material-button>
  </div>
</template>


<script>
import { ref } from 'vue'
import PropiedadAgregarPropiedad from '@/views/Propiedades/components/PropiedadAgregarPropiedad.vue'
import PropiedadAgregarPropietario from '@/views/Propiedades/components/PropiedadAgregarPropietario.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import CrearInventarioForm from '@/views/Propiedades/components/CrearInventarioForm.vue'
import { useVuelidate } from '@vuelidate/core'
import router from '@/router/index.js'
import { createPropiedad } from '@/servicios/propiedadesService.js'

export default {
  components: {
    PropiedadAgregarPropiedad,
    PropiedadAgregarPropietario,
    MaterialButton,
    // eslint-disable-next-line vue/no-unused-components
    CrearInventarioForm
  },
  setup() {
    const isSending = ref(false)
    const propiedad = ref()
    const imagenPortada = ref()
    const v$ = useVuelidate()
    const alertMessage = ref('')
    const alertClass = ref('')

    return { propiedad, isSending, imagenPortada, v$, alertMessage, alertClass }
  },
  methods: {
    showAlert(message, type) {
      this.alertMessage = message
      this.alertClass = type === 'success' ? 'alert-success' : 'alert-danger'
      setTimeout(() => {
        this.alertMessage = ''
        this.alertClass = ''
      }, 3000)
    },
    async emitData() {
      await this.v$.$validate()
      console.log(this.propiedad)
      console.log(this.imagenPortada)
      if (!this.v$.$error) {
        this.isSending = true // Añade esta línea para deshabilitar el botón
        let formData = new FormData()
        formData.append('propiedad', new Blob([JSON.stringify(this.propiedad)], { type: 'application/json' }))
        formData.append('imagenPortada', this.imagenPortada)

        try {
          await createPropiedad(formData).then(() => {
            this.showAlert('Propiedad creada exitosamente.', 'success')
            setTimeout(() => {
              router.push('/Propiedades')
            }, 3000)
          })
        } catch (error) {
          this.showAlert('Error al crear la propiedad: ' + error.response.data, 'error')
          console.log(error)
          this.isSending = false
        }
      }
    }
  }
}
</script>

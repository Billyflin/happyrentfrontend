<template>
  <div class="container-fluid mt-4">
    <!-- Seccion propiedad -->
    <propiedad-agregar-propiedad @update:propiedad="propiedad = $event" @update:imagenPortada="imagenPortada= $event" />
    <!-- Seccion Propietario -->
    <propiedad-agregar-propietario @update:propietario="propiedad.propietario=$event;console.log($event)" />


    <!--    &lt;!&ndash; INVENTARIO &ndash;&gt;-->
    <!--    <crear-inventario-form />-->
    <!-- Boton enviar! -->
    <material-button :disabled="isSending" class="mt-4" full-width size="lg" variant="success" @click="emitData">
      Enviar
    </material-button>

  </div>
</template>

<script>
import { ref } from 'vue'
import PropiedadAgregarPropiedad from '@/views/Propiedades/components/PropiedadAgregarPropiedad.vue'
import PropiedadAgregarPropietario from '@/views/Propiedades/components/PropiedadAgregarPropietario.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import CrearInventarioForm from '@/views/Propiedades/components/CrearInventarioForm.vue'
import { useVuelidate } from '@vuelidate/core'
import router from '@/router/index.js'
import axios from 'axios'

export default {
  components: {
    PropiedadAgregarPropiedad,
    PropiedadAgregarPropietario,
    MaterialButton,
    CrearInventarioForm
  },
  setup() {
    const isSending = ref(false)
    const propiedad = ref()
    const imagenPortada = ref()
    const v$ = useVuelidate()
    return { propiedad, isSending, imagenPortada, v$ }
  }, methods: {
    async emitData() {
      this.v$.$validate()
      console.log(this.propiedad)
      console.log(this.imagenPortada)
      if (!this.v$.$error) {
        this.isSending = true // Añade esta línea para deshabilitar el botón
        let formData = new FormData()
        formData.append('propiedad', new Blob([JSON.stringify(this.propiedad)], { type: 'application/json' }))
        formData.append('imagenPortada', this.imagenPortada)

        try {
          await axios.post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/propiedad/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(() =>
            router.push('/Propiedades')
          )
        } catch (error) {
          console.log(error)
        } finally {
          this.isSending = false // Añade esta línea para habilitar el botón
        }
      }
    }
  }
}

</script>


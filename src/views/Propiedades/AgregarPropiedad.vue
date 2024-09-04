<template>
  <div class="container-fluid mt-4">
    <multiStepsFormPropiedades />
    <!-- Mensaje de alerta -->

    <div class="row">
      <div class="col-lg-8">


        <!-- Seccion propiedad -->
                <propiedad-agregar-propiedad @update:propiedad="propiedad = $event"/>


        <!-- Seccion Propietario -->
<!--        <FormularioInventario class="mt-4" />-->
      </div>
      <div class="col-lg-4">
        <propiedad-agregar-thumbnail @update:imagenPortada="imagenPortada= $event" />
        <propiedad-agregar-propietario class="mt-4" @update:propietario="propiedad.propietario=$event;console.log($event)" />
<!--    <crear-inventario-form class="mt-4" @update:inventario="propiedad.inventario=$event" />-->
<!--        <ListaInventario class="mt-4" />-->

      </div>

    </div>
    <!-- Boton enviar -->
    <material-button :disabled="isSending" class="mt-4" full-width size="lg" variant="success" @click="emitData">
      Enviar
    </material-button>
  </div>
</template>


<script>
import { ref } from 'vue'
import PropiedadAgregarPropietario from '@/views/Propiedades/components/PropiedadAgregarPropietario.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import { useVuelidate } from '@vuelidate/core'
import router from '@/router/index.js'
import { createPropiedad } from '@/servicios/propiedadesService.js'
import { useNotificationsStore } from '@/store/notifications.js'
import PropiedadAgregarThumbnail from '@/views/Propiedades/PropiedadAgregarThumbnail.vue'
import MultiStepsFormPropiedades from '@/views/Propiedades/MultiStepsFormPropiedades.vue'
import PropiedadAgregarPropiedad from '@/views/Propiedades/components/PropiedadAgregarPropiedad.vue'

export default {
  components: {
    PropiedadAgregarPropiedad,
    MultiStepsFormPropiedades,
    PropiedadAgregarThumbnail,
    PropiedadAgregarPropietario,
    MaterialButton
  },
  setup() {
    const isSending = ref(false)
    const propiedad = ref()
    const imagenPortada = ref()
    const v$ = useVuelidate()
    const alertMessage = ref('')
    const alertClass = ref('')
    const store4 = useNotificationsStore()

    return { propiedad, isSending,store4, imagenPortada, v$, alertMessage, alertClass }
  },
  methods: {
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
            this.store4.createNotification('success', 'Propiedad agregada' , 'La propiedad se ha creado con éxito')
            setTimeout(() => {
              router.push('/Propiedades')
            }, 3000)
          })
        } catch (error) {
          this.store4.createNotification('danger', 'Error', 'Hubo un error al guardar la propiedad' + error)
          console.log(error)
        }
      }
    }
  }
}
</script>

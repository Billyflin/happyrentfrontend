<template>
  <div class="container-fluid mt-5 mb-4">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">
              Formulario de registro de propiedades
            </h2>

            <div class="progress mb-4">
              <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                   role="progressbar"
                   :style="{ width: `${(currentStep / 5) * 100}%` }"
                   :aria-valuenow="(currentStep / 5) * 100"
                   aria-valuemin="0"
                   aria-valuemax="100">
              </div>
            </div>
            <!-- Paso 1 -->
            <div v-if="currentStep === 1">
              <h4 class="mb-3">Paso 1: Información básica</h4>
              <propiedad-agregar-propiedad :propiedad="propiedad" @update:propiedad="propiedad = $event" />
            </div>

            <!-- Paso 2 -->
            <div v-if="currentStep === 2">
              <h4 class="mb-3">Paso 2: Información adicional</h4>
              <propiedad-agregar-informacion-extra :propiedad="propiedad" @update:propiedad="propiedad = $event"/>
            </div>
            <!-- Paso 3 -->
            <div v-if="currentStep === 3">
              <h4 class="mb-3">Paso 3: Detalles adicionales</h4>
              <propiedad-agregar-thumbnail
                @update:imagenPortada="imagenPortada = $event"
                @update:imagenPortadaPreview="imagenPortadaPreview = $event"
                :imagenPortada="imagenPortada"
                :imagenPortadaPreview="imagenPortadaPreview" />
            </div>

            <!-- Paso 4 -->
            <div v-if="currentStep === 4">
              <h4 class="mb-3">Paso 4: Asignar Propietario</h4>
              <propiedad-agregar-propietario @update:propietario="propiedad.propietario = $event" @update:propietarioPreview="propietarioPreview = $event" />
            </div>

            <!-- Paso 5 -->
            <div v-if="currentStep === 5">
              <h4 class="mb-3">Paso 5 : Confirmar datos</h4>
              <material-alert v-if="imagenPortada===null" color="danger"> No hay imagen de portada</material-alert>
              <confirm-data-add-propiedad :propiedad="propiedad" :imagen-portada-preview="imagenPortadaPreview" :propietarioExistente="propietarioPreview" />
            </div>

            <!-- Botones de navegación -->
            <div class="d-flex justify-content-between mt-4">
              <button v-if="currentStep > 1" @click="prevStep" type="button" class="btn btn-secondary">
                Anterior
              </button>
              <button v-if="currentStep < 5" @click="nextStep" type="button" class="btn btn-primary">
                Siguiente
              </button>
              <button v-if="currentStep === 5" :disabled="isSending||(imagenPortada===null)" type="submit" @click="emitData"
                      class="btn btn-success">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import setNavPills from '@/assets/js/nav-pills.js'
import PropiedadAgregarPropiedad from '@/views/Propiedades/components/PropiedadAgregarPropiedad.vue'
import PropiedadAgregarThumbnail from '@/views/Propiedades/PropiedadAgregarThumbnail.vue'
import PropiedadAgregarPropietario from '@/views/Propiedades/components/PropiedadAgregarPropietario.vue'
import ConfirmDataAddPropiedad from '@/views/Propiedades/ConfirmDataAddPropiedad.vue'
import { createPropiedad } from '@/servicios/propiedadesService.js'
import router from '@/router/index.js'
import { useNotificationsStore } from '@/store/notifications.js'
import PropiedadAgregarInformacionExtra from '@/views/Propiedades/PropiedadAgregarInformacionExtra.vue'
import MaterialAlert from '@/components/Material/MaterialAlert.vue'

const store4 = useNotificationsStore()

const propiedad = ref({
  type: 'terreno',
  direccion: {
    calle: '',
    numero: 0,
    detalle: '',
    comuna: '',
    region: '',
    ciudad: '',
    pais: '',
    codigoPostal: ''
  },
  propietario: null
})
const propietarioPreview = ref(null)

const imagenPortada = ref(null)
const imagenPortadaPreview = ref(null)
const currentStep = ref(1)
const isSending = ref(false)

const nextStep = () => {
  if (currentStep.value < 5) {
    currentStep.value++
  }
}

onMounted(() => {
  setNavPills()
  console.log('Componente montado')
})

const emitData = async () => {
  console.log(propiedad.value)
  console.log(imagenPortada.value)
  let formData = new FormData()
  formData.append('propiedad', new Blob([JSON.stringify(propiedad.value)], { type: 'application/json' }))
  formData.append('imagenPortada', imagenPortada.value)

  try {
    isSending.value = true
    await createPropiedad(formData).then(() => {
      store4.createNotification('success', 'Propiedad agregada', 'La propiedad se ha creado con éxito')
      setTimeout(() => {
        router.push('/Propiedades')
        isSending.value = false
      }, 3000)

    })
  } catch (error) {
    store4.createNotification('danger', 'Error', 'Hubo un error al guardar la propiedad: ' + error)
    console.log(error)
    isSending.value = false
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}
</script>

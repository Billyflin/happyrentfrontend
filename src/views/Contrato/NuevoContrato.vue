<template>
  <div id="Propiedad" class="container-fluid mt-4">
    <div class="row mb-4">
      <router-link class="btn position-sticky btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
                   to="/Propiedades">
        <span class="material-symbols-outlined mx-1"> arrow_back </span> Volver
      </router-link>
<!--      <router-link to="/Billy">-->
<!--        <material-button class="ms-auto" size="md" variant="success">Billy</material-button>-->
<!--      </router-link>-->
      <div class="col-lg-12 mt-lg-0 mt-4">
        <formulario-propiedad-contrato />
        <div v-if="store2.propiedad.arrendado" class="row mt-4">
          <div class="col-12">
            <div class="alert alert-danger text-light text-center">La propiedad ya está arrendada</div>
          </div>
        </div>
        <div v-else>
          <div v-if="store2.contratoError" class="col-12 mt-4">
            <div class="alert alert-danger text-light text-center">{{ store2.contratoError }}</div>
          </div>
          <div class="row  mt-4">
            <div id="SeleccionArrendatario" :class="codeudor ? 'col-6' : 'col-10 col-xl-11 col-lg-11 flex-grow'">
              <seleccionar-arrendatario />
            </div>
            <div v-if="codeudor" class="col-6">
              <seleccionar-codeudor v-model="codeudor" />
            </div>
            <div v-else class="col">
              <material-button size="md" variant="success" @click="codeudor = true">Agregar Codeudor</material-button>

            </div>
          </div>
<!--          <div class="row mt-4">-->
<!--            <div class="col">-->
<!--              <reajuste-contrato />-->
<!--            </div>-->
<!--          </div>-->
          <router-link to="/EditorNuevoContrato">
            <material-button class="mt-4 mb-6" full-width size="lg" variant="success">Crear Contrato</material-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import FormularioPropiedadContrato from '@/views/Contrato/components/FormularioPropiedadContrato.vue'
import router from '@/router/index.js'
import { useAppStore } from '@/store/appStore.js'
import { useContratosStore } from '@/store/contratosStore.js'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import SeleccionarArrendatario from '@/views/Contrato/components/SeleccionarArrendatario.vue'
import SeleccionarCodeudor from '@/views/Contrato/components/SeleccionarCodeudor.vue'
import ReajusteContrato from '@/views/Contrato/components/ReajusteContrato.vue'

const store = useAppStore()
const store2 = useContratosStore()
const { toggleEveryDisplay, toggleHideConfig } = store

const codeudor = ref(false)

const aer = () => {
  router.push('/clausulasNuevoContrato')
}

watch(() => [store2.codeudor?.id, store2.arrendatario?.id, store2.propiedad?.propietario.id], ([codeudorId, arrendatarioId, propietarioId]) => {
  if (codeudorId === arrendatarioId) {
    store2.contratoError = 'El codeudor no puede ser el mismo que el arrendatario'
  } else if (codeudorId === propietarioId) {
    store2.contratoError = 'El codeudor no puede ser el mismo que el propietario'
  } else if (arrendatarioId === propietarioId) {
    store2.contratoError = 'El arrendatario no puede ser el mismo que el propietario'
  } else {
    store2.contratoError = ''
  }
}, { deep: true })

onMounted(() => {
  toggleEveryDisplay()
  store2.codeudor = null
  // toggleHideConfig()
})

onUnmounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})
</script>

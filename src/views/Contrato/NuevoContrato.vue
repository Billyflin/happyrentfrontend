<template>
  <div class="container-fluid mt-4" id="Propiedad">
    <div class="row mb-4">
      <router-link to="/Propiedades"
                   class="btn position-sticky btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0">
        <span class="material-symbols-outlined mx-1"> arrow_back </span> Volver
      </router-link>
      <div class="col-lg-12 mt-lg-0 mt-4">
        <div class="row  mt-4">
          <formulario-propiedad-contrato />
        </div>

        <div class="col-12 mt-4"  v-if="store2.contratoError">
          <div class="alert alert-danger text-light text-center">{{ store2.contratoError }}</div>
        </div>
        <div class="row  mt-4">
          <div :class="codeudor ? 'col-6' : 'col-10 col-xl-11 col-lg-11 flex-grow'" id="SeleccionArrendatario">
            <seleccionar-arrendatario />
          </div>
          <div v-if="codeudor" class="col-6">
            <seleccionar-codeudor  v-model="codeudor"/>
          </div>
          <div v-else class="col">
              <material-button variant="success" size="md" @click="codeudor = true">Agregar Codeudor</material-button>

          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <reajuste-contrato />
          </div>
        </div>
      </div>
      <material-button variant="success" size="lg" class="mt-4 mb-6" full-width @click="aer">Enviar</material-button>
    </div>
  </div>
</template>

<script setup>
import { useAppStore, useAuthStore } from '@/store/index.js'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import ReajusteContrato from '@/views/Contrato/components/ReajusteContrato.vue'
import FormularioPropiedadContrato from '@/views/Contrato/components/FormularioPropiedadContrato.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import SeleccionarArrendatario from '@/views/Contrato/components/SeleccionarArrendatario.vue'
import SeleccionarCodeudor from '@/views/Contrato/components/SeleccionarCodeudor.vue'
import router from '@/router/index.js'

const store = useAppStore()
const store2 = useAuthStore()
const { toggleEveryDisplay, toggleHideConfig } = store

const codeudor = ref(false)


const aer = () => {
  router.push('/clausulasNuevoContrato')
}
watch(() => [store2.codeudor?.id, store2.arrendatario?.id, store2.propiedad?.propietario.id], ([codeudorId, arrendatarioId, propietarioId]) => {
  if (codeudorId === arrendatarioId) {
    store2.contratoError = 'El codeudor no puede ser el mismo que el arrendatario';
  } else if (codeudorId === propietarioId) {
    store2.contratoError = 'El codeudor no puede ser el mismo que el propietario';
  } else if (arrendatarioId === propietarioId) {
    store2.contratoError = 'El arrendatario no puede ser el mismo que el propietario';
  } else {
    store2.contratoError = '';
  }
}, { deep: true })

onMounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})

onUnmounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})
</script>

<template>
  <div class="container-fluid mt-4" id="Propiedad">
    <div class="row mb-4">
      <router-link to="/Propiedades"
                   class="btn position-sticky btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0">
        <span class="material-symbols-outlined mx-1"> arrow_back </span> Volver
      </router-link>
      <div class="col-lg-12 mt-lg-0 mt-4">
        <formulario-propiedad-contrato />
        <div class="row  mt-4">
          <div class="col-7" id="SeleccionArrendatario">

            <seleccionar-arrendatario />
          </div>
          <div class="col">
            <reajuste-contrato />

          </div>
        </div>

        <!--        <acuerdos-contrato />-->

        <!--        <solicitar-datos-contrato />-->

        <!--        <arrendador-contrato />-->
        <material-button variant="success" size="lg" class="mt-4 mb-6" full-width @click="aer">Enviar</material-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'
import ReajusteContrato from '@/views/Contrato/components/ReajusteContrato.vue'
import FormularioPropiedadContrato from '@/views/Contrato/components/FormularioPropiedadContrato.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import SeleccionarArrendatario from '@/views/Contrato/components/SeleccionarArrendatario.vue'
import router from '@/router/index.js'

const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store

const aer = () => {
  router.push('/clausulasNuevoContrato')
}

onMounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})

onUnmounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})
</script>

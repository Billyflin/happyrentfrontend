<template>
  <div class="container-fluid mt-4"  id="Propiedad">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <!--        <nav-pill />-->
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-lg-2">
        <router-link to="/MisContratos"
                     class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0">
  <span class="material-symbols-outlined mx-1">
    arrow_back
  </span>
          Volver
        </router-link>

        <side-nav />
      </div>
      <div class="col-lg-10 mt-lg-0 mt-4">
        <formulario-propiedad-contrato />
        <div class="row  mt-5" >
          <div class="col-7" id="SeleccionArrendatario">

            <seleccionar-arrendatario />
          </div>
          <div class="col">
            <reajuste-contrato />

          </div>
        </div>

        <acuerdos-contrato />

        <!--        <solicitar-datos-contrato />-->

        <!--        <arrendador-contrato />-->
        <material-button variant="success" size="lg" class="mt-6 mb-6" full-width @click="aer">Enviar</material-button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import NavPill from "./components/NavPill.vue";
import SideNav from './components/SideNav.vue'
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'
import ReajusteContrato from '@/views/Contrato/components/ReajusteContrato.vue'
import FormularioPropiedadContrato from '@/views/Contrato/components/FormularioPropiedadContrato.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import SeleccionarArrendatario from '@/views/Contrato/components/SeleccionarArrendatario.vue'
import AcuerdosContrato from '@/views/Contrato/components/AcuerdosContrato.vue'

const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store

onMounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})

onUnmounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})
</script>

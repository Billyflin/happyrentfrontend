<template>

  <div class="container-fluid mt-4">
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

                <!--  Seccion Reajuste-->
                <reajuste-contrato />

                <!--  Seccion Enviar Correo-->
                <solicitar-datos-contrato />

                <!--  Seccion arrendador-->
                <arrendador-contrato />
      </div>
    </div>
  </div>
</template>

<script setup>
// import NavPill from "./components/NavPill.vue";
import SideNav from './components/SideNav.vue'
import { useAppStore, useAuthStore } from '@/store/index.js'
import { onMounted, onUnmounted, ref } from 'vue'
import ArrendadorContrato from '@/views/Contrato/components/ArrendadorContrato.vue'
import SolicitarDatosContrato from '@/views/Contrato/components/SolicitarDatosContrato.vue'
import ReajusteContrato from '@/views/Contrato/components/ReajusteContrato.vue'
import FormularioPropiedadContrato from '@/views/Contrato/components/FormularioPropiedadContrato.vue'

const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store

onMounted(() => {
  toggleEveryDisplay()
  toggleHideConfig()
})

onUnmounted(() => {
  toggleEveryDisplay()
  toggleHideConfig()
})
</script>

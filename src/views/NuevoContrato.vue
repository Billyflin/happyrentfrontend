<template>

  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <!--        <nav-pill />-->
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-lg-2">
        <router-link to="/MisContratos" class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0">
  <span class="material-symbols-outlined mx-1">
    arrow_back
  </span>
          Volver
        </router-link>

        <side-nav />
      </div>
      <div class="col-lg-10 mt-lg-0 mt-4">
                <side-nav-item />
<!--        <FormularioPais @paisSeleccionado="handlePaisSeleccionado" />-->
<!--        <FormularioRegion :selectedPais="selectedPais" />-->
      </div>
    </div>
  </div>
</template>

<script>
// import NavPill from "./components/NavPill.vue";
import FormularioPais from '@/views/components/NuevoContrato/FormularioPais.vue'
import FormularioRegion from '@/views/components/NuevoContrato/FormularioRegion.vue'
import SideNav from './components/NuevoContrato/SideNav.vue'
import SideNavItem from './components/NuevoContrato/SideNavItem.vue'
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'NuevoContrato',
  components: {
    FormularioRegion,
    FormularioPais,
    // NavPill,
    SideNav,
    SideNavItem

  },
  data() {
    return {
      selectedPais: null

    }
  },
  setup() {
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
  },
  methods: {
    handlePaisSeleccionado(paisId) {
      this.selectedPais = paisId
      console.log('ID del país seleccionado en el padre:', paisId)
    }
  }

}
</script>

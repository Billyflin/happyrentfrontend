<template>
  <navbar />
  <div
    class="page-header bg-gradient-dark position-relative m-3 border-radius-xl min-vh-50"
  >
    <img
      alt="pattern-lines"
      class="page-header top-0 position-absolute opacity-8 start-0 w-100"
      src="@/assets/img/illustrations/pattern-tree.svg"
    />
    <img alt="logo-Happ" class="position-absolute top-3 start-1" height="150"
         src="../../assets/img/logos/LogoHappGrandeBlanco.svg" />
    <span class="mask bg-gradient-dark opacity-2"></span>
    <div class="container py-10 position-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-white">Selecciona un plan para ti</h2>
          <p class="text-white">
            Los mejores planes para ti, con los mejores precios y beneficios
          </p>
        </div>
      </div>
      <form class="position-absolute top-0 end-0 m-2" role="form" @submit.prevent="submitForm">
        <div class="text-center">
          <material-button class="my-4 mb-2" color="primary" fullWidt type="submit" variant="gradient">ingresar
          </material-button>
        </div>
      </form>
    </div>
  </div>
  <div class="container-fluid px-5 my-6">
    <div class="card mt-n8">
      <!--      Targetas -->
      <precios-landing />
      <!--      Logos-->
      <div class="container my-6">
        <logos-landing />
        <!--  acordeon-->
        <acordeon-landing />
      </div>
    </div>
  </div>
  <app-footer />
</template>
<script>
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'
import NavPill from '@/assets/js/nav-pills.js'
import MaterialButton from '@/components/MaterialButton.vue'
import router from '@/router/index.js'
import AcordeonLanding from '@/views/PlantillasPlanas/components/AcordeonLanding.vue'
import PreciosLanding from '@/views/PlantillasPlanas/components/PreciosLanding.vue'
import LogosLanding from '@/views/PlantillasPlanas/components/LogosLanding.vue'

export default {
  name: 'PrincipalPlanes',
  components: { LogosLanding, PreciosLanding, AcordeonLanding, MaterialButton },
  data() {
    return {}
  },
  methods: {
    submitForm() {
      router.push({ name: '/' })
    }
  },
  setup() {
    const store = useAppStore()
    const { toggleEveryDisplay, toggleHideConfig } = store
    onMounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
      NavPill()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
    })
  }
}
</script>

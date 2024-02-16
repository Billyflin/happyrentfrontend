<template>
  <div
    class="page-header bg-gradient-dark position-relative m-3 border-radius-xl min-vh-50"
  >
    <img
      src="../assets/img/bg-pricing.jpg"
      alt="pattern-lines"
      class="page-header top-0 position-absolute opacity-8 start-0 w-100"
    />
    <img src="../assets/LogoHappyGrandeBlanco.svg" alt="logo-Happy" class="position-absolute top-3 start-1" />

    <span class="mask bg-gradient-dark opacity-2"></span>
    <div class="container py-10 postion-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-white">Tu Correo a sido verificado con exito</h2>
          <p class="text-white">
            Bienvenido a HappyRent tu mejor compañía para rentar y vender
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid px-5 my-6">
    <div class="card mt-n8">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-4 col-md-6 col-7 mx-auto text-center">
            <div class="card-body">
              <form role="form" class="text-start mt-3">
                <div class="text-center">
                  <material-button type="submit" class="my-4 mb-2" variant="gradient" color="primary" fullWidth>Sign in</material-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'
import MaterialButton from '@/components/MaterialButton.vue'
import {activateDarkMode, deactivateDarkMode} from '@/assets/js/dark-mode'

export default {
  name: 'CorreoVerificado',
  components: { MaterialButton },
  data() {
    return {}
  },
  setup() {
    const store = useAppStore()
    const { toggleEveryDisplay, toggleHideConfig } = store
    onMounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
      activateDarkMode()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
      deactivateDarkMode()
    })
  }
}
</script>

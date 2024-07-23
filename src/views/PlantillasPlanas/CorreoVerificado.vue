<template>
  <div
    class="page-header bg-gradient-dark position-relative m-3 border-radius-xl min-vh-50"
  >
    <img
      alt="pattern-lines"
      class="page-header top-0 position-absolute opacity-8 start-0 w-100"
      src="../../assets/img/illustrations/pattern-tree.svg">
    <img alt="logo-Happ" class="position-absolute top-3 start-1" height="150"
         src="../../assets/img/logos/LogoHappGrandeBlanco.svg" />

    <span class="mask bg-gradient-dark opacity-2"></span>
    <div class="container py-10 postion-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-white">Tu Correo ha sido verificado con exito</h2>
          <p class="text-white">
            Bienvenido a HappRent tu mejor compañía para rentar y vender
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
              <form class="text-start mt-3" role="form" @submit.prevent="submitForm">
                <div class="text-center">
                  <material-button class="my-4 mb-2" color="primary" fullWidth type="submit" variant="gradient">Sign
                    in
                  </material-button>
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
import { activateDarkMode, deactivateDarkMode } from '@/assets/js/dark-mode.js'
import router from '@/router/index.js'

export default {
  name: 'CorreoVerificado',
  components: { MaterialButton },
  data() {
    return {}
  },
  methods: {
    submitForm() {
      router.push({ name: 'SignIn' })
    }
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

<template>
  <div class="page-header bg-gradient-dark position-relative m-3 border-radius-xl min-vh-50">
    <img
      alt="pattern-lines"
      class="page-header top-0 position-absolute opacity-8 start-0 w-100"
      src="../../assets/img/fondo.png"
    />
    <router-link to="/">
      <img
        alt="logo-Happ"
        class="position-absolute z-index-3 top-3 start-1"
        height="150"
        src="../../assets/img/logos/LogoHappGrandeBlanco.svg"
      />
    </router-link>
    <span class="mask bg-gradient-dark opacity-2"></span>
    <div class="container py-10 postion-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h1 class="text-white">Registro Exitoso!</h1>
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
              <div class="mt-3">
                <h5>
                  Te hemos enviado un correo de confirmación a tu dirección de correo
                  electrónico.<br />
                  Por favor, sigue las instrucciones en el correo para activar tu cuenta.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, onUnmounted } from 'vue'
import { activateDarkMode, deactivateDarkMode } from '@/assets/js/dark-mode.js'
import router from '@/router/index.js'
import { useAppStore } from '@/store/appStore.js'

export default {
  name: 'RegistroExitoso',
  components: {},
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

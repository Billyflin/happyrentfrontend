<template>
  <div
    :style="`background-image:linear-gradient(195deg, #009d6a 0%, #000000 100%);`"
    class="page-header align-items-start min-vh-100 "
  >
    <fondo />
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-success border-radius-lg py-3 pe-1">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="row mt-3">
                    <img alt="Logo" class="btn btn-link px-3" height="90" src="../../assets/img/logos/LogoHapp.svg"
                         width="150" />
                  </div>
                </div>

                <!--                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0"></h4>-->
              </div>
            </div>
            <div class="card-body">
              <form class="text-start mt-3" role="form" @submit.prevent="loginHandler">
                <div class="mb-3">
                  <material-input id="username" v-model="username" label="Usuario o correo" name="username"
                                  type="text" />
                </div>
                <div class="mb-3">
                  <material-input id="password" v-model="password" label="Contraseña" name="password" type="password" />
                </div>
                <material-switch id="rememberMe" v-model=rememberMe name="rememberMe">Recuerdame</material-switch>
                <div class="text-center">
                  <material-button class="my-4 mb-2" color="primary" fullWidth type="submit" variant="gradient">
                    Ingresar
                  </material-button>
                </div>
                <p class="mt-4 text-xs text-center">
                  <span class="text-danger">{{ auth.errorMessage }}</span>
                </p>
                <p class="mt-4 text-sm text-center">
                  No tienes una cuenta?
                  <router-link :to="{name: 'SignUp'}" class="text-primary text-gradient font-weight-bold"
                  >Registrate!
                  </router-link
                  >
                </p>
                <p class="mt-4 text-sm text-center">
                  <router-link :to="{name: 'rememberPassword'}" class="text-primary text-gradient font-weight-bold"
                  >Olvidaste tu contraseña?
                  </router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer position-absolute bottom-2 py-2 w-100">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-12 col-md-6 my-auto">
            <div class="copyright text-center text-sm text-white text-lg-start">
              © {{ new Date().getFullYear() }}, HappRent <i aria-hidden="true" class="fa fa-heart"></i> by
              <a class="font-weight-bold text-white" target="_blank">Happy Services SpA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, ref, watch } from 'vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialSwitch from '@/components/Material/MaterialSwitch.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import router from '@/router/index.js'
import { useAuthStore } from '@/store/authStore.js'
import { useAppStore } from '@/store/appStore.js'
import Fondo from '@/views/Auth/Fondo.vue'


const auth = useAuthStore()
const username = ref('')
const password = ref('')
const rememberMe = ref(false)

const loginHandler = async () => {
  await auth.login(username.value, password.value)
}

const store = useAppStore()
const { toggleEveryDisplay } = store
watch(() => auth.currentUser, (value) => {
  if (value) {
    router.push({ name: 'Dashboard' })
  }
})

onBeforeMount(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})

onBeforeUnmount(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})
</script>

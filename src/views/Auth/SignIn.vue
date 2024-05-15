<template>
  <div
    class="page-header align-items-start min-vh-100 bg-gradient-secondary"
    :style="`background-image: url(${BackPerfilFoto}); background-size: contain; background-position: center; background-repeat: no-repeat;`"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-success border-radius-lg py-3 pe-1">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="row mt-3">
                    <img class="btn btn-link px-3" src="../../assets/LogoHapp.svg" alt="Logo" width="150" height="90"/>
                  </div>
                </div>

                <!--                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0"></h4>-->
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3" @submit.prevent="loginHandler">
                <div class="mb-3">
                  <material-input v-model="username" id="username" type="text" label="Usuario o correo" name="username" />
                </div>
                <div class="mb-3">
                  <material-input v-model="password" id="password" type="password" label="Contraseña" name="password" />
                </div>
                <material-switch v-model=rememberMe  id="rememberMe" name="rememberMe" >Recuerdame</material-switch>
                <div class="text-center">
                  <material-button type="submit" class="my-4 mb-2" variant="gradient" color="primary" fullWidth>Ingresar</material-button>
                </div>
                <p class="mt-4 text-xs text-center">
                  <span class="text-danger">{{auth.errMsg}}</span>
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
              © {{ new Date().getFullYear() }}, HappRent <i class="fa fa-heart" aria-hidden="true"></i> by
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
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import { useAppStore, useAuthStore } from '@/store/index.js'
import router from '@/router/index.js'
import BackPerfilFoto from '@/assets/img/illustrations/pattern-tree.svg'


const auth = useAuthStore()
const username = ref('')
const password = ref('')
const rememberMe = ref(false)

const loginHandler = async () => {
  auth.setRememberMe(document.getElementById('rememberMe').value)
  await auth.loginHandler(document.getElementById('username').value, document.getElementById('password').value)
}

const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store
watch(() => auth.userInfo, (value) => {
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

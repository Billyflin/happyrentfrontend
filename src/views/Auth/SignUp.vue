<template>
  <div class="bg-white">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div
                class="col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
              >
                <div :style="{ 'backgroundImage': 'url(' + Image + ')' }"
                     class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                </div>

              </div>
              <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder">Registro </h4>
                    <p class="mb-0">Ingresa tus datos para crear una cuenta!</p>
                  </div>
                  <div class="card-body">
                    <form role="form" @submit.prevent="submitForm">
                      <div v-if="err" class="row mb-3 mt-3">
                        <span class="badge badge-danger">{{ err }}</span>
                      </div>
                      <div class="mb-3">
                        <material-input id="name" v-model="name" label="Nombre Usuario" name="name" size="lg"
                                        type="text" />
                      </div>
                      <div class="mb-3">
                        <material-input id="email" v-model="email" label="Correo" name="email" size="lg" type="email" />
                      </div>
                      <div class="mb-3">
                        <material-input id="password" v-model="password" label="Contraseña" name="password" size="lg"
                                        type="password" />
                      </div>
                      <div class="mb-3">
                        <material-input id="passwordConfirm" v-model="passwordConfirm" label="Confirma tu contraseña"
                                        name="passwordConfirm" size="lg" type="password" />
                      </div>
                      <div v-if="passwordMismatch" class="row mb-3 mt-3">
                        <span class="badge badge-danger">Las contraseñas no coinciden</span>
                      </div>
                      <material-checkbox id="flexCheckDefault" v-model="accept" checked class="font-weight-light">
                        Acepto los
                        <a class="text-dark font-weight-bolder" href=""
                        >Términos y Condiciones</a
                        >
                      </material-checkbox>
                      <div v-if="acceptVerification" class="row mb-3 mt-3">
                        <span class="badge badge-danger">Acepta los términos y condiciones para continuar</span>
                      </div>
                      <div class="text-center">
                        <material-button class="mt-4" color="primary" fullWidth size="lg" variant="gradient"
                        >Registrarse
                        </material-button
                        >
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      Tienes una cuenta?
                      <router-link :to="{name: 'SignIn'}" class="text-primary text-gradient font-weight-bold"
                      >Iniciar Sesión
                      </router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, ref, watch, watchEffect } from 'vue'

import Image from '@/assets/img/illustrations/illustration-signin.jpg'
import { useRouter } from 'vue-router'
import axios from 'axios'
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { useRegisterFormStore } from '@/store/formStore.js'
import { useAppStore } from '@/store/appStore.js'


const body = document.getElementsByTagName('body')[0]
useRegisterFormStore()
const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store


const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const passwordMismatch = ref(false)
const acceptVerification = ref(false)
const accept = ref(false)
const err = ref('')

const router = useRouter()
const loading = ref(false)
const submitForm = () => {
  if (passwordMismatch.value) {
    console.log('Las contraseñas no coinciden')
    return
  }
  if (!accept.value) {
    console.log('Debes aceptar los términos y condiciones')
    acceptVerification.value = true
    return
  }
  acceptVerification.value = false
  const user = {
    username: name.value,
    password: password.value,
    email: email.value,
    role: 'PROVICIONAL'

  }
  loading.value = true

  axios.post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/auth/register`, user)
    .then(response => {
      console.log(response.data)
      if (response.status === 200) {
        router.push({ name: 'RegistroExitoso' })
      }
      loading.value = false
    })
    .catch(error => {
      console.error(error)
      err.value = error.response.data.message
      loading.value = false
    })
}


watch([password, passwordConfirm], () => {
    passwordMismatch.value = password.value !== passwordConfirm.value
  }
)


watchEffect(() => {
})

onBeforeMount(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
  body.classList.remove('bg-gray-100')
})

onBeforeUnmount(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
  body.classList.add('bg-gray-100')
})
</script>

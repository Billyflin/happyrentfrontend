<template>
  <main class="mt-0 main-content main-content-bg">
    <div class="page-header align-items-start min-height-300 m-3 border-radius-xl bg-gray-200"
         style="background-image: url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'); background-size: cover; background-position: center;">
      <span class="mask bg-gradient-dark opacity-4"></span>
    </div>
    <div class="container">
      <div class="row mt-lg-n12 mt-md-n12 mt-n12 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card mt-8 mb-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-warning shadow-warning border-radius-lg py-3 pe-1 text-center py-4">
                <h4 class="font-weight-bolder text-white mt-1" v-if="!state">Olvidó su contraseña</h4>
                <h3 class="font-weight-bolder text-white mt-1" v-else>Correo enviado</h3>
                <p class="mb-1 text-white text-sm" v-if="!state">Ingresa tus datos para continuar</p>
              </div>
            </div>
            <div class="card-body pb-3">
              <form role="form" @submit.prevent="submitForm">
                <div class="mb-3" v-if="state">
                  <h3 class="text-center">¡Listo! Revisa tu correo.</h3>
                </div>
                <div class="mb-3" v-if="!state">
                  <material-input
                    id="email"
                    label="Email"
                    name="email"
                    placeholder="john@email.com"
                    :disabled="sending"
                    v-model="emailValue"
                    type="email"
                    variant="static"
                  />
                </div>
                <div v-if="err" class="row mb-3 mt-3">
                  <span class="badge badge-danger">{{ err }}</span>
                </div>
                <div class="text-center" v-if="!state">
                  <material-button :disabled="sending" class="mt-4" color="warning" full-width variant="gradient">
                    Enviar
                  </material-button>
                </div>
              </form>
            </div>
          </div>
          <router-link to="/sign-in">
            <material-button
              class=" mb-4"
              color="warning"
              full-width
              variant="gradient"
              v-if="state"
            >
              Volver
            </material-button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import { useAppStore } from '@/store/index.js'
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'
import axios from 'axios'

const state = ref(false)
const emailValue = ref('')
const err = ref('')
const sending = ref(false)

const submitForm = () => {
  sending.value = true
  axios
    .post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/auth/forgot-password-email`, {
      email: emailValue.value
    })
    .then(response => {
      console.log(response.data)
      if (response.status === 200) {
        state.value = true
        sending.value = false
      }
    })
    .catch(error => {
      console.error(error)
      err.value = error.response.data
    })
}

const body = document.getElementsByTagName('body')[0]
const store = useAppStore()
const { toggleEveryDisplay } = store

onBeforeMount(() => {
  toggleEveryDisplay()
  body.classList.remove('bg-gray-100')
})

onBeforeUnmount(() => {
  toggleEveryDisplay()
  body.classList.remove('bg-gray-100')
})
</script>

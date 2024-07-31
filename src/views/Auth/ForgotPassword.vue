<template>
  <main v-if="isTokenValid" class="mt-0 main-content main-content-bg">
    <div class="page-header align-items-start min-height-300 m-3 border-radius-xl bg-gray-200"
         style="background-image: url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'); background-size: cover; background-position: center;">
      <span class="mask bg-gradient-dark opacity-4"></span>
    </div>
    <div class="container">
      <div class="row mt-lg-n7 mt-md-n7 mt-n7 justify-content-center">
        <div class="col-lg-8 col-md-7 mb-3">
          <div v-if="!error" class="card">
            <div v-if="!state" class="card-header">
              <div class="text-center">
                <h1 class="mb-3">Recuperar contraseña</h1>
                <p> La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula, un
                  dígito y un carácter especial. No se permiten espacios en blanco. No puede tener el caracter especial
                  "!" . </p>
              </div>
            </div>
            <div v-else class="card-header">
              <div class="text-center">
                <h1 class="mb-3">¡Listo! </h1>
                <h3> Contraseña cambiada </h3>
              </div>
            </div>
            <div v-if="state" class="card-body">
              <p class="text-center"> Ya puedes volver a iniciar sesión</p>
              <router-link to="/sign-in">
                <material-button
                  class=" mb-4"
                  color="success"
                  full-width
                  variant="gradient"
                >
                  Volver
                </material-button>
              </router-link>
            </div>
            <form v-if="!state" class="card-body" @submit.prevent="submitForm">
              <div>
                <material-input
                  id="password"
                  v-model="password"
                  :disabled="sending"
                  label="Ingresa tu nueva contraseña"
                  type="password"
                />
              </div>

              <div class="mt-4">
                <material-input
                  id="passwordConfirm"
                  v-model="passwordConfirm"
                  :disabled="sending"
                  class="mt-4"
                  label="Confirma tu nueva contraseña"
                  type="password"
                />
              </div>
              <div v-if="passwordMismatch" class="row mb-3 mt-3">
                <span class="badge badge-danger">Las contraseñas no coinciden</span>
              </div>
              <div class="mt-4">
                <material-button
                  :disabled="sending"
                  color="success"
                  full-width
                  variant="gradient"
                >
                  Cambiar contraseña
                </material-button>
              </div>
            </form>
          </div>
          <div v-else class="card">
            <div class="card-body">
              <h2 class="text-center">{{ error }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <main v-else class="mt-0 main-content main-content-bg">
    <div class="container">
      <div class="row mt-lg-10 mt-md-10 mt-10 justify-content-center">
        <div class="col-lg-8 col-md-7 mb-3">
          <div class="card card-body">
            <h1 class="text-center">
              El token no es válido.
            </h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue'

import axios from 'axios'
import { validate as isValidUUID } from 'uuid'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { useAppStore } from '@/store/appStore.js'

export default {
  components: {
    MaterialButton,
    MaterialInput
  },
  props: {
    token: String
  },
  setup(props) {
    const password = ref('')
    const passwordConfirm = ref('')
    const passwordMismatch = computed(() => password.value !== passwordConfirm.value)
    const state = ref(false)
    const sending = ref(false)
    const error = ref('')

    const isTokenValid = computed(() => isValidUUID(props.token))
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
    const submitForm = async () => {
      if (passwordMismatch.value || sending.value) return

      sending.value = true
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/auth/forgot-password-token`, {
          token: props.token,
          password: password.value
        })

        if (response.status === 200) {
          state.value = true
        }
      } catch (err) {
        if (err.response && err.response.status === 500 && err.response.data === 'Token Invalido.') {
          error.value = 'El token no es válido.'
          isTokenValid.value = false
        } else {
          error.value = 'Hubo un error al cambiar la contraseña. Por favor, inténtalo de nuevo más tarde.'
        }
        console.error(err)
      } finally {
        sending.value = false
      }
    }

    return {
      password,
      passwordConfirm,
      passwordMismatch,
      state,
      sending,
      error,
      isTokenValid,
      submitForm
    }
  }
}
</script>



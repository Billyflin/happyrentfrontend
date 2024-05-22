<template>
  <main class="mt-0 main-content main-content-bg">
    <div
      class="page-header align-items-start min-height-300 m-3 border-radius-xl bg-gray-200"
      style="
        background-image: url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
        background-size: cover;
        background-position: center;
      "
    >
      <span class="mask bg-gradient-dark opacity-4"></span>
    </div>
    <div class="container">
      <div class="row mt-lg-n12 mt-md-n12 mt-n12 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card mt-8">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-warning shadow-warning border-radius-lg py-3 pe-1 text-center py-4">
                <h4 class="font-weight-bolder text-white mt-1">Olvidó su contraseña</h4>
                <p class="mb-1 text-white text-sm">Ingresa tus datos para continuar</p>
              </div>
            </div>
            <div class="card-body pb-3">
              <form role="form" @submit.prevent="submitForm">
                <div class="mb-3">
                  <material-input
                    id="email"
                    label="Email"
                    name="email"
                    placeholder="john@email.com"
                    type="email"
                    variant="static"
                  />
                </div>
                <div class="text-center">
                  <material-button class="mt-4" color="warning" full-width variant="gradient">Enviar</material-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import { useAppStore } from '@/store/index.js'
import { onBeforeMount, onBeforeUnmount } from 'vue'

const submitForm = () => {
  alert('Form submitted')
}

const body = document.getElementsByTagName('body')[0]

const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store

onBeforeMount(() => {
  toggleEveryDisplay()
  toggleHideConfig()
  body.classList.remove('bg-gray-100')
})

onBeforeUnmount(() => {
  toggleEveryDisplay()
  toggleHideConfig()
  body.classList.remove('bg-gray-100')
})
</script>
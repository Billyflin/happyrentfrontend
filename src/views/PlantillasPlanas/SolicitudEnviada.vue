<template>
  <div class="container">
    <div class="row line-pattern bg-primary-gradient rounded-3 p-7 g-0">
      <div class="col-lg-8 offset-lg-2 z-1">
        <div class="text-center py-md-7">
          <h1 >Tu solicitud ha sido enviada
            <i class="fas fa-check-circle fa-1x text-success"></i>
          </h1>

          <p class="px-lg-7 text-bolder mb-5">
            Nos encargaremos de revisar tu solicitud y te contactaremos en breve.
            Gracias por confiar en nosotros.
          </p>
          <a href="/" class="btn btn-dark">Volver al inicio</a>
        </div>
      </div>
    </div>
  </div>

  <confetti />
</template>



<script setup>
import { useAppStore } from '@/store/appStore.js'
import { onBeforeMount, onMounted } from 'vue'
import { useNotificationsStore } from '@/store/notifications.js'
import Confetti from '@/views/Shared/Confetti.vue'
import light from '@/assets/img/appearance/light.svg'
import dark from '@/assets/img/appearance/dark.svg'

const store = useAppStore()
const store2 = useNotificationsStore()
onBeforeMount(() => {
  store.showSidenav = false
  store.showFooter = false
  store.showNavbar = false
})
onMounted(() => {
  store2.triggerConfetti()
})
</script>

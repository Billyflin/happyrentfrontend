<template>
  <div
    class="congratulations d-flex flex-column align-items-center justify-content-center min-vh-100"
  >
    <div class="card text-center p-4 shadow-lg border-success">
      <div class="card-header bg-success">
        <h2 class="text-white">¡Felicitaciones!</h2>
      </div>
      <div class="card-body animate__animated animate__fadeIn">
        <h2 class="card-title">¡Tu contrato se ha creado con éxito!</h2>
        <p class="card-text">Gracias por tu confianza en nosotros.</p>
        <button class="btn btn-success mt-4 animate__animated animate__bounceIn" @click="goHome">
          Volver al Inicio
        </button>
      </div>
    </div>
  </div>
  <confetti />
</template>

<script>
import router from '@/router/index.js'
import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/store/appStore.js'
import { useNotificationsStore } from '@/store/notifications.js'
import Confetti from '@/views/Shared/Confetti.vue'

export default {
  name: 'Congratulations',
  components: { Confetti },
  methods: {
    goHome() {
      // Lógica para redirigir a la página de inicio
      router.push('/')
    }
  },
  setup() {
    const store = useAppStore()
    const store2 = useNotificationsStore()

    const { toggleEveryDisplay, toggleHideConfig } = store

    onMounted(() => {
      toggleEveryDisplay()
      store2.triggerConfetti()
      store.showFooter = false
      store.showNavbar = false

      // toggleHideConfig()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
      // toggleHideConfig()
    })
  }
}
</script>

<style scoped>
@import 'animate.css/animate.min.css';

.congratulations {
  background: linear-gradient(135deg, #68a9d6, #c68be3);
  color: white;
}
</style>

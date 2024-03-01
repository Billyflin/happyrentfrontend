<template>
  <div
    class="page-header bg-gradient-dark position-relative m-3 border-radius-xl min-vh-50"
  >
    <img
      src="../../assets/img/bg-pricing.jpg"
      alt="pattern-lines"
      class="page-header top-0 position-absolute opacity-8 start-0 w-100"
    />
    <img src="../../assets/LogoHappGrandeBlanco.svg" alt="logo-Happ" class="position-absolute top-3 start-1" height="150" />

    <span class="mask bg-gradient-dark opacity-2"></span>
    <div class="container py-10 postion-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h1 class="text-white">NotFound</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'
import {activateDarkMode, deactivateDarkMode} from '@/assets/js/dark-mode.js'
import router from '@/router/index.js'

export default {
  name: 'NotFound',
  components: {},
  data() {
    return {}
  },
  methods: {
    submitForm() {
      router.push({ name: 'SignIn' })
    },
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
<template>
  <div class="full-screen">
    <multi-steps-form />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import MultiStepsForm from '@/views/Auth/components/MultiStepsForm.vue'
import { useAppStore } from '@/store/appStore.js'

const store = useAppStore()
const { toggleEveryDisplay } = store

onMounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})

onUnmounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})
</script>

<style scoped>
.full-screen {
  width: 100vw;
  height: 100vh;
}
</style>

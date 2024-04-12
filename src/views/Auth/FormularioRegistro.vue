<template>
  <multi-steps-form/>
</template>
<script setup>
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'
import MultiStepsForm from '@/views/Auth/components/MultiStepsForm.vue'

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
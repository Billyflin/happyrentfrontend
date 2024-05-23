<script>
import { useAuthStore } from '@/store/index.js'
import { onUnmounted } from 'vue'

export default {
  name: 'SolicitudDetails',
  data(){
    return {
     auth: useAuthStore()
    }
  },
  setup(){
    onUnmounted(
      () => {
      this.auth.solicitud = null
      }
    )
  }
}
</script>

<template>
    <div>
      <h1>Detalles de la solicitud {{auth.solicitud}}</h1>
    </div>
</template>
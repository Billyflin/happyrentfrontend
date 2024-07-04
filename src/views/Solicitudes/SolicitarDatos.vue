<script setup>

import SolicitarDatosContrato from '@/views/Contrato/components/SolicitarDatosContrato.vue'
import TablaPerfilesTemporales from '@/views/Solicitudes/TablaPerfilesTemporales.vue'
import { onMounted } from 'vue'
import { useAuthStore } from '@/store/index.js'


const auth = useAuthStore()
onMounted(() => {
  auth.getSolicitudes()
})
</script>

<template>
  <div class="container-fluid mb-4">
    <solicitar-datos-contrato />

    <tabla-perfiles-temporales
      :lists="auth.solicitudes"
    />
  </div>
</template>

<style scoped>

</style>
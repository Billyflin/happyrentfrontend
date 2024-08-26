<script setup>
import TablaPerfilesTemporales from '@/views/Solicitudes/TablaPerfilesTemporales.vue'
import { onMounted } from 'vue'
import { getSolicitudes } from '@/servicios/solicitudService.js'
import SolicitarDatosContrato from '@/views/Solicitudes/component/SolicitarDatosContrato.vue'

onMounted(() => {
  getSolicitudes()
})
</script>

<template>
  <div class="container-fluid mb-4">
    <solicitar-datos-contrato />

    <tabla-perfiles-temporales />
  </div>
</template>

<style scoped></style>

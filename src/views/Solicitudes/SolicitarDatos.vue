<script setup>

import SolicitarDatosContrato from '@/views/Contrato/components/SolicitarDatosContrato.vue'
import TablaPerfilesTemporales from '@/views/Solicitudes/TablaPerfilesTemporales.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import TablaPersonas from '@/views/Personas/components/TablaPersonas.vue'


const perfiles = ref(null)
onMounted(async () => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/temporal`)
  console.log(response.data)
  perfiles.value = response.data
})
</script>

<template>
  <div class="container-fluid mb-4">
    <solicitar-datos-contrato />
    <tabla-perfiles-temporales
      v-if="perfiles"
      :lists="perfiles"
    />
  </div>
</template>

<style scoped>

</style>
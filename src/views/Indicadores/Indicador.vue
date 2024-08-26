<template>
  <div class="py-4 container-fluid">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div
          v-if="isLoading"
          class="d-flex justify-content-center align-items-center"
          style="height: 50vh"
        >
          <div class="spinner-border text-primary" role="status" style="width: 4rem; height: 4rem">
            <span class="visually-hidden">Cargando...</span>
          </div>
        </div>
        <div v-else class="row">
          <IndicadoresDiarios />
        </div>
        <GraficosIndicadores />
      </div>
      <div class="col-lg-12 position-relative z-index-2 mt-4">
        <div class="card card-body">
          <div class="row justify-content-center align-items-center">
            <div class="col-sm-auto col-4">
              <material-avatar :img="logoBancoCentral" alt="bruce" />
            </div>
            <div class="col-sm-auto col-8 my-auto">
              <div class="h-100">
                <p class="mb-0 font-weight-bold text-sm text-capitalize">fuente</p>
                <h5 class="mb-1 font-weight-bolder">Banco Central de Chile</h5>
              </div>
            </div>
            <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">
              <p class="text-end mx-6">
                Todos los datos fueron recopilados utilizando la api del
                <strong> Banco Central de Chile</strong> el dia
                {{ lastUpdated.toLocaleString('es-CL', { timeZone: 'America/Santiago' }) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import logoBancoCentral from '@/assets/img/logos/layout_set_logo.svg'
import MaterialAvatar from '@/components/Material/MaterialAvatar.vue'
import IndicadoresDiarios from '@/views/Indicadores/IndicadoresDiarios.vue'
import { getLastUpdate } from '@/servicios/indicadores.js'
import GraficosIndicadores from '@/views/Indicadores/GraficosIndicadores.vue'

// Inicializamos lastUpdated con una fecha por defecto
let lastUpdated = ref(new Date())
let isLoading = ref(true)

onBeforeMount(async () => {
  try {
    const response = await getLastUpdate()
    // Asegúrate de que la respuesta sea una cadena de fecha válida y conviértela a un objeto Date
    lastUpdated.value = new Date(response.data)
  } catch (error) {
    console.error('Error al obtener la última actualización:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

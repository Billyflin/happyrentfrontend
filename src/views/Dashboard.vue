<template>
  <div class="py-4 container-fluid">
    <div class="row mb-4">

      <div class="col-lg-12 position-relative z-index-2">
        <div v-if="isLoading" class="d-flex justify-content-center align-items-center" style="height: 50vh;">
          <div class="spinner-border text-primary" style="width:4rem; height: 4rem;" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
          </div>
        <div v-else class="row">
          <mini-statistics-card v-if="DOLARData"
            title="Dólar"
            :data="DOLARData"
            :icon="{ name: 'attach_money', color: 'text-white', background: 'success' }"
          />
          <mini-statistics-card v-if="UTMData"
            title="UTM"
            :data="UTMData"
            :icon="{ name: 'attach_money', color: 'text-white', background: 'happLight' }"
          />
          <mini-statistics-card v-if="UFData"
            title="UF"
            :data="UFData"
            :icon="{ name: 'attach_money', color: 'text-white', background: 'primary' }"/>
          <mini-statistics-card v-if="IPCData"
            title="IPC"
            :data="IPCData"
            :icon="{ name: 'attach_money', color: 'text-white', background: 'secondary' }"
          />
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard v-if="DOLARData"
                             title="Valor del Dólar"
                             subtitle="Últimos valores"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="success"
            >
              <LineChart :data="DOLARData" id="line-chart-dolar" :yAxisMin="Math.min(...DOLARData.map(obs => parseFloat(obs.value)))"
                         :y-axis-max="Math.max(...DOLARData.map(obs => parseFloat(obs.value)))" />
            </ChartHolderCard>
          </div>
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard v-if="UTMData"
                             title="Valor del UTM"
                             subtitle="Últimos valores"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="happLight"
            >
              <LineChart :data="UTMData" id="line-chart-3" :yAxisMin="Math.min(...UTMData.map(obs => parseFloat(obs.value)))"
                         :y-axis-max="Math.max(...UTMData.map(obs => parseFloat(obs.value)))" />

            </ChartHolderCard>
          </div>
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard v-if="UFData"
                             title="Valor del UF"
                             subtitle="Últimos valores"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="primary"
            >
              <LineChart :data="UFData" id="line-chart-4" :yAxisMin="Math.min(...UFData.map(obs => parseFloat(obs.value)))"
                         :y-axis-max="Math.max(...UFData.map(obs => parseFloat(obs.value)))" />
            </ChartHolderCard>
            </div>
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard v-if="IPCData"
                             title="Valor del IPC"
                             subtitle="Últimos valores"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="secondary"
            >
              <LineChart :data="IPCData" id="line-chart-5" :yAxisMin="Math.min(...IPCData.map(obs => parseFloat(obs.value)))"
                         :y-axis-max="Math.max(...IPCData.map(obs => parseFloat(obs.value)))" />
            </ChartHolderCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import LineChart from '@/examples/Charts/LineChart.vue'
import ChartHolderCard from '@/views/components/ChartHolderCard.vue'
import MiniStatisticsCard from '@/views/components/MiniStatisticsCard/MiniStatisticsCard.vue'


let UTMData = ref(null)
let DOLARData = ref(null)
let UFData = ref(null)
let IPCData = ref(null)
let lastUpdated = new Date()
let isLoading = ref(true)


async function fetchData(url, dataRef) {
  const response = await axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    }
  })
  dataRef.value = response.data.Series.Obs.filter(obs => obs.value !== "NaN")
}

onBeforeMount(async () => {

  await fetchData(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/utm`, UTMData)
  await fetchData(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/dolar`, DOLARData)
  await fetchData(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/uf`, UFData)
  await fetchData(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/ipc`, IPCData)
  isLoading.value = false
})
function getMinutesSinceLastUpdate() {
  let now = new Date()
  let difference = now - lastUpdated
  return Math.floor(difference / 1000 / 60)
}

</script>

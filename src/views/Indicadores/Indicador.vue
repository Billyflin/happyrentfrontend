<template>
  <div class="py-4 container-fluid">
    <div class="row mb-4">

      <div class="col-lg-12 position-relative z-index-2">
        <div v-if="isLoading" class="d-flex justify-content-center align-items-center" style="height: 50vh;">

          <div class="spinner-border text-primary" role="status" style="width:4rem; height: 4rem;">
            <span class="visually-hidden">Cargando...</span>
          </div>
        </div>
        <div v-else class="row">
          <mini-statistics-card v-if="DOLARData"
                                :data="DOLARData"
                                :icon="{ name: 'attach_money', color: 'text-white', background: 'success' }"
                                title="Dólar"
          />
          <mini-statistics-card v-if="UTMData"
                                :data="UTMData"
                                :icon="{ name: 'attach_money', color: 'text-white', background: 'happLight' }"
                                title="UTM"
          />
          <mini-statistics-card v-if="UFData"
                                :data="UFData"
                                :icon="{ name: 'attach_money', color: 'text-white', background: 'primary' }"
                                title="UF" />
          <mini-statistics-card v-if="IPCData"
                                :data="IPCData"
                                :icon="{ name: 'attach_money', color: 'text-white', background: 'secondary' }"
                                title="IPC"
          />
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard v-if="DOLARData"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="success"
                             subtitle="Últimos valores"
                             title="Valor del Dólar"
            >
              <LineChart id="line-chart-dolar" :data="DOLARData"
                         :y-axis-max="Math.max(...DOLARData.map(obs => parseFloat(obs.value)))"
                         :yAxisMin="Math.min(...DOLARData.map(obs => parseFloat(obs.value)))" />
            </ChartHolderCard>
          </div>
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard v-if="UTMData"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="happLight"
                             subtitle="Últimos valores"
                             title="Valor del UTM"
            >
              <LineChart id="line-chart-3" :data="UTMData"
                         :y-axis-max="Math.max(...UTMData.map(obs => parseFloat(obs.value)))"
                         :yAxisMin="Math.min(...UTMData.map(obs => parseFloat(obs.value)))" />

            </ChartHolderCard>
          </div>
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard v-if="UFData"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="primary"
                             subtitle="Últimos valores"
                             title="Valor del UF"
            >
              <LineChart id="line-chart-4" :data="UFData"
                         :y-axis-max="Math.max(...UFData.map(obs => parseFloat(obs.value)))"
                         :yAxisMin="Math.min(...UFData.map(obs => parseFloat(obs.value)))" />
            </ChartHolderCard>
          </div>
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard v-if="IPCData"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="secondary"
                             subtitle="Últimos valores"
                             title="Valor del IPC"
            >
              <LineChart id="line-chart-5" :data="IPCData"
                         :y-axis-max="Math.max(...IPCData.map(obs => parseFloat(obs.value)))"
                         :yAxisMin="Math.min(...IPCData.map(obs => parseFloat(obs.value)))" />
            </ChartHolderCard>
          </div>
        </div>
      </div>
      <div class="col-lg-12 position-relative z-index-2 mt-4">
        <div class="card card-body">
          <div class="row justify-content-center align-items-center">
            <div class="col-sm-auto col-4">
              <material-avatar
                :img="logoBancoCentral"
                alt="bruce"
              />
            </div>
            <div class="col-sm-auto col-8 my-auto">
              <div class="h-100">
                <p class="mb-0 font-weight-bold text-sm text-capitalize">fuente</p>
                <h5 class="mb-1 font-weight-bolder">Banco Central de Chile</h5>
              </div>
            </div>
            <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">
              <p class="text-end mx-6"> Todos los datos fueron recopilados utilizando la api del <strong>
                Banco
                Central de Chile</strong> el dia
                {{ lastUpdated.toLocaleString('es-CL', { timeZone: 'America/Santiago' }) }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import logoBancoCentral from '@/assets/img/logos/layout_set_logo.svg'
import MaterialAvatar from '@/components/Material/MaterialAvatar.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import MiniStatisticsCard from '@/views/Indicadores/component/MiniStatisticsCard.vue'
import ChartHolderCard from '@/views/Indicadores/component/ChartHolderCard.vue'

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
  dataRef.value = response.data.Series.Obs.filter(obs => obs.value !== 'NaN')
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

<template>
  <div class="py-4 container-fluid">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row mt-4">
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
          <div class="col-lg-6 col-md-6 mt-6">
            <ChartHolderCard
              title="Website Views"
              subtitle="Last Campaign Performance"
              :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
              color="happLight"
            >
              <BarChart
                :chart="{
                              xAxislDatas: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
                              datasets: {
                                label: 'Sales',
                                data: [50, 20, 10, 22, 50, 10, 40],
                              },
                            }"
              />
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
import BarChart from '@/examples/Charts/BarChart.vue'


let UTMData = ref(null)
let DOLARData = ref(null)
let UFData = ref(null)
let IPCData = ref(null)
let lastUpdated = new Date()


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
  await fetchData('https://localhost:8443/utm', UTMData)
  await fetchData('https://localhost:8443/dolar', DOLARData)
  await fetchData('https://localhost:8443/uf', UFData)
  await fetchData('https://localhost:8443/ipc', IPCData)
})
function getMinutesSinceLastUpdate() {
  let now = new Date()
  let difference = now - lastUpdated
  return Math.floor(difference / 1000 / 60)
}

</script>
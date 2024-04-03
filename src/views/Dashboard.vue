<template>
  <div class="py-4 container-fluid">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row">
          <mini-statistics-card
              v-for="{title, detail, icon} of MiniStatisticsData"
              :key="title.text"
              :title="title"
              :detail="detail"
              :icon="icon"
          />
        </div>
        <div class="row mt-4">
          <div class="col-lg-6 col-md-6 mt-4">
            <ChartHolderCard v-if="DolarData"
                             title="Valor del Dólar"
                             subtitle="Últimos valores"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="happDark"
            >
              <LineChart :chart="DolarData" id="line-chart-1" :yAxisMin="Math.min(...DolarData.datasets.data)"
                         :y-axis-max="Math.max(...DolarData.datasets.data) "/>
            </ChartHolderCard>
          </div>
          <!--          modifica este grafico para ponerle uf-->

          <div class="col-lg-6 mt-4">
            <ChartHolderCard v-if="UFData"
                             title="Valor de la Unidad de Fomento (UF)"
                             subtitle="Last Campaign Performance"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="dark"
            >
              <LineChart :chart="UFData" id="line-chart-2" :yAxisMin="Math.min(...UFData.datasets.data)"
                         :y-axis-max="Math.max(...UFData.datasets.data)"/>
            </ChartHolderCard>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-6 col-md-6 mt-4">
            <ChartHolderCard v-if="IPCData"
                             title="Valor del IPC"
                             subtitle="Últimos valores"
                             :update="getMinutesSinceLastUpdate() > 0 ? `${getMinutesSinceLastUpdate()} minutos` : 'Actualizado'"
                             color="secondary"
            >
              <LineChart :chart="IPCData" id="line-chart-3" :yAxisMin="Math.min(...IPCData.datasets.data)"
                         :y-axis-max="Math.max(...IPCData.datasets.data)"/>
            </ChartHolderCard>
          </div>
          <div class="col-lg-6 col-md-6 mt-4">
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
import {onBeforeMount, onMounted, ref} from 'vue'
import axios from 'axios'
import MiniStatisticsCard from '@/views/components/MiniStatisticsCard/MiniStatisticsCard.vue'
import LineChart from '@/examples/Charts/LineChart.vue'
import ChartHolderCard from '@/views/components/ChartHolderCard.vue'
import BarChart from '@/examples/Charts/BarChart.vue'


let MiniStatisticsData = ref([])
let DolarData = ref(null)
let UFData = ref(null)
let UTMData = ref(null)
let IPCData = ref(null)
let previousData = ref(null)
let lastUpdated = new Date()


onBeforeMount(async () => {
  const response = await axios.get('/api')
  const data = response.data

  DolarData.value = await getChartData('/api/dolar', 'Valor del Dólar')
  UFData.value = await getChartData('/api/uf', 'Valor del UF')
  IPCData.value = await getChartData('/api/ipc', 'Valor del IPC')
  UTMData.value = await getChartData('/api/utm', 'Valor del UTM')
  MiniStatisticsData.value = createStatisticsData(data)
})

function getMinutesSinceLastUpdate() {
  let now = new Date()
  let difference = now - lastUpdated
  return Math.floor(difference / 1000 / 60)
}

async function getChartData(apiEndpoint, label) {
  const response = await axios.get(apiEndpoint)
  const data = response.data.serie
  lastUpdated = new Date()
  return {
    xAxislDatas: data.map((item) => new Date(item.fecha).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })).reverse(),
    datasets: {
      label: label,
      data: data.map((item) => item.valor).reverse()
    }
  }
}

function createStatisticsData(data) {
  const newData = [
    {
      'title': {
        'text': 'Dólar',
        'value': `$${data.dolar.valor}`
      },
      'detail': getDetail(DolarData, 'Dólar'),
      'icon': {
        'name': 'attach_money',
        'color': 'white',
        'background': 'happDark'
      }
    },
    {
      'title': {
        'text': 'UF',
        'value': `$${data.uf.valor}`
      },
      'detail': getDetail(UFData, 'UF'),
      'icon': {
        'name': 'UF',
        'color': 'white',
        'background': 'happDark'
      }
    },
    {
      'title': {
        'text': 'UTM',
        'value': `$${data.utm.valor}`
      },
      'detail': getDetail(UTMData, 'UTM'),
      'icon': {
        'name': 'UTM',
        'color': 'white',
        'background': 'dark'
      }
    },
    {
      'title': {
        'text': 'IPC',
        'value': `%${data.ipc.valor}`
      },
      'detail': getDetail(IPCData, 'IPC'),
      'icon': {
        'name': 'euro_symbol',
        'color': 'white',
        'background': 'secondary'
      }
    }
  ]

  // Almacenar los nuevos valores para la próxima comparación
  previousData.value = newData

  return newData
}

function getDetail(data, label) {
  if (!data.value || !data.value.datasets.data.length) {
    return '<span class=\'text-success text-sm font-weight-bolder\'> Actualizado</span>'
  }

  const lastValue = data.value.datasets.data[data.value.datasets.data.length - 1]
  const secondLastValue = data.value.datasets.data[data.value.datasets.data.length - 2]

  if (secondLastValue) {
    let change
    if (label === 'IPC') {
      change = lastValue - secondLastValue
      return `<span class='${change >= 0 ? 'text-success' : 'text-danger'} text-sm font-weight-bolder'> ${change.toFixed(2)} </span> ${change >= 0 ? 'más' : 'menos'} que el mes pasado`
    } else {
      change = ((lastValue - secondLastValue) / Math.abs(secondLastValue)) * 100
      return `<span class='${change >= 0 ? 'text-success' : 'text-danger'} text-sm font-weight-bolder'> ${change.toFixed(2)}% </span> ${change >= 0 ? 'más' : 'menos'} que ayer`
    }
  } else {
    return '<span class=\'text-success text-sm font-weight-bolder\'> Actualizado</span>'
  }
}


</script>
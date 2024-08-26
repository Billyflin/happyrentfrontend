<template>
  <div class="row">
    <div class="col-lg-6 col-md-6 mt-6">
      <ChartHolderCard
        v-if="DOLARData"
        :update="'Actualizado'"
        color="secondary"
        subtitle="Últimos valores"
        title="Valor del Dólar"
      >
        <LineChart id="line-chart-dolar" :data="DOLARData" :rounded-to="10" />
      </ChartHolderCard>
    </div>
    <div class="col-lg-6 col-md-6 mt-6">
      <ChartHolderCard
        v-if="IPCData"
        :update="'Actualizado'"
        color="happDark"
        subtitle="Últimos valores"
        title="Valor del IPC"
      >
        <LineChart id="line-chart-5" :data="IPCData" :rounded-to="0" />
      </ChartHolderCard>
    </div>
    <div class="col-lg-6 col-md-6 mt-6">
      <ChartHolderCard
        v-if="UTMData"
        :update="'Actualizado'"
        color="primary"
        subtitle="Últimos valores"
        title="Valor del UTM"
      >
        <LineChart id="line-chart-3" :data="UTMData" :rounded-to="100" />
      </ChartHolderCard>
    </div>
    <div class="col-lg-6 col-md-6 mt-6">
      <ChartHolderCard
        v-if="UFData"
        :update="'Actualizado'"
        color="success"
        subtitle="Últimos valores"
        title="Valor del UF"
      >
        <LineChart id="line-chart-4" :data="UFData" :rounded-to="10" />
      </ChartHolderCard>
    </div>
  </div>
</template>
<script>
import ChartHolderCard from '@/views/Indicadores/component/ChartHolderCard.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import { getDolaruntil, getIPCuntil, getUFuntil, getUTMuntil } from '@/servicios/indicadores.js'

export default {
  name: 'GraficosIndicadores',
  components: { LineChart, ChartHolderCard },
  data() {
    return {
      UTMData: null,
      IPCData: null,
      UFData: null,
      DOLARData: null
    }
  },
  mounted() {
    const getStartDate = (months) => {
      const startDate = new Date()
      startDate.setMonth(startDate.getMonth() - months)
      return startDate
    }
    getUTMuntil(getStartDate(12)).then((data) => {
      this.UTMData = data.data
    })
    getUFuntil(getStartDate(1)).then((data) => {
      this.UFData = data.data
    })
    getDolaruntil(getStartDate(1)).then((data) => {
      this.DOLARData = data.data
    })
    getIPCuntil(getStartDate(12)).then((data) => {
      this.IPCData = data.data
    })
  }
}
</script>

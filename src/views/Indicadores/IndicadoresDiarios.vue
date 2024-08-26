<template>
  <mini-statistics-card
    v-if="DOLARData"
    :data="DOLARData"
    :icon="{ name: 'attach_money', color: 'text-white', background: 'primary' }"
    title="Dólar"
  />
  <mini-statistics-card
    v-if="UTMData"
    :data="UTMData"
    :icon="{ name: 'attach_money', color: 'text-white', background: 'secondary' }"
    title="UTM"
  />
  <mini-statistics-card
    v-if="UFData"
    :data="UFData"
    :icon="{ name: 'attach_money', color: 'text-white', background: 'success' }"
    title="UF"
  />
  <mini-statistics-card
    v-if="IPCData"
    :data="IPCData"
    :icon="{ name: 'attach_money', color: 'text-white', background: 'happDark' }"
    title="IPC"
  />
</template>
<script>
import MiniStatisticsCard from '@/views/Indicadores/component/MiniStatisticsCard.vue'
import { getDolar, getIPC, getUF, getUTM } from '@/servicios/indicadores.js'

export default {
  name: 'IndicadoresDiarios',
  components: { MiniStatisticsCard },
  data() {
    return {
      DOLARData: null,
      UTMData: null,
      UFData: null,
      IPCData: null
    }
  },
  mounted() {
    getIPC().then((data) => {
      this.IPCData = data.data
    })
    getUF().then((data) => {
      this.UFData = data.data
    })
    getDolar().then((data) => {
      this.DOLARData = data.data
    })
    getUTM().then((data) => {
      this.UTMData = data.data
    })
  }
}
</script>
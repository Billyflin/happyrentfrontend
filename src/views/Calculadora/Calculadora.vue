<template>
  <div class="container-fluid mt-5">
    <div class="card shadow-sm">
      <div class="card-header pb-0">
        <h2 class="mb-0">Calculadora de Reajuste de Arriendo</h2>
        <p class="mb-3">Calcula el reajuste de un arriendo mes a mes en base a la variación del IPC.</p>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <form @submit.prevent="calculateAdjustment">
              <div class="form-group">
                <label for="initialRent">Valor Inicial del Arriendo</label>
                <input type="number" id="initialRent" v-model.number="initialRent" class="form-control border"
                       required />
              </div>
              <div class="form-group">
                <label for="startDate">Fecha de Inicio</label>
                <input type="month" id="startDate" v-model="startDate" class="form-control border" required />
              </div>
              <div class="form-group">
                <label for="endDate">Fecha de Fin</label>
                <input type="month" id="endDate" v-model="endDate" class="form-control border" required />
              </div>
              <button type="submit" class="btn btn-primary">Calcular Reajuste</button>
            </form>

          </div>
          <div class="col-lg-2 col-md-6">

          </div>
          <div class="col-lg-6 col-md-6">
            <div v-if="monthlyAdjustments.length > 0" class="mt-3">
              <h4 class="mt-3">Arriendo Ajustado Final: {{ finalAdjustedRent.toFixed(2) }} CLP</h4>
            </div>
            <div v-if="IPCData" :class="`bg-gradient-happDark shadow-happDark`" class="border-radius-lg py-3 pe-1">
              <LineChart id="line-chart-5" :data="IPCData" :rounded-to="0" />
            </div>
            <div v-if="monthlyAdjustments.length > 0" class="mt-3">
              <h4>Reajustes Mensuales:</h4>
              <ul>
                <li v-for="(adjustment, index) in monthlyAdjustments" :key="index">
                  <strong>{{ adjustment.month }}:</strong>
                  Valor Inicial: {{ adjustment.initialPrice.toFixed(2) }} CLP,
                  IPC: {{ adjustment.ipcValue }}%,
                  Reajuste: {{ adjustment.adjustmentValue.toFixed(2) }} CLP,
                  Valor Ajustado: {{ adjustment.adjustedPrice.toFixed(2) }} CLP
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartHolderCard from '@/views/Indicadores/component/ChartHolderCard.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import { getIPCuntil } from '@/servicios/indicadores.js'

export default {
  name: 'Calculadora',
  components: { LineChart, ChartHolderCard },
  data() {
    return {
      IPCData: null,
      initialRent: 0,
      startDate: '',
      endDate: '',
      monthlyAdjustments: [], // Almacena los ajustes mensuales
      finalAdjustedRent: null
    }
  },
  methods: {
    async calculateAdjustment() {
      // Convertir fechas a formato de mes y año
      const [startYear, startMonth] = this.startDate.split('-').map(Number)
      const [endYear, endMonth] = this.endDate.split('-').map(Number)

      // Validar fechas
      if (endYear < startYear || (endYear === startYear && endMonth <= startMonth)) {
        alert('La fecha de fin debe ser posterior a la fecha de inicio.')
        return
      }

      // Obtener IPC desde la fecha de inicio
      const monthsToFetch = (endYear - startYear) * 12 + (endMonth - startMonth) + 1
      const startDate = new Date(startYear, startMonth - 1)
      const ipcResponse = await getIPCuntil(startDate)
      this.IPCData = ipcResponse.data

      // Inicializar variables para cálculos
      let currentRent = this.initialRent
      let monthlyAdjustments = []

      let currentYear = startYear
      let currentMonth = startMonth

      // Función para formatear fecha como YYYY-MM
      const formatDate = (year, month) => `${year}-${month.toString().padStart(2, '0')}`

      // Iterar sobre cada mes en el rango de fechas
      while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
        const formattedDate = formatDate(currentYear, currentMonth)
        const ipcRecord = this.IPCData.find(record => record.date.startsWith(formattedDate))

        let adjustmentValue = 0
        let ipcValue = 0
        if (ipcRecord) {
          ipcValue = ipcRecord.valor
          adjustmentValue = currentRent * ipcValue / 100
          currentRent += adjustmentValue
        }

        monthlyAdjustments.push({
          month: formattedDate,
          initialPrice: currentRent - adjustmentValue,
          ipcValue,
          adjustmentValue,
          adjustedPrice: currentRent
        })

        // Moverse al siguiente mes
        if (currentMonth === 12) {
          currentMonth = 1
          currentYear += 1
        } else {
          currentMonth += 1
        }
      }

      this.monthlyAdjustments = monthlyAdjustments
      this.finalAdjustedRent = currentRent
    }
  }
}
</script>
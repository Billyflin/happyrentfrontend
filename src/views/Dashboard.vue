<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <!-- Propiedades arrendadas o no -->
      <div v-if="propiedadesArrendadasChart.labels.length" class="col-12 col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-header text-center">
            <h4 class="mb-0">Propiedades Arrendadas</h4>
          </div>
          <div class="card-body p-3 mb-4">
            <div class="row">
                <pie-chart :id="'chart-arrendadas'" :chart="propiedadesArrendadasChart" is-boolean-chart />

                <h6 class="mt-4 text-sm">Propiedades Arrendadas vs No Arrendadas</h6>
                <p class="text-sm">Comparación de propiedades arrendadas y no arrendadas.
                </p>
              </div>
          </div>
        </div>
      </div>
      <!-- Contratos activos -->
      <div v-if="contratosActivosChart.labels.length" class="col-12 col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-header text-center">
            <h4 class="mb-0">Contratos Activos</h4>
          </div>
          <div class="card-body p-3 mb-4">
                <pie-chart :id="'chart-contratos-activos'" :chart="contratosActivosChart" is-boolean-chart />

                <h6 class="mt-4 text-sm">Estado de los Contratos</h6>
                <p class="text-sm">Comparación entre contratos activos e inactivos.
                  Esto indica los contratos que estan vigentes y los que ya han finalizado.
                </p>
          </div>
        </div>
      </div>
      <!-- Propiedades por región -->
      <div v-if="propiedadesPorRegionChart.labels.length" class="col-12 col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-header text-center">
            <h4 class="mb-0">Propiedades por Región</h4>
          </div>
          <div class="card-body p-3">
            <pie-chart :id="'chart-region'" :chart="propiedadesPorRegionChart" />
            <h6 class="mt-4 text-sm">Propiedades por Región</h6>
            <p class="text-sm">Información sobre la distribución de propiedades por región.</p>
          </div>
        </div>
      </div>

      <!-- Renta por región (gráfico de barras) -->
      <div v-if="rentaPorRegionChart.xAxislDatas.length" class="col-12 mb-4">
        <div class="card shadow-sm">
          <div class="card-header text-center">
            <h4 class="mb-0">Renta por Región</h4>
          </div>
          <div class="card-body">
            <bar-chart-dashboard :id="'chart-renta-region'" :chart="rentaPorRegionChart"/>
            <h6>Renta por Región</h6>
            <p>Renta generada por propiedades en diferentes regiones.</p>
          </div>
        </div>
      </div>

      <!-- Propiedades por tipo de propietario -->
      <div v-if="propiedadesPorTipoPropietarioChart.labels.length" class="col-12 col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-header text-center">
            <h4 class="mb-0">Propiedades por Tipo de Propietario</h4>
          </div>
          <div class="card-body p-3">
            <pie-chart :id="'chart-propietario'" :chart="propiedadesPorTipoPropietarioChart" />
            <h6 class="mt-4">Propiedades por Tipo de Propietario</h6>
            <p>Distribución de propiedades según el tipo de propietario.</p>
          </div>
        </div>
      </div>


      <!-- Tipos de propiedad -->
      <div v-if="tiposDePropiedadChart.labels.length" class="col-12 col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-header text-center">
            <h4 class="mb-0">Tipos de Propiedad</h4>
          </div>
          <div class="card-body p-3 mb-4">
            <pie-chart :id="'chart-tipos'" :chart="tiposDePropiedadChart" />
            <h6 class="mt-4">Distribución por Tipo de Propiedad</h6>
            <p>Tipos de propiedades y su distribución.</p>
          </div>
        </div>
      </div>

      <!-- Contratos por mes (gráfico de barras) -->
      <div v-if="contratosPorMesChart.xAxislDatas.length" class="col-12 col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-header text-center">
            <h4 class="mb-0">Contratos por Mes</h4>
          </div>
          <div class="card-body p-3 mb-4">
            <bar-chart-dashboard :id="'chart-contratos-mes'" :chart="contratosPorMesChart" height="200"/>
            <h6 class="mt-4">Contratos por Mes</h6>
            <p>Distribución mensual de los contratos.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="propiedadesData.length>=0 && contratosData>=0 ">
      <div class="alert alert-primary text-light text-center">No hay datos para mostrar</div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import PieChart from '@/examples/Charts/PieChart.vue'
import BarChart from '@/examples/Charts/BarChart.vue'
import LineChart from '@/examples/Charts/LineChart.vue'
import BarChartDashboard from '@/examples/Charts/BarChartDashboard.vue'
import { useAppStore } from '@/store/index.js'

export default {
  name: 'Dashboard',
  components: {
    BarChartDashboard,
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      propiedadesData: [],
      contratosData: []
    }
  },
  computed: {
    propiedadesPorRegionChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        acc[item.direccionRegion] = (acc[item.direccionRegion] || 0) + 1
        return acc
      }, {})

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Propiedades por Región',
          data: Object.values(data)
        }
      }
    },
    propiedadesPorTipoPropietarioChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        acc[item.propietarioTipo] = (acc[item.propietarioTipo] || 0) + 1
        return acc
      }, {})

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Propiedades por Tipo de Propietario',
          data: Object.values(data)
        }
      }
    },
    propiedadesArrendadasChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        const key = item.propiedadArrendado ? 'Arrendado' : 'No Arrendado'
        acc[key] = (acc[key] || 0) + 1
        return acc
      }, {})

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Propiedades Arrendadas',
          data: Object.values(data)
        }
      }
    },
    tiposDePropiedadChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        acc[item.propiedadTipo] = (acc[item.propiedadTipo] || 0) + 1
        return acc
      }, {})

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Tipos de Propiedad',
          data: Object.values(data)
        }
      }
    },
    contratosActivosChart() {
      const data = this.contratosData.reduce((acc, item) => {
        const key = item.activo ? 'Activo' : 'Inactivo'
        acc[key] = (acc[key] || 0) + 1
        return acc
      }, {})

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Contratos Activos',
          data: Object.values(data)
        }
      }
    },
    contratosPorMesChart() {
      const data = this.contratosData.reduce((acc, item) => {
        const month = new Date(item.fechaInicio).toLocaleString('default', { month: 'short' })
        acc[month] = (acc[month] || 0) + 1
        return acc
      }, {})

      return {
        xAxislDatas: Object.keys(data),
        datasets: {
          label: 'Contratos por Mes',
          data: Object.values(data)
        }
      }
    },
    rentaPorRegionChart() {
      const data = this.contratosData.reduce((acc, item) => {
        acc[item.direccionRegion] = (acc[item.direccionRegion] || 0) + item.renta
        return acc
      }, {})

      return {
        xAxislDatas: Object.keys(data),
        datasets: {
          label: 'Renta por Región',
          data: Object.values(data)
        }
      }
    }
  },
  methods: {
    async fetchPropiedadesData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/resumenPropiedades`)
        this.propiedadesData = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async fetchContratosData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/contrato/contratos`)
        this.contratosData = response.data
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.fetchPropiedadesData()
    this.fetchContratosData()
  },
  setup() {
    const store = useAppStore()
    return { store }
  }
}

</script>


<!--import PieChart from '@/examples/Charts/PieChart.vue';-->
<!--import BarChart from '@/examples/Charts/BarChart.vue';-->
<!--import LineChart from '@/examples/Charts/LineChart.vue';-->
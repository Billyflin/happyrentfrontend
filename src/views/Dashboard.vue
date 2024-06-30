<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Renta por región (gráfico de barras) -->
      <div class="col-12 mb-4" v-if="rentaPorRegionChart.xAxislDatas.length">
        <div class="card h-100 shadow-sm">
          <div class="card-header p-3 text-white d-flex justify-content-between">
            <h6 class="mb-0">Renta por Región</h6>
          </div>
          <div class="card-body p-3 mt-4 mb-4">
            <bar-chart-dashboard :id="'chart-renta-region'" :chart="rentaPorRegionChart" />
            <h6 class="mt-4">Renta por Región</h6>
            <p>Renta generada por propiedades en diferentes regiones.</p>
          </div>
        </div>
      </div>

      <!-- Propiedades por región -->
      <div class="col-12 col-md-6 mb-4" v-if="propiedadesPorRegionChart.labels.length">
        <div class="card h-100 shadow-sm">
          <div class="card-header p-3 text-white d-flex justify-content-between">
            <h6 class="mb-0">Propiedades por Región</h6>
          </div>
          <div class="card-body p-3 mt-4 mb-4">
            <pie-chart :id="'chart-region'" :chart="propiedadesPorRegionChart" />
            <h6 class="mt-4">Propiedades por Región</h6>
            <p>Información sobre la distribución de propiedades por región.</p>
          </div>
        </div>
      </div>
      <!-- Propiedades por tipo de propietario -->
      <div class="col-12 col-md-6 mb-4" v-if="propiedadesPorTipoPropietarioChart.labels.length">
        <div class="card h-100 shadow-sm">
          <div class="card-header p-3 text-white d-flex justify-content-between">
            <h6 class="mb-0">Propiedades por Tipo de Propietario</h6>
          </div>
          <div class="card-body p-3 mt-4 mb-4">
            <pie-chart :id="'chart-propietario'" :chart="propiedadesPorTipoPropietarioChart" />
            <h6 class="mt-4">Propiedades por Tipo de Propietario</h6>
            <p>Distribución de propiedades según el tipo de propietario.</p>
          </div>
        </div>
      </div>
      <!-- Propiedades arrendadas o no -->
      <div class="col-12 col-md-6 mb-4" v-if="propiedadesArrendadasChart.labels.length">
        <div class="card h-100 shadow-sm">
          <div class="card-header p-3 text-white d-flex justify-content-between">
            <h6 class="mb-0">Propiedades Arrendadas</h6>
          </div>
          <div class="card-body p-3 mt-4 mb-4">
            <pie-chart :id="'chart-arrendadas'" :chart="propiedadesArrendadasChart" />
            <h6 class="mt-4">Propiedades Arrendadas vs No Arrendadas</h6>
            <p>Comparación de propiedades arrendadas y no arrendadas.</p>
          </div>
        </div>
      </div>
      <!-- Tipos de propiedad -->
      <div class="col-12 col-md-6 mb-4" v-if="tiposDePropiedadChart.labels.length">
        <div class="card h-100 shadow-sm">
          <div class="card-header p-3 text-white d-flex justify-content-between">
            <h6 class="mb-0">Tipos de Propiedad</h6>
          </div>
          <div class="card-body p-3 mt-4 mb-4">
            <pie-chart :id="'chart-tipos'" :chart="tiposDePropiedadChart" />
            <h6 class="mt-4">Distribución por Tipo de Propiedad</h6>
            <p>Tipos de propiedades y su distribución.</p>
          </div>
        </div>
      </div>
      <!-- Contratos activos -->
      <div class="col-12 col-md-6 mb-4" v-if="contratosActivosChart.labels.length">
        <div class="card h-100 shadow-sm">
          <div class="card-header p-3 text-white d-flex justify-content-between">
            <h6 class="mb-0">Contratos Activos</h6>
          </div>
          <div class="card-body p-3 mt-4 mb-4">
            <pie-chart :id="'chart-contratos-activos'" :chart="contratosActivosChart" />
            <h6 class="mt-4">Estado de los Contratos</h6>
            <p>Comparación entre contratos activos e inactivos.</p>
          </div>
        </div>
      </div>
      <!-- Comparación de tipos de propiedades (gráfico de radar) -->
      <div class="col-12 col-md-6 mb-4" v-if="radarChartData.indicator.length">
        <div class="card h-100 shadow-sm">
          <div class="card-header p-3 text-white d-flex justify-content-between">
            <h6 class="mb-0">Comparación de Tipos de Propiedades</h6>
          </div>
          <div class="card-body p-3 mt-4 mb-4">
            <radar-chart :id="'chart-radar'" :data="radarChartData" />
            <h6 class="mt-4">Comparación de Tipos de Propiedades</h6>
            <p>Análisis comparativo de diferentes tipos de propiedades.</p>
          </div>
        </div>
      </div>
      <!-- Contratos por mes (gráfico de barras) -->
      <div class="col-12 col-md-6 mb-4" v-if="contratosPorMesChart.xAxislDatas.length">
        <div class="card h-100 shadow-sm">
          <div class="card-header p-3 text-white d-flex justify-content-between">
            <h6 class="mb-0">Contratos por Mes</h6>
          </div>
          <div class="card-body p-3 mt-4 mb-4">
            <bar-chart-dashboard :id="'chart-contratos-mes'" :chart="contratosPorMesChart" />
            <h6 class="mt-4">Contratos por Mes</h6>
            <p>Distribución mensual de los contratos.</p>
          </div>
        </div>
      </div>
    </div>
    propiedadesData: {{ propiedadesData }}, contratosData: {{ contratosData }}
  </div>
</template>



<script>
import axios from 'axios';
import PieChart from '@/examples/Charts/PieChart.vue';
import RadarChart from '@/examples/Charts/RadarChart.vue'
import BarChart from '@/examples/Charts/BarChart.vue'
import LineChart from '@/examples/Charts/LineChart.vue'
import BarChartDashboard from '@/examples/Charts/BarChartDashboard.vue'

export default {
  name: 'Dashboard',
  components: {
    BarChartDashboard,
    LineChart,
    BarChart,
    RadarChart,
    PieChart
  },
  data() {
    return {
      propiedadesData: [],
      contratosData: [],
    };
  },
  computed: {
    propiedadesPorRegionChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        acc[item.direccionRegion] = (acc[item.direccionRegion] || 0) + 1;
        return acc;
      }, {});

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Propiedades por Región',
          data: Object.values(data)
        }
      };
    },
    propiedadesPorTipoPropietarioChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        acc[item.propietarioTipo] = (acc[item.propietarioTipo] || 0) + 1;
        return acc;
      }, {});

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Propiedades por Tipo de Propietario',
          data: Object.values(data)
        }
      };
    },
    propiedadesArrendadasChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        const key = item.propiedadArrendado ? 'Arrendado' : 'No Arrendado';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Propiedades Arrendadas',
          data: Object.values(data)
        }
      };
    },
    tiposDePropiedadChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        acc[item.propiedadTipo] = (acc[item.propiedadTipo] || 0) + 1;
        return acc;
      }, {});

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Tipos de Propiedad',
          data: Object.values(data)
        }
      };
    },
    contratosActivosChart() {
      const data = this.contratosData.reduce((acc, item) => {
        const key = item.activo ? 'Activo' : 'Inactivo';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Contratos Activos',
          data: Object.values(data)
        }
      };
    },
    contratosPorMesChart() {
      const data = this.contratosData.reduce((acc, item) => {
        const month = new Date(item.fechaInicio).toLocaleString('default', { month: 'short' });
        acc[month] = (acc[month] || 0) + 1;
        return acc;
      }, {});

      return {
        xAxislDatas: Object.keys(data),
        datasets: {
          label: 'Contratos por Mes',
          data: Object.values(data)
        }
      };
    },
  rentaPorRegionChart() {
    const data = this.contratosData.reduce((acc, item) => {
      acc[item.direccionRegion] = (acc[item.direccionRegion] || 0) + item.renta;
      return acc;
    }, {});

    return {
      xAxislDatas: Object.keys(data),
      datasets: {
        label: 'Renta por Región',
        data: Object.values(data)
      }
    };
  },
    radarChartData() {
      const data = this.propiedadesData.reduce((acc, item) => {
        if (!acc[item.propiedadTipo]) {
          acc[item.propiedadTipo] = { max: 0, count: 0 };
        }
        acc[item.propiedadTipo].count++;
        acc[item.propiedadTipo].max = Math.max(acc[item.propiedadTipo].max, acc[item.propiedadTipo].count);
        return acc;
      }, {});

      const indicator = Object.keys(data).map(key => ({ name: key, max: data[key].max }));
      const series = [{ value: Object.values(data).map(item => item.count), name: 'Propiedades' }];

      return {
        name: 'Tipos de Propiedades',
        indicator,
        series
      };
    }
  },
  methods: {
    async fetchPropiedadesData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/resumenPropiedades`);
        this.propiedadesData = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchContratosData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/contrato/contratos`);
        this.contratosData = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchPropiedadesData();
    this.fetchContratosData();
  }
};

</script>


<!--import PieChart from '@/examples/Charts/PieChart.vue';-->
<!--import BarChart from '@/examples/Charts/BarChart.vue';-->
<!--import LineChart from '@/examples/Charts/LineChart.vue';-->
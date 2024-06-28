<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Propiedades por región -->
      <div class="col-12 col-md-6 mb-4" v-if="propiedadesPorRegionChart.labels.length">
        <div class="card h-100 shadow-sm">
          <div class="p-3 pb-0 card-header text-white">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">Propiedades por Región</h6>
            </div>
          </div>
          <div class="p-3 pb-0 mt-4 mb-4 card-body">
            <pie-chart :id="'chart-region'" :chart="propiedadesPorRegionChart" />
            <h6 class="mt-4">Propiedades por Región</h6>
            <p>
              Como no se que poner, aca va un texto de relleno
            </p>
          </div>
        </div>
      </div>
      <!-- Propiedades por tipo de propietario -->
      <div class="col-12 col-md-6 mb-4" v-if="propiedadesPorTipoPropietarioChart.labels.length">
        <div class="card h-100 shadow-sm">
          <div class="p-3 pb-0 card-header text-white">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">Propiedades por Tipo de Propietario</h6>
            </div>
          </div>
          <div class="p-3 pb-0 mt-4 mb-4 card-body">
            <pie-chart :id="'chart-propietario'" :chart="propiedadesPorTipoPropietarioChart" />
            <h6 class="mt-4">Propiedades por Tipo de Propietario</h6>
            <p>
              aca puede ir texto de relleno
            </p>
            </div>
        </div>
      </div>
      <!-- Propiedades arrendadas o no -->
      <div class="col-12 col-md-6 mb-4" v-if="propiedadesArrendadasChart.labels.length">
        <div class="card h-100 shadow-sm">
          <div class="p-3 pb-0 card-header text-white">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">Propiedades Arrendadas</h6>
            </div>
          </div>
          <div class="p-3 pb-0 mt-4 mb-4 card-body">
            <pie-chart :id="'chart-arrendadas'" :chart="propiedadesArrendadasChart" />
          </div>
        </div>
      </div>
  <!-- Tipos de propiedad -->
  <div class="col-12 col-md-6 mb-4" v-if="tiposDePropiedadChart.labels.length">
    <div class="card h-100 shadow-sm">
      <div class="p-3 pb-0 card-header text-white">
        <div class="d-flex justify-content-between">
          <h6 class="mb-0">Tipos de Propiedad</h6>
        </div>
      </div>
      <div class="p-3 pb-0 mt-4 mb-4 card-body">
        <pie-chart :id="'chart-tipos'" :chart="tiposDePropiedadChart" />
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import PieChart from '@/examples/Charts/PieChart.vue';

export default {
  name: 'ChartsView',
  components: {
    PieChart
  },
  data() {
    return {
      propiedadesData: [],
    };
  },
  computed: {
    propiedadesPorRegionChart() {
      const data = this.propiedadesData.reduce((acc, item) => {
        acc[item.direccion_region] = (acc[item.direccion_region] || 0) + 1;
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
        acc[item.propietario_tipo] = (acc[item.propietario_tipo] || 0) + 1;
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
        const key = item.propiedad_arrendado ? 'Arrendado' : 'No Arrendado';
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
        acc[item.propiedad_tipo] = (acc[item.propiedad_tipo] || 0) + 1;
        return acc;
      }, {});

      return {
        labels: Object.keys(data),
        datasets: {
          label: 'Tipos de Propiedad',
          data: Object.values(data)
        }
      };
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/resumenPropiedades`);
        this.propiedadesData = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>


<!--import PieChart from '@/examples/Charts/PieChart.vue';-->
<!--import BarChart from '@/examples/Charts/BarChart.vue';-->
<!--import LineChart from '@/examples/Charts/LineChart.vue';-->
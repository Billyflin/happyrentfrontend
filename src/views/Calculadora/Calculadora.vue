<template>
  <div class="container-fluid mt-5">
    <div class="card shadow-sm">
      <div class="card-header pb-0">
        <h2 class="mb-0">Calculadora de Reajuste de Arriendo</h2>
        <p class="mb-3">Calcula el reajuste de un arriendo en base a la variación del IPC.</p>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <form @submit.prevent="calculateAdjustment">
              <h4 class="mb-3">Datos del Reajuste</h4>
              <div class="form-group mb-3">
                <label for="initialValue">Valor Inicial del Arriendo</label>
                <input type="number" class="form-control border" id="initialValue" v-model.number="initialValue" required>
              </div>
              <div class="form-group mb-3">
                <label for="startDate">Fecha de Inicio</label>
                <input type="date" class="form-control border" id="startDate" v-model="startDate" required>
              </div>
              <div class="form-group mb-3">
                <label for="endDate">Fecha de Fin</label>
                <input type="date" class="form-control border" id="endDate" v-model="endDate" required>
              </div>
              <button type="submit" class="btn btn-primary w-100">Calcular Reajuste</button>
            </form>
          </div>
          <div class="col-md-6">
            <div v-if="adjustmentData.length > 0" class="result-section">
              <h4 class="mb-3">Resultado del Reajuste</h4>
              <div v-for="(data, index) in adjustmentData" :key="index" class="mb-3">
                <p><strong>Variación IPC:</strong> {{ data.variacion_ipc }}</p>
                <p><strong>Cantidad de meses:</strong> {{ data.cantidad_meses }}</p>
                <p><strong>Periodo de cálculo:</strong> {{ data.periodo_de_calculo }}</p>
                <p><strong>Valor ajustado del arriendo:</strong> {{ data.valorajustado }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      initialValue: 300000,
      startDate: '2024-06-29',
      endDate: '2024-07-29',
      adjustmentData: []
    };
  },
  methods: {
    async calculateAdjustment() {
      try {
        const startMonth = new Date(this.startDate).getMonth();
        const startYear = new Date(this.startDate).getFullYear();
        const endMonth = new Date(this.endDate).getMonth();
        const endYear = new Date(this.endDate).getFullYear();
        const url = `https://api-calculadora.ine.cl/ServiciosCalculadoraVariacion?mesInicio=${startMonth}&AnioInicio=${startYear}&mesTermino=${endMonth}&AnioTermino=${endYear}&valor_a_ajustar=${this.initialValue}`;
        const response = await axios.get(url);
        this.adjustmentData = response.data;
      } catch (error) {
        console.error('Error fetching adjusted rent:', error);
      }
    }
  }
};
</script>
<script setup>

import MaterialProgress from '@/components/MaterialProgress.vue'
import MaterialInput from '@/components/MaterialInput.vue'
</script>

<template>
  <div id="Reajuste" class="card mt-5">
    <div class="card-header">
      <h5>Configuración Pagos y Reajustes</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4">
          <material-input
            id="valorArriendo"
            type="number"
            variant="static"
            label="Valor Arriendo"
            placeholder="Valor Arriendo"
          />
        </div>
        <div class="col-4">
          <material-input
            id="fechaInicio"
            type="date"
            variant="static"
            label="Fecha Inicio"
            placeholder="Fecha Inicio"
          />
        </div>
        <div class="col-4">
          <material-input
            id="fechaTermino"
            type="date"
            variant="static"
            label="Fecha Termino"
            placeholder="Fecha Termino"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <material-input
            id="reajuste"
            type="number"
            variant="static"
            label="Reajuste"
            placeholder="Reajuste"
            v-model="reajusteValue"
            @input="updateProgressBar"
          />
        </div>
        <div class="col-4">
          <material-progress
            color="success"
            variant="gradient"
            :model-value="progressValue"
          />
        </div>
      </div>
      <div class="row">

        <div class="col-sm-4 col-3">
          <label class="form-label mt-4 ms-0">Meses de duración del contrato</label>
          <select
            id="choices-day"
            class="form-control"
            name="choices-day"
          ></select>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
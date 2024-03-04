<script setup>

import MaterialInput from '@/components/MaterialInput.vue'
const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0;
  }
}
</script>

<template>
  <div id="Multa" class="card mt-5">
    <div class="card-header">
      <h5>Multa</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4">
          <material-input
            id="Motivo"
            type="String"
            variant="static"
            label="Motivo Multa"
            placeholder="motivo Multa"
          />
        </div>
        <div class="col-4">
          <material-input
            id="valorMulta"
            type="number"
            variant="static"
            label="Valor Multa"
            placeholder="Valor Multa"
            @input="validateInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
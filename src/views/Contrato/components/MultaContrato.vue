<script setup>

import MaterialInput from '@/components/MaterialInput.vue'

const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0
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
            label="Motivo Multa"
            placeholder="motivo Multa"
            type="String"
            variant="static"
          />
        </div>
        <div class="col-4">
          <material-input
            id="valorMulta"
            label="Valor Multa"
            placeholder="Valor Multa"
            type="number"
            variant="static"
            @input="validateInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
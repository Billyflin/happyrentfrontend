<script setup>

import MaterialInput from '@/components/MaterialInput.vue'
</script>

<template>
  <div id="TerminoAnticipado" class="card mt-5">
    <div class="card-header">
      <h5>Termino Anticipado</h5>
    </div>
     <div class="card-body pt-0">
      <div class="row">
        <div class="col-4">
          <material-input
            id="CausalTerminoAnticipado"
            type="String"
            variant="static"
            label="Causal"
            placeholder="Causal Termino Anticipado"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
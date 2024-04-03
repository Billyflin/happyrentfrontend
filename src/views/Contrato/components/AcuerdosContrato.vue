<script setup>
import MaterialCheckbox from '@/components/MaterialCheckbox.vue'

const prueba = false
</script>

<template>
  <div class="card mt-5">
    <div class="card-header">
      <h5>Acuerdos del Contrato</h5>
      <p class="text-muted">Acá puedes agregar los acuerdos del contrato</p>
    </div>
    <div class="card-body">
      <material-checkbox v-model="prueba" name="prueba"> coito?</material-checkbox>

    </div>
  </div>
</template>

<style scoped>

</style>
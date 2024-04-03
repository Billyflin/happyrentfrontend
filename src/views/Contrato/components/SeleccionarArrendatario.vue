<script setup>

import MaterialChoices from '@/components/MaterialChoices.vue'
</script>

<template>
  <div id="SeleccionArrendatario" class="card mt-5">
    <div class="card-header">
      <h5>Seleccionar Arrendatario</h5>
      <p> Acá puedes seleccionar de los arrendatarios previamente registrados, en caso de no tener ninguno debes ir a la
        pestaña
        <router-link class="text-bold" to="/Personas">Personas</router-link>
        para completar el registro
      </p>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4">
          <MaterialChoices id="arrendatario"
                           label="Arrendatario"
                           :options="[
                             {value: 'Mensual', label: 'Mensual',selected: true},
                             {value: 'Semestral', label: 'Semestral'},
                             {value: 'Anual', label: 'Anual'},
                             {value: 'Trimestral', label: 'Trimestral'}]"
                           name="arrendatario"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
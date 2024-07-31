<template>
  <div id="app" class="container">
    <h5 class="mb-3">Detalles de Propiedad</h5>
    <PropiedadDetails />
  </div>
</template>

<script>
import PropiedadDetails from './components/PropiedadDetails.vue'

export default {
  name: 'App',
  components: {
    PropiedadDetails
  }
}
</script>

<style>
.container {
  margin-top: 20px;
}
</style>

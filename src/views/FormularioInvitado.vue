<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const uuid = ref(route.params.uuid)

console.log(uuid.value) // Imprime el valor de uuid en la consola
</script>

<template>
<div>
  <h1>Formulario de invitado</h1>
  <p>Este es el formulario de invitado</p>
  <p>El valor de uuid es: {{ this.uuid }}</p>
</div>
</template>

<style scoped>

</style>
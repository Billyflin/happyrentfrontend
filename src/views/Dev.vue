<script setup>
import MaterialChoices from '@/components/MaterialChoices.vue'
import { ref } from 'vue'

const eleccion = ref(null)
let options = ref([])
let disabled = ref(false)
const changeOptions = () => {
  options.value = [
    { value: 1, label: 'Chile',selected: true}
  ]
}

</script>

<template>
  <button @click="changeOptions">cambiar</button>
  <button @click="disabled = !disabled">disabled</button>
  <button @click="console.log(eleccion)">click</button>
  <MaterialChoices
    :options="options"
    id="asdsad"
    name="asdasd"
    @change="console.log(eleccion)"
    v-model="eleccion"
    :isMultiple="false"
    :disabled="disabled"
    label="Hola"

  ></MaterialChoices>
</template>

<style scoped>
</style>
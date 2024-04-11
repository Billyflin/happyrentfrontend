<template>
  <MaterialChoices id="uwu" name="efda" v-model:value="selectedValue" v-model:text="selectedText" :options="options" />

  <p>Value: {{ selectedValue }}</p>
  <p>Text: {{ selectedText }}</p>
</template>

<script setup>
import MaterialChoices from './components/Chicesasd.vue'
import { ref } from 'vue'

const options = [
  { value: 1, label: 'Banco Estado'},
  { value: 2, label: 'Banco de Chile' },
  { value: 3, label: 'Santander', selected: true  },
  { value: 4, label: 'Vice' },
  { value: 5, label: 'Scotiabank' },
  { value: 6, label: 'Banco BCI' },
]

const selectedValue = ref(null)
const selectedText = ref(null)
</script>
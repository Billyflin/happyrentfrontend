<script setup>

import MaterialChoices from '@/components/MaterialChoices.vue'
import { ref } from 'vue'

const eleccion = ref('')
</script>

<template>
  <button @click="console.log(eleccion)">click</button>
<MaterialChoices id="asdsad" :options="[      { value: 'Corriente', text: 'Corriente' },
        { value: 'Vista', text: 'Vista' }]" name="asdasd" @change="console.log(eleccion)" v-model="eleccion"></MaterialChoices>
</template>

<style scoped>

</style>
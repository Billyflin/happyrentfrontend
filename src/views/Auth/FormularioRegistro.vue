<template>
  <child id="uwu" name="efda" v-model="selectedOption"  :options="options" />
  <div v-if="selectedOption">

    <p>Value: {{ selectedOption.value }}</p>
    <p>Text: {{ selectedOption.label}}</p>
  </div>
</template>

<script>
import Child from './components/Chicesasd.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'

export default {
  components: {
    MaterialChoices,
    Child
  },
  data() {
    return {
      options: [    ],
      selectedOption: null
    }
  }
  ,
  mounted() {
    setTimeout(() => {
      this.options = [
        { value: 1, label: 'Banco Estado', selected: true },
        { value: 2, label: 'Banco de Chile' },
        { value: 3, label: 'Santander' },
        { value: 4, label: 'Vice' },
        { value: 5, label: 'Scotiabank' },
        { value: 6, label: 'Banco BCI' },
        { value: 7, label: 'Nuevo Banco 1' },
        { value: 8, label: 'Nuevo Banco 2' }
        // Agrega aquí las nuevas opciones
      ]
    }, 3000) // Cambia las opciones después de 3 segundos
  }
}
</script>t>
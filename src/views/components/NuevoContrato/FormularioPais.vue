<template>
  <div>
    <select v-model="selectedPais" id="choices-pais" name="choices-pais" @change="handlePaisChange">
      <option v-for="pais in paises" :key="pais.id">{{ pais.nombreEsp }}</option>
    </select>
  </div>
</template>

<script>
import Choices from 'choices.js'
import axios from 'axios'

export default {
  name: 'FormularioPais',
  data() {
    return {
      selectedPais: null,
      paises: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeChoices()
    })
  },
  methods: {
    async getpais() {
      try {
        const response = await axios.get(`http://ec2-15-228-13-185.sa-east-1.compute.amazonaws.com`+':8080/pais')
        console.log('Países:', response.data)
        return response.data
      } catch (error) {
        console.error('Error al obtener los países:', error)
        return []
      }
    },
    async initializeChoices() {
      this.paises = await this.getpais()

      new Choices('#choices-pais', {
        searchEnabled: true,
        allowHTML: true,
        choices: this.paises.map((pais) => ({
          value: pais.id,
          label: pais.nombreEsp
        }))
      })
    },
    handlePaisChange() {
      // Emitir evento al padre con el ID del país seleccionado
      this.$emit('paisSeleccionado', this.selectedPais)
    }
  }
}
</script>
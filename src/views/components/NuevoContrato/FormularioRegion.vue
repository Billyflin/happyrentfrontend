<template>
  <div>
    <label  for="choices-region" class="form-label">Región</label>
    <select name="choices-region"  class="form-control" v-model="selectedRegion" id="choices-region" :disabled="!selectedPais">
      <!-- Opciones de regiones según el país seleccionado -->
      <option v-for="region in regions" :key="region">{{ region }}</option>
    </select>
  </div>
</template>

<script>
import Choices from 'choices.js';
import axios from 'axios';

export default {
  name: 'FormularioRegion',
  props: {
    selectedPais: String,
  },
  data() {
    return {
      selectedRegion: null,
      regions: [],
    };
  },
  watch: {
    selectedPais: {
      immediate: true,
      handler() {
        this.getRegions();
      },
    },
    regions: {
      immediate: false,
      handler() {
        this.initializeChoices();
      },
    },
  },
  methods: {
    async getRegions() {
      if (!this.selectedPais) {
        return [];
      }

      try {
        const response = await axios.get(`${SERVER_URL}`+`:8080/region/${this.selectedPais}`);
        console.log('Regiones:', response.data);
        // Mapear la respuesta para obtener el número y el nombre de las regiones
        this.regions = response.data.map(region => ({ numero: region.numero, nombre: region.nombre }));
      } catch (error) {
        console.error('Error al obtener las regiones:', error);
        return [];
      }
    },

    async initializeChoices() {
      // Destruir la instancia existente de Choices.js
      const existingChoices = Choices.getInstance(document.getElementById('choices-region'));
      if (existingChoices) {
        existingChoices.destroy();
      }

      // Inicializar una nueva instancia de Choices.js
      new Choices('#choices-region', {
        searchEnabled: true,
        allowHTML: true,
        choices: this.regions.map((region) => ({
          value: region.numero, // Usar el número de la región como valor
          label: region.nombre, // Usar el nombre de la región como etiqueta
        })),
      });
    },
  },
  async mounted() {
    await this.initializeChoices();
  },
};

</script>

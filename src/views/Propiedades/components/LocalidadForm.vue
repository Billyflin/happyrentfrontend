<template>
  <div class="card">
    <ChoicesComponent @selection-changed="handleSelection">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.label }}
      </option>
    </ChoicesComponent>
  </div>
</template>

<script>
import ChoicesComponent from './ChoicesComponent.vue';
import axios from 'axios';

export default {
  name: 'ParentComponent',
  components: {
    ChoicesComponent
  },
  data() {
    return {
      options: []
    };
  },
  async created() {
    const response = await axios.get('http://localhost:8080/region/38');
    this.options = response.data.map(item => ({ value: item.numero, label: item.nombre }));
  },
  methods: {
    handleSelection(value) {
      console.log('La opción seleccionada es: ', value);
    }
  }
}
</script>

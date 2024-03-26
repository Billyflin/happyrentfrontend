<template>
  <div>
    <select ref="choicesElement" v-model="selectedOption" @change="emitSelection">
      <slot></slot>
    </select>
    <div v-if="selectedOption">
      Opción seleccionada: {{ selectedOption }}
    </div>
  </div>
</template>

<script>
import Choices from 'choices.js';
import axios from 'axios';

export default {
  name: 'ChoicesComponent',
  data() {
    return {
      selectedOption: null
    };
  },
  mounted() {
    new Choices(this.$refs.choicesElement);
  },
  methods: {
    emitSelection() {
      this.$emit('selection-changed', this.selectedOption);
    }
  }
}
</script>

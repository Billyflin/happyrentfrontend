<template>
  <div>
    <select ref="choicesElement" :multiple="isMultiple">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import Choices from 'choices.js';

export default {
  name: 'ChoicesComponent',
  props: {
    isMultiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.choices = new Choices(this.$refs.choicesElement);
  },
  beforeDestroy() {
    this.choices.destroy();
  }
}
</script>

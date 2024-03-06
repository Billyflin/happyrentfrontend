// ParentComponent.vue
<template>
  <div>
    <choices-component :is-multiple="false" :options="options" @input="handleInput"></choices-component>
  </div>
</template>

<script>
import ChoicesComponent from './ChoicesComponent.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChoicesComponent
  },
  data() {
    return {
      options: [
        { value: '1', text: 'Option 1' },
        { value: '2', text: 'Option 2' },
        { value: '3', text: 'Option 3' }
      ],
      selectedValue: null
    }
  },
  methods: {
    handleInput(value) {
      this.selectedValue = value;
      console.log(this.selectedValue);
    }
  }
}
</script>

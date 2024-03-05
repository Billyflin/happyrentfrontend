<template>
  <div>
    <choices-component :is-multiple="false" :options="options"></choices-component>
  </div>
</template>

<script>
import ChoicesComponent from './HolaAer.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChoicesComponent
  },
  data() {
    return {
      options: [
        { value: 'Option 1', text: 'Option 1' },
        { value: 'Option 2', text: 'Option 2' },
        { value: 'Option 3', text: 'Option 3' }
      ]
    }
  }
}
</script>

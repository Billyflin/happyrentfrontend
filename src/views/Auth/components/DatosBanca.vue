<template>
  <div>
    <!-- other form elements -->
    <input v-model="direccion" placeholder="Enter your address">
    <button @click="emitData">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direccion: ''
    }
  },
  methods: {
    emitData() {
      this.$emit('update:direccion', this.direccion)
    }
  }
}
</script>
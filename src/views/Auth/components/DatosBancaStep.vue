<template>
  <div>
    <!-- other form elements -->
    <input v-model="direccion" placeholder="Enter your address">
    <material-choices id="sdaad"
                      v-model="selectedOption"
                      :options="opcions"
                      name="adsd"></material-choices>
    <button class="mb-5" @click="emitData">Next</button>
  </div>
</template>

<script>
import MaterialChoices from '@/components/MaterialChoices.vue'

export default {
  name: 'DatosBancaStep',
  components: { MaterialChoices },
  data() {
    return {
      direccion: '',
      selectedOption: '',
      opcions: []
    }
  },
  emits: ['update:direccion'],
  methods: {
    emitData() {
      this.$emit('update:direccion', this.direccion)
    }
  },
  watch: {
    selectedOption: function(option) {
      if (!option) return
      this.direccion = option.label
    }
  },
  mounted() {
    setTimeout(() => {
      this.opcions = [
        { label: 'nuevo', value: 2, selected: true },
        { label: 'opciones', value: 'nuevas' }
      ]
    }, 3000)

  }
}
</script>
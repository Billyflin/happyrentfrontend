<template>
  <label class="form-label" :for="id">{{ label }}</label>
  <select class="choices form-control" :id="id" v-model="selected" :name="name" @change="emitChange" :disabled="isDisabled">
  </select>
</template>

<script>
import { defineComponent } from 'vue'
import Choices from 'choices.js'

export default defineComponent({
  name: 'MaterialChoices',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
    },
    searchEnabled: {
      type: Boolean,
      default: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'], // Agrega 'change' aquí
  data() {
    return {
      selected: this.modelValue,
      choices: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.choices = new Choices(`#${this.id}`, {
        allowHTML: true,
        searchEnabled: this.searchEnabled,
        choices: this.options.map((option) => ({ value: option.value, label: option.text }))
      })
      this.choices.setChoiceByValue(this.selected)
    })
  },
  beforeUnmount() {
    if (this.choices) {
      // Destroy Choices instance when component is unmounted
      this.choices.destroy()
    }
  },
  watch: {
    options(newOptions) {
      // Update Choices options when options prop changes
      this.choices.setChoices(newOptions.map((option) => ({
        value: option.value,
        label: option.text
      })), 'value', 'label', true)
    },
    modelValue(newValue) {
      // Update Choices selection when modelValue prop changes
      this.choices.setChoiceByValue(newValue)
    },
  },
  methods: {
    emitChange() {
      this.$emit('update:modelValue', this.selected)
      this.$emit('change', this.selected) // Emite el evento 'change' aquí
    },
  },
})
</script>

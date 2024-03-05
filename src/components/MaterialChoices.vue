<template>
  <label class="form-label" :for="id">{{ label }}</label>
  <select class="choices form-control" :id="id" v-model="selected" :name="name" @change="emitChange">
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
      type: [String, Number],
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
  emits: ['update:modelValue', 'change'],
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
      this.selected = this.options.length > 0 ? this.options[0].value : null
      this.choices.setChoiceByValue(this.selected)
      this.$emit('update:modelValue', this.selected)
      if(this.isDisabled) {
        this.choices.disable()
      }
    })
  },
  beforeUnmount() {
    if (this.choices) {
      this.choices.destroy()
    }
  },
  watch: {
    isDisabled(newVal) {
      if (newVal) {
        this.choices.disable();
      } else {
        this.choices.enable();
      }
    },
    options(newOptions) {
      this.choices.clearStore()
      this.choices.setChoices(newOptions.map((option) => ({
        value: option.value,
        label: option.text
      })), 'value', 'label', true)
      this.selected = newOptions.length > 0 ? newOptions[0].value : null
      this.choices.setChoiceByValue(this.selected)
      this.$emit('update:modelValue', this.selected)
    },
    modelValue(newValue) {
      this.selected = newValue
      this.choices.setChoiceByValue(newValue)
    },
  },
  methods: {
    emitChange() {
      this.$emit('update:modelValue', this.selected)
      this.$emit('change', this.selected)
    },
  },
})
</script>

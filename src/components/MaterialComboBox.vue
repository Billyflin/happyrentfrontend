<!-- MaterialComboBox.vue -->

<template>
  <div class="form-group">
    <label :class="variant === 'static' ? '' : 'form-label'">{{ label }}</label>
    <select v-model="selected" :id="selectId" :name="selectName" :class="selectClass" @change="updateSelected">
      <option v-for="option in options" :key="getOptionKey(option)" :value="getOptionValue(option)">
        {{ getOptionLabel(option) }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    selectId: {
      type: String,
      required: false,
      default: 'custom-select',
    },
    selectName: {
      type: String,
      required: false,
      default: 'custom-select',
    },
    selectClass: {
      type: String,
      required: false,
      default: 'form-select form-select-border-width input-group-text form-select-m',
    },
    codeKey: {
      type: String,
      required: true,
    },
    valueKey: {
      type: String,
      required: true,
    },
    optionsData: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'outline',
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
  },
  data() {
    return {
      options: [],
      selected: this.modelValue,
    }
  },
  created() {
    this.extraerData()
  },
  watch: {
    modelValue(newValue) {
      this.selected = newValue
    },
  },
  methods: {
    extraerData() {
      this.options = this.optionsData
      if (this.options != null && this.options.length > 0) {
        this.selected = this.getOptionValue(this.options[0])
        this.emitSelectedChange() // Emite el evento "input" cuando se selecciona el primer elemento por defecto
      }
    },
    getOptionKey(option) {
      return option[this.codeKey]
    },
    getOptionValue(option) {
      return option[this.codeKey]
    },
    getOptionLabel(option) {
      return option[this.valueKey]
    },
    updateSelected() {
      this.emitSelectedChange()
    },
    emitInput() {
      this.$emit('selected', this.selected)
    },
    emitSelectedChange() {
      this.$emit('selectedChange', this.selected)
    },
  },
}
</script>
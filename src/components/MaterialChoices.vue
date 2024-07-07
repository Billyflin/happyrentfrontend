<template>
  <div :class="`input-group-${variant} input-group`" class="form-group">
    <label v-if="showLabel" :for="id" :class="variant === 'static' ? '' : 'form-label'">{{ label }}</label>
    <select :id="id"
            ref="choicesElement"
            v-model="selectedValue"
            :multiple="isMultiple"
            :name="name"
            class="form-control"
    />
  </div>
</template>

<script>
import Choices from 'choices.js'

export default {
  name: 'MaterialChoices',
  emits: ['update:modelValue', 'update:value-choice', 'update:text-choice'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    variant: {
      type: String,
      default: 'outline'
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [String, Number, Object, null]
    },
    duplicateItemsAllowed: {
      type: Boolean,
      default: false
    },
    removeItemButton: {
      type: Boolean,
      default: false
    },
    serachEnabled: {
      type: Boolean,
      default: true
    },
    textChoice: {
      type: [String, []],
      default: ''
    },
    valueChoice: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      selectedValue: this.modelValue,
      selectedtextChoice: this.textChoice,
      selectedvalueChoice: this.valueChoice
    }
  },
  mounted() {
    this.choices = new Choices(this.$refs.choicesElement, {
      allowHTML: false,
      removeItemButton: this.removeItemButton,
      searchEnabled: this.serachEnabled,
      duplicateItemsAllowed: this.duplicateItemsAllowed,
      noChoicesText: 'No hay opciones para elegir'
    })
    if (this.options.length > 0) {
      this.choices.setChoices(this.options, 'value', 'label', true)
      if (!this.choices.getValue()) {
        this.choices.setChoiceByValue(this.options[0].value)
      }
    }
    this.disabled ? this.choices.disable() : this.choices.enable()
    this.choices.passedElement.element.addEventListener('change', this.emitValue, false)
    this.emitValue()
  },
  watch: {
    disabled(value) {
      if (value) {
        this.choices.disable()
      } else {
        this.choices.enable()
      }
    },
    options() {
      this.choices.clearStore()
      this.choices.setChoices(this.options, 'value', 'label', true)
      if (!this.choices.getValue()) {
        this.choices.setChoiceByValue(this.options[0].value)
      }
      this.emitValue()
    },
    modelValue(newVal) {
      // Comprueba si el nuevo valor es diferente del valor actualmente seleccionado
      if (JSON.stringify(newVal) !== JSON.stringify(this.choices.getValue())) {
        // Si es diferente, actualiza la selección
        this.choices.setChoiceByValue(newVal)
      }
    },
    selectedValue(newVal) {
      this.$emit('update:modelValue', newVal)
    },
    selectedvalueChoice(newVal) {
      this.$emit('update:value-choice', newVal)
    },
    selectedtextChoice(newVal) {
      this.$emit('update:text-choice', newVal)
    }
  },
  beforeUnmount() {
    // this.choices.passedElement.element.removeEventListener('change', this.emitValue, false)
    this.choices.destroy()
  },
  methods: {
    emitValue() {
      const selectedValue = this.choices.getValue()
      if (JSON.stringify(selectedValue) !== JSON.stringify(this.modelValue)) {
        if (selectedValue) {
          this.selectedtextChoice = selectedValue.label
          this.selectedvalueChoice = selectedValue.value
        }
        this.selectedValue = selectedValue
      }
    }
  }
}
</script>
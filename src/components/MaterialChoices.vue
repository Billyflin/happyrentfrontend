<template>
  <div :class="`input-group-${variant}`" class="form-group">
    <label :for="id" class="form-label">{{ label }}</label>
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
  emits: ['update:modelValue', 'update:value', 'update:text'],
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
    }
  },
  data() {
    return {
      selectedValue: this.modelValue
    }
  },
  mounted() {
    this.choices = new Choices(this.$refs.choicesElement, {
      allowHTML: false,
      removeItemButton: this.removeItemButton,
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
    }
  },
  beforeUnmount() {
    this.choices.passedElement.element.removeEventListener('change', this.emitValue, false)
    this.choices.destroy()
  },
  methods: {
    emitValue() {
      const selectedValue = this.choices.getValue()
      if (JSON.stringify(selectedValue) !== JSON.stringify(this.modelValue)) {
        this.selectedValue = selectedValue
      }
    }
  }
}
</script>
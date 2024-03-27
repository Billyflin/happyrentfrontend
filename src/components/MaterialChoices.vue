<!--ESTE ES EL REAL-->
<template>
  <div class="form-group" :class="`input-group-${variant}`">
    <label class="form-label" :for="id">{{ label }}</label>
    <select ref="choicesElement"
            class="form-control"
            :name="name"
            :id="id"
            :multiple="isMultiple"
            @change="emitValue"
    />
  </div>
</template>

<script>
import Choices from 'choices.js'

export default {
  name: 'MaterialChoices',
  emits: ['change', 'update:modelValue', 'update:value', 'update:text'],
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
    value: {
      type: [String, Number]
    },
    text: {
      type: [String, Number]
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
  mounted() {
    this.choices = new Choices(this.$refs.choicesElement, {
      allowHTML: false,
      removeItemButton: this.removeItemButton,
      duplicateItemsAllowed: this.duplicateItemsAllowed,
      noChoicesText: 'No hay opciones para elegir'
    })
    this.choices.setChoices(this.options, 'value', 'label', true)
    this.disabled ? this.choices.disable() : this.choices.enable()
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
    }
  },
  beforeDestroy() {
    this.choices.destroy()
  },
  methods: {
    emitValue() {
      if (this.choices.getValue()) {
        const selectedValue = this.choices.getValue()
        const Value = this.choices.getValue(true)
        const Label = this.choices.getValue(false)
        this.$emit('update:modelValue', selectedValue)
        this.$emit('update:value', Value)
        this.$emit('update:text', Label.label)
      }
    }
  }
}
</script>

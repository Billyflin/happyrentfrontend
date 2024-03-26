<template>
  <div>
    <label class="form-label" :for="id">{{ label }}</label>
    <select ref="choicesElement" :name="name" :id="id" :multiple="isMultiple" @change="emitValue">
      <!--      <option v-for="option in options" :value="option.value" :key="option.value">-->
      <!--        {{ option.text }}-->
      <!--      </option>-->
    </select>
  </div>
</template>

<script>
import Choices from 'choices.js'

export default {
  name: 'MaterialChoices',
  emits: ['change', 'update:modelValue'],
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
    isMultiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [String, Number, Object],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
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
      allowHTML: true,
      removeItemButton: this.removeItemButton,
      duplicateItemsAllowed: this.duplicateItemsAllowed,
      disabled: this.disabled,
      noChoicesText: 'No hay opciones para elegir'

    })
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
      this.choices.setChoices(this.options, 'value', 'label', true)
      const selectedValue = this.choices.getValue()
      this.$emit('update:modelValue', selectedValue)
    }
  },
  beforeDestroy() {
    this.choices.destroy()
  },
  methods: {
    emitValue() {
      const selectedValue = this.choices.getValue()
      this.$emit('update:modelValue', selectedValue)
    }
  }
}
</script>

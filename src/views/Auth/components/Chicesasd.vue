<template>
  <div class="form-group" :class="`input-group-${variant}`">
    <label class="form-label" :for="id">{{ label }}</label>
    <select ref="choicesElement"
            class="form-control"
            :name="name"
            :id="id"
            :multiple="isMultiple"
            :disabled="disabled"
            v-model="selectedValue"
            @change="updateSelectedText"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
import Choices from 'choices.js'

export default {
  name: 'MaterialChoices',
  emits: ['update:modelValue', 'update:modelText'],
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
      type: [String, Number, Object, Array],
      default: null
    },
    modelText: {
      type: String,
      default: null
    }
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    updateSelectedText() {
      const selectedOption = this.options.find(option => option.value === this.selectedValue)
      this.$emit('update:modelText', selectedOption ? selectedOption.label : null)
    }
  },
  mounted() {
    const { removeItemButton, duplicateItemsAllowed } = this
    this.choices = new Choices(this.$refs.choicesElement, {
      allowHTML:false,
      removeItemButton,
      duplicateItemsAllowed,
      noChoicesText: 'No hay opciones para elegir'
    })
    this.choices.setChoices(this.options, 'value', 'label', true)
  },
  watch: {
    options() {
      this.choices.clearStore()
      this.choices.setChoices(this.options, 'value', 'label', true)
      if (!this.choices.getValue().length) {
        this.choices.setChoiceByValue(this.options[0].value)
      }
    }
  },
  beforeDestroy() {
    this.choices.destroy()
  }
}
</script>
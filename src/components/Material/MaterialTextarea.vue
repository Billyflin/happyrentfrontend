<template>
  <div :class="`input-group-${variant} ${getStatus(error, success)}`" class="input-group">
    <textarea
      :id="id"
      :disabled="disabled"
      :isRequired="isRequired"
      :name="name"
      :placeholder="placeholder"
      :rows="rows"
      :style="{ resize: resizable ? 'auto' : 'none' }"
      :value="modelValue"
      class="form-control"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>
<script>
import setMaterialInput from '@/assets/js/material-input.js'

export default {
  name: 'MaterialTextarea',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'outline'
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Your text here...'
    },
    isRequired: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 5
    },
    success: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    setMaterialInput()
  },
  methods: {
    getStatus: (error, success) => {
      let isValidValue

      if (success) {
        isValidValue = 'is-valid'
      } else if (error) {
        isValidValue = 'is-invalid'
      } else {
        isValidValue = null
      }

      return isValidValue
    }
  }
}
</script>

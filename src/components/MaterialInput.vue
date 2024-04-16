<template>
  <div
    class="input-group"
    :class="`input-group-${variant} ${status}`"
  >
    <label :class="variant === 'static' ? '' : 'form-label'">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      class="form-control"
      :class="classes"
      :name="name"
      v-model="internalValue"
      :placeholder="placeholder"
      :required="isRequired"
      :disabled="disabled"
    />
    <p>{{ v$.internalValue.$error }}</p>
    <p>{{ v$ }}</p>
  </div>
</template>

<script>
import setMaterialInput from '@/assets/js/material-input.js'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'

export default {
  name: 'MaterialInput',
  props: {
    modelValue: {
      type: [Number, String],
      default: ''
    },
    variant: {
      type: String,
      default: 'outline'
    },
    label: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    success: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    isRequired: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      internalValue: this.modelValue
    }
  },
  validations: {
    internalValue: {
      required,
      // aca quiero hacer que este validador sea opcional, si el typo es rut, entonces se aplica
      rutValidator: helpers.withMessage('Rut inválido',
        helpers.regex(/^[0-9]+-[0-9kK]{1}$/)
      )
    }
  }
  ,
  watch: {
    modelValue(newValue) {
      this.internalValue = newValue
    }
    ,
    internalValue(newValue) {
      this.$emit('update:modelValue', newValue)
      this.v$.internalValue.$touch()
    }
  }
  ,
  mounted() {
    setMaterialInput()
  }
  ,
  setup() {
    return { v$: useVuelidate() }
  }
  ,
  computed: {
    classes() {
      return this.size ? `form-control-${this.size}` : null
    }
    ,
    status() {
      // acá ve si tiene v$.internalValue.$error
      if (this.success) {
        return 'is-valid'
      } else if (this.error) {
        return 'is-invalid'
      } else {
        return null
      }
    }

  }

}

</script>

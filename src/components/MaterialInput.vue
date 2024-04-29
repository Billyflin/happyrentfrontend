<template>
  <div
    class="input-group"
    :class="`input-group-${variant}
     ${v$.internalValue.$error ? 'is-invalid' : ''}
    ${!v$.internalValue.$error && v$.internalValue.$anyDirty ? 'is-valid' : ''} `"
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
  </div>
<!--    <p>{{ v$.internalValue}}</p>-->
  <div v-for="v of v$.$errors" :key="v.$uid">
    <span class="badge badge-danger text-xxs mt-2">{{ v.$message }}</span>
  </div>
<!--  <button @click="v$.internalValue.$touch()">Touch</button>-->
<!--  <button @click="console.log(v$.internalValue)">sad</button>-->
</template>

<script>
import setMaterialInput from '@/assets/js/material-input.js'
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'

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
  validations() {
    if (this.type === 'rut') {
      return {
        internalValue: {
          required:helpers.withMessage('Rut es requerido',
            required
          ),
          validRut: helpers.withMessage('Rut inválido',
            value => {
              // Elimina los puntos y valida el formato
              let cleanValue = value.replace(/\./g, '');
              if (!/^[0-9]+-[0-9kK]{1}$/.test(cleanValue)) return false;

              let [rut, dv] = cleanValue.split('-');
              let total = 0;
              let factor = 2;
              for (let i = rut.length - 1; i >= 0; i--) {
                total += rut.charAt(i) * factor;
                factor = factor === 7 ? 2 : factor + 1;
              }
              let expectedDv = 11 - (total % 11);
              if (expectedDv === 11) expectedDv = '0';
              if (expectedDv === 10) expectedDv = 'K';
              return dv.toUpperCase() === expectedDv.toString();
            }
          )
        }
      }
    }
    if (this.type === 'telefono') {
      return {
        internalValue: {
          required: helpers.withMessage('Teléfono es requerido',
            required
          ),
          validPhone: helpers.withMessage('Teléfono inválido',
            value => {
              let cleanValue = value.replace(/\s/g, '');
              return /^[0-9]{9}$/.test(cleanValue);
            }
          )
        }
      }
    }
    if (this.type === 'email') {
      return {
        internalValue: {
          required: helpers.withMessage('Email es requerido',
            required
          ),
          validEmail: helpers.withMessage('Email inválido',
            email
          )
        }
      }
    }
    if (this.type === 'password') {
      return {
        internalValue: {
          required: helpers.withMessage('Contraseña es requerida',
            required
          ),
          minLength: helpers.withMessage('Contraseña debe tener al menos 6 caracteres',
            value => value.length >= 6
          )
        }
      }
    }
    if (this.type === 'number') {
      return {
        internalValue: {
          required: helpers.withMessage('Número es requerido',
            required
          ),
          isNumber: helpers.withMessage('Número inválido',
            value => !isNaN(value)
          ),
          isPositive: helpers.withMessage('Número debe ser positivo o 0',
            value => value >= -1
          )
        }
      }
    }
    if (this.isRequired) {
      return {
        internalValue: {
          required:
            helpers.withMessage(`${this.label} es requerido`,
              required
            )
        }
      }
    } else {
      return {
        internalValue: {}
      }
    }
  },
  emits: ['update:modelValue','input'],
  data() {
    return {
      internalValue: this.modelValue,
    }
  },
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
  }
}
</script>

<template>
  <div
    :class="`input-group-${variant}
     ${v$.internalValue.$error ? 'is-invalid' : ''}
    ${!v$.internalValue.$error && v$.internalValue.$anyDirty ? 'is-valid' : ''} `"
    class="input-group"
  >
    <label :class="variant === 'static' ? '' : 'form-label'">{{ label }}</label>
    <input
      :id="id"
      v-model="internalValue"
      :class="classes"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      :required="isRequired"
      :type="type"
      class="form-control"
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
          required: helpers.withMessage('Rut es requerido', required),
          validRut: helpers.withMessage('Rut inválido', value => {
            let cleanValue = value.replace(/\./g, '').replace(/-/g, '');
            if (!/^[0-9]+[0-9kK]{1}$/.test(cleanValue)) return false

            let rut = cleanValue.slice(0, -1);
            let dv = cleanValue.slice(-1);

            let total = 0;
            let factor = 2;
            for (let i = rut.length - 1; i >= 0; i--) {
              total += rut.charAt(i) * factor;
              factor = factor === 7 ? 2 : factor + 1;
            }
            let expectedDv = 11 - (total % 11);
            if (expectedDv === 11) expectedDv = '0';
            if (expectedDv === 10) expectedDv = 'K';
            if (dv.toUpperCase() !== expectedDv.toString()) return false;

            // Formatear y asignar el valor del RUT
            this.internalValue = formatRut(cleanValue);
            return true;
          })
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
              let cleanValue = value.replace(/\s/g, '')
              return /^[0-9]{9}$/.test(cleanValue)
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
          passwordUppercase: helpers.withMessage('Contraseña debe tener al menos una letra mayúscula',
            value => /[A-Z]/.test(value)
          ),
          passwordLowercase: helpers.withMessage('Contraseña debe tener al menos una letra minúscula',
            value => /[a-z]/.test(value)
          ),
          passwordDigit: helpers.withMessage('Contraseña debe tener al menos un dígito',
            value => /[0-9]/.test(value)
          ),
          passwordSpecial: helpers.withMessage('Contraseña debe tener al menos un carácter especial',
            value => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)
          ),
          minLength: helpers.withMessage('Contraseña debe tener al menos 8 caracteres',
            value => value.length >= 8
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
  emits: ['update:modelValue', 'input'],
  data() {
    return {
      internalValue: this.modelValue
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
function formatRut(value) {
  let cleanValue = value.replace(/\./g, '').replace(/-/g, '');

  let dv = cleanValue.slice(-1);
  let rut = cleanValue.slice(0, -1);

  let formattedRut = '';
  while (rut.length > 3) {
    formattedRut = '.' + rut.slice(-3) + formattedRut;
    rut = rut.slice(0, -3);
  }
  formattedRut = rut + formattedRut + '-' + dv.toUpperCase();

  return formattedRut;
}
</script>

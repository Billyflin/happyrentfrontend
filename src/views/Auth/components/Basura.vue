<template>
  <div>
    <input v-model="v$.name.$model" @blur="v$.name.$commit" />
    <p v-for="error of v$.$errors" :key="error.$uid">
      {{ error.$message }}
    </p>
    <MaterialInput id="asdas" v-model="v$.name.$model" success  />
  </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import { ref } from 'vue'
import MaterialInput from '@/components/MaterialInput.vue'

export default {
  components: { MaterialInput },
  setup() {
    const rules = {
      name: {
        required,
        validRut: helpers.withMessage('Rut inválido', // 'Rut inválido
          helpers.regex(/^[0-9]+-[0-9kK]{1}$/)
        )
      }
    }
    const name = ref(null)
    return {
      v$: useVuelidate(rules, { name }, { $rewardEarly: true })
    }
  }
}
</script>
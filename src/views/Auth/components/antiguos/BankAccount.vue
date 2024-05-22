<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Titulo guia</h5>
        <p>
          bajada de texto x
        </p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row">
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" title="Next" type="button"
                @click="this.$parent.nextStep">
          Next
        </button>

      </div>
    </div>
  </div>

</template>
<script>
import { defineComponent } from 'vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'

export default defineComponent({
  components: { MaterialInput, MaterialChoices },
  data() {
    return {
      bancos: [
        // bancos chilenos
        { value: 1, label: 'Banco Estado', selected: true },
        { value: 2, label: 'Banco de Chile' },
        { value: 3, label: 'Santander' },
        { value: 4, label: 'Vice' },
        { value: 5, label: 'Scotiabank' },
        { value: 6, label: 'Banco BCI' }
      ],
      cuentas: [
        { value: 'Corriente', text: 'Corriente', selected: true },
        { value: 'Rut', text: 'Rut' },
        { value: 'Chequera Electrónica', text: 'Chequera Electrónica' },
        { value: 'Ahorro', text: 'Ahorro' },
        { value: 'Vista', text: 'Vista' }
      ],
      numeroCuenta: '',
      emailBanco: '',
      banco: '',
      cuenta: ''
    }
  }
})


</script>
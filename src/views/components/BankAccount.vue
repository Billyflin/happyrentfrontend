<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Datos de cuenta bancaria</h5>
        <p>
          Ingrese los datos de su cuenta bancaria
        </p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row">
        <div class="col">
          <MaterialChoices id="uwu" :options=" [
        // bancos chilenos
        { value: 1, text: 'Banco Estado' },
        { value: 2, text: 'Banco de Chile' },
        { value: 3, text: 'Santander' },
        { value: 4, text: 'Vice' },
        { value: 5, text: 'Scotiabank' },
        { value: 6, text: 'Banco BCI' },
      ]" name="bancos" v-model="banco" @change="console.log(banco)" />
        </div>
        <div class="col">
          <MaterialChoices id="TipoCuentaBanco" :options="[
        { value: 'Corriente', text: 'Corriente' },
        { value: 'Vista', text: 'Vista' }
      ]" name="cuenta" v-model="cuenta"
                           @change="console.log(cuenta)" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-sm-6">
          <MaterialInput id="naccount" label="Número de cuenta" variant="dynamic" v-model="numeroCuenta" />
        </div>
        <div class="col-12 col-sm-6 mt-4 mt-sm-0 mb-4">
          <MaterialInput id="emailbanco" type="email" label="Email" variant="dynamic" v-model="emailBanco" />
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next"
                @click="this.$parent.nextStep">
          Next
        </button>
      </div>
    </div>
  </div>

</template>
<script>
import { defineComponent } from 'vue'
import MaterialComboBox from '@/components/MaterialComboBox.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'

export default defineComponent({
  components: { MaterialInput, MaterialChoices, MaterialComboBox },
  data() {
    return {
      numeroCuenta: '',
      emailBanco: '',
      banco: 1,
      cuenta: ''
    }
  }
})


</script>
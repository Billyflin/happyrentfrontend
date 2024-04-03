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
          <MaterialChoices id="Banco" :options="bancos" name="bancos" v-model:value="banco" @change="console.log(banco)" />
        </div>
        <div class="col">
          <MaterialChoices id="TipoCuentaBanco" :options="cuentas" name="cuenta" v-model:value="cuenta"
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
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="this.$parent.nextStep" >
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
        { value: 6, label: 'Banco BCI' },
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
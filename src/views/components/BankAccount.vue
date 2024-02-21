<template>
  <div class="multisteps-form__panel border-radius-xl bg-white" data-animation="FadeIn">
    <h3>Banco</h3>
    <p>Ingresa los datos de tu cuenta bancaria</p>
    <div class="multisteps-form__content">
      <div class="row mt-3">
        <div class="col-12 col-sm-6">
          <MaterialInput id="naccount" label="Número de cuenta" variant="dynamic" v-model="numeroCuenta" />
        </div>
        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
          <MaterialInput id="emailbanco" type="email" label="Email" variant="dynamic" v-model="emailBanco" />
        </div>
      </div>
      <div class="mt-4 row">
          <div class="col">
            <MaterialChoices id="uwu" :options="bancos" name="bancos" v-model="banco" @change="console.log(banco)"/>
            <MaterialChoices id="TipoCuentaBanco" :options="tipoCuenta" name="cuenta" v-model="cuenta" @change="console.log(cuenta)"/>
          </div>
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
      bancos: [
        // bancos chilenos
        { value: 1, text: 'Banco Estado' },
        { value: 2, text: 'Banco de Chile' },
        { value: 3, text: 'Santander' },
        { value: 4, text: 'Vice' },
        { value: 5, text: 'Scotiabank' },
        {value: 6, text: 'Banco BCI' },
      ],
      cuenta: '',
      tipoCuenta: [
        { value: 'Corriente', text: 'Corriente' },
        { value:'Vista', text: 'Vista' },
      ]
    }
  }
})


</script>
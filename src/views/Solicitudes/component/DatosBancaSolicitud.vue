<template>
  <div class="row mt-4">
    <div class="col-4 mb-4">
      <material-input id="rut" v-model="persona.datosBancarios[0].rut" is-required label="Rut de la cuenta bancaria"
                      type="rut" variant="static" placeholder="11.111.111-1" />
    </div>
    <div class="col-4 mb-4">
      <material-input id="numeroCuenta" v-model="persona.datosBancarios[0].numeroCuenta" is-required
                      label="Número de cuenta"
                      type="String"
                      variant="static" />
    </div>
    <div class="col-4 mb-4">
      <material-input id="email" v-model="persona.datosBancarios[0].email" is-required label="Email para notificacion" type="email"
                      variant="static" />
    </div>
    <div class="col-4 mb-4">
      <material-choices id="banco" v-model:text-choice="persona.datosBancarios[0].banco" :options="bancos" label="Banco"
                        variant="static"
                        name="banco" />
    </div>
    <div class="col-4 mb-4">
      <material-choices id="tipoCuenta" v-model:text-choice="persona.datosBancarios[0].tipoCuenta" :options="cuentas"
                        label="Tipo de cuenta"
                        name="tipoCuenta" variant="static" />
    </div>
  </div>
</template>
<script>
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'

export default {
  name: 'DatosBancaSolicitud',
  components: { MaterialChoices, MaterialInput },
  props: {
    persona: {}
  },
  data() {
    return {
      bancos: [
        { value: 'Banco Estado', text: 'banco1', selected: true },
        { value: 'Banco BCI', text: 'banco3' },
        { value: 'Banco Santander', text: 'banco4' },
        { value: 'Banco Itau', text: 'banco5' },
        // { value: 'Banco Falabella', text: 'banco6' },
        { value: 'Banco de Chile', text: 'banco7' },
        // { value: 'Banco de Crédito e Inversiones', text: 'banco8' },
        // { value: 'Banco Internacional', text: 'banco9' },
        // { value: 'Banco Security', text: 'banco10' },
        // { value: 'Banco Ripley', text: 'banco11' },
        // { value: 'Banco Consorcio', text: 'banco12' },
        // { value: 'Banco Corpbanca', text: 'banco13' },
        { value: 'Banco Scotiabank', text: 'banco14' }
      ],
      cuentas: [
        { value: 'Cuenta Corriente', text: 'cuenta1', selected: true },
        { value: 'Cuenta Vista', text: 'cuenta2' },
        { value: 'Cuenta de Ahorro', text: 'cuenta3' }
      ]
    }
  }
}
</script>
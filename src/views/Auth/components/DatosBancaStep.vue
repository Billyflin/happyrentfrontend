<template>
  <div class="row">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Datos bancarios</h5>
      </div>
    </div>
      <div class="row mt-3">
        <div class="col-4 mb-4">
          <material-input id="rut" v-model="datosBancarios[0].rut" is-required label="Rut" type="rut" variant="static" placeholder="xx.xxx.xxx-x"/>
        </div>
        <div class="col-4 mb-4">
          <material-input id="numeroCuenta" v-model="datosBancarios[0].numeroCuenta" is-required label="Número de cuenta"
                          type="String"
                          variant="static" />
        </div>
        <div class="col-4 mb-4">
          <material-input id="email" v-model="datosBancarios[0].email" is-required label="Email" type="text" variant="static" />
        </div>
        <div class="col-4 mb-4">
          <material-choices id="banco" v-model:text-choice="datosBancarios[0].banco" :options="bancos" label="Banco" variant="static"
                            name="banco" />
        </div>
        <div class="col-4 mb-4">
          <material-choices id="tipoCuenta" v-model:text-choice="datosBancarios[0].tipoCuenta" :options="cuentas"
                            label="Tipo de cuenta"
                            name="tipoCuenta" variant="static"/>
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" title="Next" type="button"
                @click="nexStep">
          Siguiente
        </button>
      </div>
    </div>
</template>

<script>
import setTooltip from '@/assets/js/tooltip.js'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { useAppStore } from '@/store/appStore.js'

export default {
  name: 'DatosBancaStep',
  components: { MaterialChoices, MaterialInput },
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
        { value: 'Vista', text: 'cuenta1', },
        { value: 'Ahorro', text: 'cuenta2' },
        { value: 'Cuenta Corriente', text: 'cuenta3', selected: true }
      ],
      datosBancarios: [{
        banco: '',
        tipoCuenta: '',
        numeroCuenta: '',
        rut: '',
        email: ''
      }]
    }
  },
  methods: {
    nexStep() {
      this.$emit('update:datosBancarios', this.datosBancarios)
      this.$emit('next:step')
    }
  },
  watch: {
    datosBancarios(nuevoBanco) {
      this.datosBancarios.banco = nuevoBanco.value
      this.$emit('update:datosBancarios', this.datosBancarios)
    },
    cuenta(nuevaCuenta) {
      this.datosBancarios.cuenta = nuevaCuenta.value
      this.$emit('update:datosBancarios', this.datosBancarios)
    }
  },
  mounted() {
    const store = useAppStore()
    setTooltip(store.bootstrap)
  },
  beforeUnmount() {
    this.$emit('update:datosBancarios', this.datosBancarios)
  }
}
</script>
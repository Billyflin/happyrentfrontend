<template>
  <div class="pt-3 bg-white multisteps-form__Panel" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Datos bancarios</h5>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row mt-3">
        <div class="col-4 mb-4">
          <material-input id="rut" v-model="bancario.rut" is-required label="Rut" type="rut" variant="dynamic" />
        </div>
        <div class="col-4 mb-4">
          <material-input id="numeroCuenta" v-model="bancario.numeroCuenta" is-required label="Número de cuenta" type="String"
                          variant="dynamic" />
        </div>
        <div class="col-4 mb-4">
          <material-input id="email" v-model="bancario.email" is-required label="Email" type="text" variant="dynamic" />
        </div>
        <div class="col-4 mb-4">
          <material-choices id="banco" v-model:text-choice="bancario.banco" :options="bancos" label="Banco"
                            name="banco" />
        </div>
        <div class="col-4 mb-4">
          <material-choices id="tipoCuenta" v-model:text-choice="bancario.cuenta" :options="cuentas" label="Tipo de cuenta"
                            name="tipoCuenta" />
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" title="Next" type="button"
                @click="nexStep">
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import { useAppStore } from '@/store/index.js'
import setTooltip from '@/assets/js/tooltip.js'

export default {
  name: 'DatosBancaStep',
  components: { MaterialChoices, MaterialInput },
  data() {
    return {
      bancos: [
        { value: 'Banco Estado', text: 'banco1', selected: true },
        { value: 'Banco Chile Edwards', text: 'banco2' },
        { value: 'Banco BCI', text: 'banco3' },
        { value: 'Banco Santander', text: 'banco4' },
        { value: 'Banco Itau', text: 'banco5' },
        { value: 'Banco Falabella', text: 'banco6' },
        { value: 'Banco de Chile', text: 'banco7' },
        { value: 'Banco de Crédito e Inversiones', text: 'banco8' },
        { value: 'Banco Internacional', text: 'banco9' },
        { value: 'Banco Security', text: 'banco10' },
        { value: 'Banco Ripley', text: 'banco11' },
        { value: 'Banco Consorcio', text: 'banco12' },
        { value: 'Banco Corpbanca', text: 'banco13' },
        { value: 'Banco Scotiabank', text: 'banco14' }
      ],
      cuentas: [
        { value: 'Cuenta Vista', text: 'cuenta1', selected: true },
        { value: 'Cuenta Ahorro', text: 'cuenta2' },
        { value: 'Cuenta Corriente', text: 'cuenta3' },
        { value: 'Cuenta Rut', text: 'cuenta4' }
      ],
      bancario: {
        banco: '',
        cuenta: '',
        numeroCuenta: '',
        rut: '',
        email: ''
      }
    }
  },
  methods: {
    nexStep() {
      this.$emit('update:banco', this.bancario)
      this.$emit('next:step')
    }
  },
  watch: {
    banco(nuevoBanco) {
      this.bancario.banco = nuevoBanco.value
      this.$emit('update-banco', this.bancario)
    },
    cuenta(nuevaCuenta) {
      this.bancario.cuenta = nuevaCuenta.value
      this.$emit('update-banco', this.bancario)
    }
  },
  mounted() {
    const store = useAppStore()
    setTooltip(store.bootstrap)
  },
  beforeUnmount() {
    this.$emit('update-banco', this.bancario)
  }
}
</script>
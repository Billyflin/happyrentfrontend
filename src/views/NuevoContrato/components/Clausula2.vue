<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula2" class="col-8 card-title text-center">Cláusula 2: RENTA</h5>
        <div class="col-2">
          <material-checkbox id="editClausula2" v-model="store.clausula2edit"
            >Editar</material-checkbox
          >
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula2" :contenteditable="store.clausula2edit" class="text-justify">
          La renta mensual de arrendamiento por los inmuebles individualizados en la cláusula
          primera precedente es y será la suma de
          <strong>
            <template v-if="store.moneda === 'Pesos'">$</template>
            {{ formatNumberWithDots(store.valorRenta) }}
            <template v-if="store.moneda === 'Pesos'">CLP</template>
            <template v-if="store.moneda === 'UF'"> UF</template>
            <template v-if="store.moneda === 'Dólares'"> USD</template>
            .-
          </strong>
          mensuales ({{ numberToWordsInSpanish(store.valorRenta) }}
          <strong>{{ store.moneda.toLowerCase() }}</strong
          >). La renta se pagará por mes anticipado, dentro de los
          <strong>primeros cinco días hábiles de cada mes</strong>, a través de la
          <strong>pasarela de pagos de la aplicación Happ Rent</strong>, o mediante depósito o
          transferencia electrónica de fondos a la cuenta corriente de la propietaria, depositándola
          a nombre de <strong>PROPIETARIA</strong>
          <template v-if="cuentaActiva">
            en la cuenta {{ cuentaActiva.tipoCuenta }} Nº {{ cuentaActiva.numeroCuenta }} del banco
            {{ cuentaActiva.banco }}, RUT:
            {{ store2.propiedad.propietario.rut }}
          </template>
          . El pago deberá ser informado al correo electrónico:
          {{ store2.propiedad.propietario.email }}. Será suficiente para acreditar el pago de las
          rentas antes señaladas la exhibición de los comprobantes de depósito o de transferencia
          electrónica de fondos hecha a la cuenta corriente antes mencionada.
        </p>
      </div>
    </div>
    <div class="col-3">
      Ingresa el valor de la renta:
      <material-input id="Renta" v-model="store.valorRenta" label="Renta" size="lg" type="number" />
      Seleccione la moneda en la que se pagará la renta:
      <material-dropdown v-model="store.moneda" />
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { useContratosStore } from '@/store/contratosStore.js'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { formatNumberWithDots, numberToWordsInSpanish } from '../utils.js'
import MaterialDropdown from '@/components/Material/MaterialDropdown.vue'
import MaterialDropdownCuentas from '@/views/NuevoContrato/components/MaterialDropdownCuentas.vue'

export default {
  name: 'Clausula2',
  methods: { formatNumberWithDots, numberToWordsInSpanish },
  components: { MaterialDropdownCuentas, MaterialDropdown, MaterialInput, MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
      store2: useContratosStore(),
      cuentaActiva: null
    }
  },
  created() {
    this.cuentaActiva = this.store2.propiedad.propietario.datosBancarios.find(
      (cuenta) => cuenta.activa
    )
  },
  watch: {
    'this.$refs.Clausula2': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula2 = newVal.innerText
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    if (this.$refs.Clausula2) {
      this.store.clausula2 = this.$refs.Clausula2.innerText
    }
  }
}
</script>
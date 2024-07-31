<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula2" class="col-8 card-title text-center">Cláusula 2: RENTA</h5>
        <div class="col-2">
          <material-checkbox id="editClausula2" v-model="store.clausula2edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula2" :contenteditable="store.clausula2edit" class="text-justify">
          La renta mensual de arrendamiento por los inmuebles individualizados en la cláusula primera
          precedente es y será la suma de <strong>          $ {{formatNumberWithDots( store.valorRenta )}}.-        </strong>
          mensuales
                                ( {{ numberToWordsInSpanish(store.valorRenta)}} )
          .
          La renta se pagará por mes anticipado, dentro de los
          primeros cinco días hábiles de cada mes, depositándola a nombre de <strong>PROPIETARIA</strong>
          <!--                      {{ store2.propiedad.propietario.datosBanca }} en {{ store2.propiedad.propietario.datosBanca.cuenta }}, cuenta-->
          <!--                      {{ store2.contrato.tipoCuentaBanco }} Nº-->
          <!--                      {{ store2.contrato.numeroCuentaBanco }},-->
          RUT: {{ store2.propiedad.propietario.rut }} y deberá ser
          informada al correo electrónico:
          {{ store2.propiedad.propietario.email }}. Será suficiente para acreditar el pago de las rentas
          antes señaladas la exhibición de los comprobantes de depósito o de transferencia electrónica de
          fondos hecha a la cuenta corriente antes singularizada.
        </p>
      </div>
    </div>
    <div class="col-3">
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >Dropdown</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <material-input id="Renta" v-model="store.valorRenta" label="Renta" type="number" />

  </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { useContratosStore } from '@/store/contratosStore.js'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { formatNumberWithDots, numberToWordsInSpanish } from '../utils.js'

export default {
  name: 'Clausula2',
  methods: { formatNumberWithDots, numberToWordsInSpanish },
  components: { MaterialInput, MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
      store2: useContratosStore(),
    }
  },
  watch: {
    'this.$refs.Clausula2': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula2 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula2) {
      this.store.clausula2 = this.$refs.Clausula2.innerText;
    }
  }
}
</script>
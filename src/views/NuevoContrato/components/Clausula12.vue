<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula12" class="col-8 card-title text-center">Clausula 12 GARANTIA DE ARRIENDO:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula12" v-model="store.clausula12edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula12" :contenteditable="store.clausula12edit" class="text-justify">
          A fin de garantizar la conservación de la propiedad y su restitución en el mismo estado en que
          la
          recibe, la devolución y conservación de las especies y artefactos que se indicarán en el
          inventario, el pago de los perjuicios y deterioros que se causen en la propiedad arrendada,
          sus
          servicios e instalaciones y, en general, para responder al fiel cumplimiento de las
          estipulaciones
          de este contrato, la arrendataria entrega en garantía en este acto a la arrendadora la suma de
          <strong>  $ {{formatNumberWithDots( store.valorRenta )}}.- </strong>
          ( {{ numberToWordsInSpanish(store.valorRenta)}} ) equivalente a 01 (un) mes de la renta estipulada,
          que
          la arrendadora se obliga a restituir por igual equivalencia dentro de los 30 días siguientes a
          la
          fecha en que le haya sido entregada, a su satisfacción, la propiedad arrendada, quedando desde
          ahora autorizada la arrendadora para descontar de la garantía el valor de los deterioros y
          perjuicios de cargo del arrendatario que se hayan ocasionado, como asimismo, el valor de las
          cuentas pendientes de gastos comunes, energía eléctrica, agua u otros que sean de cargo de la
          arrendataria. La arrendataria no podrá en caso alguno imputar la garantía al pago de la renta
          de
          arrendamiento, ni aún tratándose de la renta del último mes. Asimismo, a la firma del contrato
          se
          pagará mediante transferencia electrónica la suma de:

          <br>Garantía:  <strong>  $ {{formatNumberWithDots( store.valorRenta )}}.- </strong>
          ( {{ numberToWordsInSpanish(store.valorRenta)}} )
          <br>Honorarios de corretaje: <b>$ {{formatNumberWithDots( store.valorRenta/2 )}}.-</b> ( {{ numberToWordsInSpanish(store.valorRenta/2)}} )
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { formatNumberWithDots, numberToWordsInSpanish } from '../utils.js'

export default {
  name: 'Clausula12',
  methods: { numberToWordsInSpanish, formatNumberWithDots },
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore()
    }
  },
  watch: {
    'this.$refs.Clausula12': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula12 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula12) {
      this.store.clausula12 = this.$refs.Clausula12.innerText;
    }
  }
}
</script>
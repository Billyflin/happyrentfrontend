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
          <strong> $ {{ formatNumberWithDots(store.valorRenta * store.mesesGarantia) }}.- </strong>
          ( {{ numberToWordsInSpanish(store.valorRenta * store.mesesGarantia) }} ) equivalente

          a {{ store.mesesGarantia }} ({{ numberToWordsInSpanish(store.mesesGarantia) }})
          <template v-if="store.mesesGarantia===1">
            mes
          </template>
          <template v-else>

            meses
          </template>

          de la renta estipulada,
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
          pagará mediante transferencia electrónica la suma de
          <b>{{ formatNumberWithDots(Math.round(store.valorRenta * store.mesesGarantia + store.valorRenta * store.valorCorretaje / 100)) + ' ' + store.moneda.toLowerCase()
            }}</b>
          ({{ numberToWordsInSpanish(Math.round(store.valorRenta * store.mesesGarantia + store.valorRenta * store.valorCorretaje / 100)) + ' ' + store.moneda.toLowerCase()
          }})
          en concepto de:

          <br>Garantía: <strong> $
          {{ formatNumberWithDots(Math.round(store.valorRenta * store.mesesGarantia)) + ' ' + store.moneda.toLowerCase()
          }}.- </strong>
          (
          {{ numberToWordsInSpanish(Math.round(store.valorRenta * store.mesesGarantia)) + ' ' + store.moneda.toLowerCase()
          }} )
          <br>Honorarios de corretaje: <b>$
          {{ formatNumberWithDots(Math.round(store.valorRenta * store.valorCorretaje / 100)) + ' ' + store.moneda.toLowerCase()
          }}.-</b>
          (
          {{ numberToWordsInSpanish(Math.round(store.valorRenta * store.valorCorretaje / 100)) + ' ' + store.moneda.toLowerCase()
          }}
          )
        </p>
      </div>
    </div>
    <div class="col-3">
      Selecciona los meses de garantía que se entregarán en el contrato:

      <material-dropdown id="mesesGarantia" v-model="store.mesesGarantia"
                         :items="[1, 2, 3, 4, 5, 6]"></material-dropdown>

      Arrastra aquí para cambiar el valor del corretaje, ahora mismo está en <b>
      {{ store.valorCorretaje }}%
    </b>
      que equivale a
      <b>
        {{ formatNumberWithDots(Math.round(store.valorRenta * store.valorCorretaje / 100)) }}
      </b>
      <input v-model="store.valorCorretaje" type="range" id="inputValue" class="form-control border draggable-input mt-3"
             value="50" min="10" max="100">

    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { formatNumberWithDots, numberToWordsInSpanish } from '../utils.js'
import MaterialDropdown from '@/components/Material/MaterialDropdown.vue'

export default {
  name: 'Clausula12',
  methods: { numberToWordsInSpanish, formatNumberWithDots },
  components: { MaterialDropdown, MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
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
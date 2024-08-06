<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula3" class="col-8 card-title text-center">Cláusula 3 REAJUSTE:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula3" v-model="store.clausula3edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula3" :contenteditable="store.clausula3edit" class="text-justify">
          <template v-if="store.moneda === 'Pesos'">
            La renta se reajustará de forma
            <strong>{{ store.periodoReajusteContrato.toLowerCase() }}</strong>

            (<template v-if="store.periodoReajusteContrato === 'Mensual'">un mes</template>
            <template v-else-if="store.periodoReajusteContrato === 'Trimestral'">tres meses</template>
            <template v-else-if="store.periodoReajusteContrato === 'Semestral'">seis meses</template>
            <template v-else-if="store.periodoReajusteContrato === 'Anual'">doce meses</template>)
            en el mismo porcentaje que haya variado el IPC (Índice de Precios del Consumidor).
            En caso de IPC negativo, se mantendrá la renta del período inmediatamente anterior con un mínimo de
            <strong>$ {{ formatNumberWithDots(store.valorRenta) }}.-</strong>
            ({{ numberToWordsInSpanish(store.valorRenta) }} <strong>{{ store.moneda.toLowerCase() }}</strong>).
            La renta en pesos se reajustará
            <strong>{{ store.periodoReajusteContrato.toLowerCase() }}</strong>
            según el IPC publicado por el Instituto Nacional de Estadísticas (INE).
          </template>
          <template v-else-if="store.moneda === 'Dólares'">
            La renta será calculada al tipo de cambio oficial del día del pago, publicado por el Banco Central.
            La renta del período inmediatamente anterior será de
            <strong>USD {{ formatNumberWithDots(store.valorRenta) }}.-</strong>
            ({{ numberToWordsInSpanish(store.valorRenta) }} <strong>{{ store.moneda.toLowerCase() }}</strong>).
            La aplicación ayudará con la conversión en el momento del pago.
          </template>
          <template v-else-if="store.moneda === 'UF'">
            La renta será calculada según el valor de la UF al día del pago, publicado por el Banco Central.
            La renta del período inmediatamente anterior será de
            <strong>UF {{ formatNumberWithDots(store.valorRenta) }}.-</strong>
            ({{ numberToWordsInSpanish(store.valorRenta) }} <strong>{{ store.moneda.toLowerCase() }}</strong>).
            La aplicación ayudará con la conversión en el momento del pago.
          </template>
        </p>
      </div>
    </div>
    <div class="col-3"
         v-if="store.moneda === 'Pesos'"
    >
      Seleciona el período de reajuste de la renta:
      <material-dropdown class="mt-2"
        v-model="store.periodoReajusteContrato"
        :items="[
          'Mensual',
          'Trimestral',
          'Semestral',
          'Anual'
        ]"
      />
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import ModalReajuste from '@/views/NuevoContrato/components/ModalReajuste.vue'
import { formatNumberWithDots, numberToWordsInSpanish } from '../utils.js'
import MaterialDropdown from '@/components/Material/MaterialDropdown.vue'

export default {
  name: 'Clausula3',
  methods: { formatNumberWithDots, numberToWordsInSpanish },
  components: { MaterialDropdown, ModalReajuste, MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
    }
  },
  watch: {
    'this.$refs.Clausula3': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula3 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },
  mounted() {
    if (this.$refs.Clausula3) {
      this.store.clausula3 = this.$refs.Clausula3.innerText;
    }
  }
}
</script>
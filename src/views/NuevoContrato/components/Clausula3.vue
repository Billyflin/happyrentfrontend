<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula3" class="col-8 card-title text-center">Clausula 3 REAJUSTE:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula3" v-model="store.clausula3edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula3" :contenteditable="store.clausula3edit" class="text-justify">
          La renta se reajustará [{reajusteContrato}] en el mismo porcentaje que haya
          variado el IPC (índice de precios del consumidor). En caso de IPC negativo se mantendrá
          la renta del período inmediatamente anterior con el mínimo de <strong>  $ {{formatNumberWithDots( store.valorRenta )}}.- </strong>
          ( {{ numberToWordsInSpanish(store.valorRenta)}} )
        </p>
      </div>
    </div>
    <div class="col-3">
      <ModalReajuste />
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import ModalReajuste from '@/views/NuevoContrato/components/ModalReajuste.vue'
import { formatNumberWithDots, numberToWordsInSpanish } from '../utils.js'

export default {
  name: 'Clausula3',
  methods: { formatNumberWithDots, numberToWordsInSpanish },
  components: { ModalReajuste, MaterialCheckbox },
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
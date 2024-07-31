<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula17" class="col-8 card-title text-center">Clausula 17 OTRAS CONDICIONES:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula17" v-model="store.clausula17edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula17" :contenteditable="store.clausula17edit" class="text-justify">
          En caso de que una de las partes quisiera dar término al presente contrato, antes del primer
          año
          estipulado se cancelará un mes de arriendo como indemnización que las partes establecen como
          suma
          de los perjuicios causados, a partir del segundo año bastará el aviso con 60 días de
          anticipación
          a la fecha de salida.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula17',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore()
    }
  },
  watch: {
    'this.$refs.Clausula17': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula17 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula17) {
      this.store.clausula17 = this.$refs.Clausula17.innerText;
    }
  }
}
</script>
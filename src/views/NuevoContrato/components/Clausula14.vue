<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula14" class="col-8 card-title text-center">Clausula 14 ARBITRAJE:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula14" v-model="store.clausula14edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula14" :contenteditable="store.clausula14edit" class="text-justify">
          Toda y cualquier controversia, dificultad o diferencia que se produzca entre las partes y que
          tenga su origen en la interpretación, cumplimiento, aplicación, validez, ejecución, nulidad,
          efectos o vigencia del presente contrato, cualquiera de sus cláusulas o efectos, siendo la
          anterior enumeración a título ejemplar, se someterá al conocimiento y fallo de la justicia
          ordinaria.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula14',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
    }
  },
  watch: {
    'this.$refs.Clausula14': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula14 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula14) {
      this.store.clausula14 = this.$refs.Clausula14.innerText;
    }
  }
}
</script>
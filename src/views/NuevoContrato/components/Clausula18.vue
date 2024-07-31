<template>
  <div class="row align-items-center" v-if="store2.codeudor">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula18" class="col-8 card-title text-center">Clausula 18 CODEUDOR SOLIDARIO:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula18" v-model="store.clausula18edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula18" :contenteditable="store.clausula18edit" class="text-justify">
          Por el presente a este acto don David Alberto Roig Salgado y, declaran que se constituyen como
          aval y codeudor solidario de las obligaciones contraídas en este acto por el arrendatario don
          Nicolás Alberto Pérez Pérez, aceptando, desde luego las variaciones en la renta de
          arrendamiento,
          renovaciones tácitas o expresas de la vigencia de este contrato y especialmente cualquier otra
          modificación acordada por las partes.</p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { useContratosStore } from '@/store/contratosStore.js'

export default {
  name: 'Clausula18',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
      store2: useContratosStore(),
    }
  },
  watch: {
    'this.$refs.Clausula18': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula18 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula18) {
      this.store.clausula18 = this.$refs.Clausula18.innerText;
    }
  }
}
</script>
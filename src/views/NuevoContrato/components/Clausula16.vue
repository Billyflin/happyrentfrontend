<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula16" class="col-8 card-title text-center">Clausula 16 COMISION:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula16" v-model="store.clausula16edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula16" :contenteditable="store.clausula16edit" class="text-justify">
          Las partes pagarán una comisión de corretaje por un monto equivalente al 50% de un mes de
          arriendo
          al momento de la firma de contrato a la corredora de propiedades Alejandra Solis Pradenas, rut
          8.493.004-0, cta cte 47 60 758 398, Banco Chile, email: a.solis@delacasapropiedades.cl.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula16',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore()
    }
  },
  watch: {
    'this.$refs.Clausula16': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula16 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula16) {
      this.store.clausula16 = this.$refs.Clausula16.innerText;
    }
  }
}
</script>
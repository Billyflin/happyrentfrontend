<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula9" class="col-8 card-title text-center">Clausula 9 MEJORAS:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula9" v-model="store.clausula9edit"
            >Editar</material-checkbox
          >
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula9" :contenteditable="store.clausula9edit" class="text-justify">
          La arrendadora no tendrá obligación de hacer mejoras en el inmueble. Las mejoras de
          carácter estructural que pueda efectuar la arrendataria, deberán contar con la debida
          autorización otorgada por la arrendadora, y quedarán en beneficio de la propiedad desde el
          momento mismo en que sean ejecutadas, sin que la arrendadora deba pagar de manera alguna
          por ellas, cualquiera sea su carácter, naturaleza o monto, sin perjuicio de poder
          convenirse otra norma por escrito.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula9',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore()
    }
  },
  watch: {
    'this.$refs.Clausula9': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula9 = newVal.innerText
        }
      },
      deep: true,
      immediate: true
    }
  },

  mounted() {
    if (this.$refs.Clausula9) {
      this.store.clausula9 = this.$refs.Clausula9.innerText
    }
  }
}
</script>
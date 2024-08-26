<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula10" class="col-8 card-title text-center">Clausula 10 MANTENCION DEL INMUEBLE:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula10" v-model="store.clausula10edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula10" :contenteditable="store.clausula10edit" class="text-justify">
          Será obligación de la arrendadora mantener la propiedad arrendada en estado de servir para el
          fin
          a que ha sido arrendada, haciendo durante el arrendamiento las reparaciones que sean
          necesarias
          para tal objeto, a excepción de las "reparaciones locativas" las que serán de cargo de la
          arrendataria. Se entenderá por "reparaciones locativas" aquellas que según la costumbre son
          normalmente de cargo de los arrendatarios y en general, la reparación de deterioros o
          desperfectos
          que se producen por culpa del arrendatario o de las personas por las cuales éste responde.
          Especialmente, se consideran "reparaciones locativas" las siguientes: las relativas a la
          mantención periódica, de forma tal que se mantengan en perfecto estado de funcionamiento las
          llaves de paso, válvulas y flotadores de los excusados, enchufes, timbres, interruptores de la
          instalación eléctrica.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula10',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
    }
  },
  watch: {
    'this.$refs.Clausula10': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula10 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula10) {
      this.store.clausula10 = this.$refs.Clausula10.innerText;
    }
  }
}
</script>
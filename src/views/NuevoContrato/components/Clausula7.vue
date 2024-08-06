<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula7" class="col-8 card-title text-center">Clausula 7 VISITAS AL INMUEBLE:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula7" v-model="store.clausula7edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula7" :contenteditable="store.clausula7edit" class="text-justify">

            La arrendataria permitirá la visita al inmueble por parte del arrendador o su representante, con
            el fin de verificar el estado y uso del mismo. Estas visitas se realizarán en horarios
            razonables y previo aviso, respetando siempre la privacidad y tranquilidad de la arrendataria.
            El arrendador podrá visitar el inmueble hasta 3 veces al mes.
<!--          <template v-else>-->
<!--            No se permitirán visitas al inmueble por parte del arrendador o su representante, salvo en casos-->
<!--            de emergencia o reparaciones necesarias.-->
<!--          </template>-->
        </p>
      </div>
    </div>
    <div class="col-3 mt-3">

    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import MaterialSwitch from '@/components/Material/MaterialSwitch.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula7',
  components: { MaterialInput, MaterialSwitch, MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
    }
  },
  watch: {
    'this.$refs.Clausula7': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula7 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula7) {
      this.store.clausula7 = this.$refs.Clausula7.innerText;
    }
  }
}
</script>
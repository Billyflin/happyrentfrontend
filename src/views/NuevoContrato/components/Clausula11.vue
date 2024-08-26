<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula11" class="col-8 card-title text-center">
          Clausula 11 ROBOS Y PERJUICIOS:
        </h5>
        <div class="col-2">
          <material-checkbox id="editClausula11" v-model="store.clausula11edit"
            >Editar</material-checkbox
          >
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula11" :contenteditable="store.clausula11edit" class="text-justify">
          La arrendadora no responderá de manera alguna por robos que puedan ocurrir en la propiedad
          arrendada o por perjuicios que puedan producirse por incendios, inundaciones,
          filtraciones, rotura de cañerías, efectos de humedad o calor, daños en los ascensores u
          otros, en la medida que ellos sean consecuencia de cualquier caso fortuito o de fuerza
          mayor.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula11',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore()
    }
  },
  watch: {
    'this.$refs.Clausula11': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula11 = newVal.innerText
        }
      },
      deep: true,
      immediate: true
    }
  },

  mounted() {
    if (this.$refs.Clausula11) {
      this.store.clausula11 = this.$refs.Clausula11.innerText
    }
  }
}
</script>
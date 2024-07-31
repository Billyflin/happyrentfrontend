<template>
  <div class="row align-items-center" >
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula15" class="col-8 card-title text-center">Clausula 15 DOMICILIO:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula15" v-model="store.clausula15edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula15" :contenteditable="store.clausula15edit" class="text-justify">
          Las partes fijan domicilio convencional en la ciudad y comuna de Santiago para todos los
          efectos
          legales que pudieren emanar del presente instrumento y se someten a la competencia y
          jurisdicción
          de sus Tribunales de Justicia, estableciendo, desde luego, como domicilios hábiles para
          recibir
          notificaciones asociadas o relacionadas al Contrato, aquellos especificados en el
          encabezamiento
          del Contrato.</p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { useContratosStore } from '@/store/contratosStore.js'

export default {
  name: 'Clausula15',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
      store2: useContratosStore(),
    }
  },
  watch: {
    'this.$refs.Clausula15': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula15 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula15) {
      this.store.clausula15 = this.$refs.Clausula15.innerText;
    }
  }
}
</script>
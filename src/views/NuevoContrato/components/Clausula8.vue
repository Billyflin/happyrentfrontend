<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula8" class="col-8 card-title text-center">Clausula 8 TERMINO ANTICIPADO:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula8" v-model="store.clausula8edit"
            >Editar</material-checkbox
          >
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula8" :contenteditable="store.clausula8edit" class="text-justify">
          Queda prohibido a la arrendataria y su infracción dará derecho a la arrendadora para
          demandar el término ipso-facto del presente contrato, notificando a la arrendataria, al
          aval y codeudor solidario:
          <br />a) Pagar la renta de arrendamiento fuera del plazo estipulado en este contrato, ello
          sin perjuicio de lo dispuesto en el Art. 1.945 del Código Civil. <br />b) Si la
          arrendataria destina la propiedad a cualquier otro fin que no sea el indicado en este
          contrato. <br />c) Subarrendar el inmueble o ceder en todo o parte del contrato de
          arrendamiento a cualquier persona. La infracción de esta prohibición hará a la
          arrendataria responsable de todos los perjuicios que de ello puedan derivarse para la
          arrendadora. <br />d) Hacer mejoras o variaciones en lo estructural sobre la propiedad
          arrendada sin el consentimiento previo de la arrendataria. <br />e) Causar molestias a los
          vecinos, materiales explosivos, inflamables, ilegales o de mal olor en la propiedad
          arrendada. <br />f) No respetar el reglamento de copropiedad del edificio, el que se
          entrega en copia junto con el presente contrato.
        </p>
      </div>
    </div>
    <div class="col-3">
      <material-alert class="font-weight-light" color="danger" dismissible>
        <span class="text-sm">
          <b>¡Atención!</b>
          Revisar esto con las muchachas
        </span>
      </material-alert>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import MaterialAlert from '@/components/Material/MaterialAlert.vue'

export default {
  name: 'Clausula8',
  components: { MaterialAlert, MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore()
    }
  },
  watch: {
    'this.$refs.Clausula8': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula8 = newVal.innerText
        }
      },
      deep: true,
      immediate: true
    }
  },

  mounted() {
    if (this.$refs.Clausula8) {
      this.store.clausula8 = this.$refs.Clausula8.innerText
    }
  }
}
</script>
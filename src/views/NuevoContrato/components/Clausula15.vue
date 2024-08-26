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
          <template v-if="store2.propiedad.propietario.direccion">
            <template v-if="store2.arrendatario.direccion">
              <template v-if="store2.propiedad.propietario.direccion.ciudad === store2.arrendatario.direccion.ciudad && store2.propiedad.propietario.direccion.region === store2.arrendatario.direccion.region">
                La parte propietaria y la parte arrendataria fijan domicilio en la misma ciudad y comuna de
                {{ store2.propiedad.propietario.direccion.ciudad }} en la región de
                {{ store2.propiedad.propietario.direccion.region }}, en las direcciones de
                {{ store2.propiedad.propietario.direccion.calle }} {{ store2.propiedad.propietario.direccion.numero }} y
                {{ store2.arrendatario.direccion.calle }} {{ store2.arrendatario.direccion.numero }} respectivamente.
              </template>
              <template v-else-if="store2.propiedad.propietario.direccion.ciudad === store2.arrendatario.direccion.ciudad">
                La parte propietaria fija domicilio en la ciudad y comuna de
                {{ store2.propiedad.propietario.direccion.ciudad }} en la calle
                {{ store2.propiedad.propietario.direccion.calle }} {{ store2.propiedad.propietario.direccion.numero }} y la
                parte arrendataria en la misma ciudad y comuna en la calle
                {{ store2.arrendatario.direccion.calle }} {{ store2.arrendatario.direccion.numero }} en la región
                {{ store2.propiedad.propietario.direccion.region }}.
              </template>
              <template v-else>
                La parte propietaria fija domicilio en la ciudad y comuna de
                {{ store2.propiedad.propietario.direccion.ciudad }} en la calle
                {{ store2.propiedad.propietario.direccion.calle }} {{ store2.propiedad.propietario.direccion.numero }} en la
                región {{ store2.propiedad.propietario.direccion.region }}.
                La parte arrendataria fija domicilio en la ciudad y comuna de
                {{ store2.arrendatario.direccion.ciudad }} en la calle
                {{ store2.arrendatario.direccion.calle }} {{ store2.arrendatario.direccion.numero }} en la región
                {{ store2.arrendatario.direccion.region }}.
              </template>
            </template>
            <template v-else>
              La parte propietaria fija domicilio en la ciudad y comuna de
              {{ store2.propiedad.propietario.direccion.ciudad }} en la calle
              {{ store2.propiedad.propietario.direccion.calle }} {{ store2.propiedad.propietario.direccion.numero }} en la
              región {{ store2.propiedad.propietario.direccion.region }}.
            </template>
          </template>
          <template v-if="store2.arrendatario.direccion && !store2.propiedad.propietario.direccion">
            La parte arrendataria fija domicilio en la ciudad y comuna de
            {{ store2.arrendatario.direccion.ciudad }} en la calle
            {{ store2.arrendatario.direccion.calle }} {{ store2.arrendatario.direccion.numero }} en la región
            {{ store2.arrendatario.direccion.region }}.
          </template>
          <template v-if="store2.codeudor">

          <template v-if="store2.codeudor.direccion">
            <template v-if="store2.codeudor.direccion.ciudad === store2.propiedad.propietario.direccion.ciudad && store2.codeudor.direccion.region === store2.propiedad.propietario.direccion.region">
              La parte codeudor fija domicilio en la misma ciudad y comuna de
              {{ store2.codeudor.direccion.ciudad }} en la región de
              {{ store2.codeudor.direccion.region }}, en la dirección de
              {{ store2.codeudor.direccion.calle }} {{ store2.codeudor.direccion.numero }}.
            </template>
            <template v-else>
              La parte codeudor fija domicilio en la ciudad y comuna de
              {{ store2.codeudor.direccion.ciudad }} en la calle
              {{ store2.codeudor.direccion.calle }} {{ store2.codeudor.direccion.numero }} en la región
              {{ store2.codeudor.direccion.region }}.
            </template>
          </template>
          </template>
          Para todos los efectos legales que pudieren emanar del presente instrumento y se someten a la competencia y jurisdicción de sus Tribunales de Justicia, estableciendo, desde luego, como domicilios hábiles para recibir notificaciones asociadas o relacionadas al Contrato, aquellos especificados en el encabezamiento del Contrato.
        </p>
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
<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2"></div>
        <h5 id="Clausula4" class="col-8 card-title text-center">Clausula 4 OTROS PAGOS:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula4" v-model="store.clausula4edit"
            >Editar</material-checkbox
          >
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula4" :contenteditable="store.clausula4edit" class="text-justify">
          <template v-if="clausula4">
            La arrendataria asumirá la responsabilidad de pagar puntualmente y a la entidad
            correspondiente los siguientes servicios y gastos asociados al inmueble:
            <template v-for="(item, index) in Clausulas4">
              {{ item.label.toLowerCase() }}
              <template v-if="index !== Clausulas4.length - 1">,</template>
            </template>
            . Los comprobantes de pago deben ser enviados al siguiente correo electrónico:
            <template v-if="store2.propiedad.propietario.type === 'persona'">
              {{ store2.propiedad.propietario.email }}.
            </template>
            <template v-else> {{ store2.propiedad.propietario.representante.email }}. </template>
            En caso de un atraso de un mes en cualquiera de estos pagos, la arrendadora tendrá el
            derecho de solicitar a la compañía de servicios correspondiente la suspensión del
            servicio en cuestión.
          </template>
          <template v-else>
            En este caso, el propietario se hará cargo de todos los gastos comunes y otros pagos
            relacionados con el inmueble. Esto incluye, pero no se limita a, los servicios de cable,
            agua, gas, internet, luz y telefonía. El propietario se compromete a mantener estos
            servicios en funcionamiento y a asumir cualquier costo asociado a ellos.
          </template>
        </p>
      </div>
    </div>
    <div class="col-3 mt-3">
      <material-switch id="Clausula4" v-model:checked="clausula4" label="" name="Clausula4"
        >¿Desea que el arrendatario pague los gastos comunes?
      </material-switch>
      <material-choices
        v-if="clausula4"
        id="Clausulas4"
        v-model="Clausulas4"
        :options="optionsClausula4"
        is-multiple
        label="¿Que debe pagar el arrendatario?"
        name="Clausulas4"
        remove-item-button
      ></material-choices>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { useContratosStore } from '@/store/contratosStore.js'
import MaterialSwitch from '@/components/Material/MaterialSwitch.vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'

export default {
  name: 'Clausula4',
  components: { MaterialChoices, MaterialSwitch, MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
      store2: useContratosStore(),
      clausula4: false,
      Clausulas4: [],
      optionsClausula4: [
        { value: 'gastosComunes', label: 'Gastos comunes' },
        { value: 'cable', label: 'Cable' },
        { value: 'agua', label: 'Agua' },
        { value: 'gas', label: 'Gas' },
        { value: 'internet', label: 'Internet' },
        { value: 'luz', label: 'Luz' },
        { value: 'telefonia', label: 'Telefonía' }
      ]
    }
  },
  watch: {
    'this.$refs.Clausula4': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula4 = newVal.innerText
        }
      },
      deep: true,
      immediate: true
    }
  },

  mounted() {
    if (this.$refs.Clausula4) {
      this.store.clausula4 = this.$refs.Clausula4.innerText
    }
  }
}
</script>
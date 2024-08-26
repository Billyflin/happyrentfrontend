<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2 " />
        <h5 id="Clausula1" class="col-8 justify-content-center card-title text-center">Cláusula 1: PROPIEDAD</h5>
        <div class="col-2 ">
          <material-checkbox id="editClausula1" v-model="store.clausula1edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula1" :contenteditable="store.clausula1edit" class="text-justify">
          La arrendadora,
          <template v-if="store2.propiedad.propietario.type === 'persona'">
            {{ capitalize(store2.propiedad.propietario.tratamiento) }}
            {{ capitalize(store2.propiedad.propietario.nombre) }}
            {{ capitalize(store2.propiedad.propietario.apellidoPaterno) }}
            {{ capitalize(store2.propiedad.propietario.apellidoMaterno) }},
          </template>
          <template v-else>empresa
            <strong> {{ capitalize(store2.propiedad.propietario.nombre) }} </strong>,
            representante {{ capitalize(store2.propiedad.propietario.representante.tratamiento) }}
            {{ capitalize(store2.propiedad.propietario.representante.nombre) }}
            {{ capitalize(store2.propiedad.propietario.representante.apellidoPaterno) }}
            {{ capitalize(store2.propiedad.propietario.representante.apellidoMaterno) }},
          </template>
          declara ser la única propietaria de la propiedad ubicada en
          {{ store2.propiedad.direccion.calle }} {{ store2.propiedad.direccion.numero }},
          comuna de {{ store2.propiedad.direccion.ciudad }}, {{ store2.propiedad.direccion.region }},
          {{ store2.propiedad.direccion.pais }}.

          Esta propiedad se da en arrendamiento
          a la arrendataria, quien acepta su uso exclusivo para fines
          <template v-if="clausulas1.length === 0">de habitación</template>
          <template v-else>
            <template v-for="(item, index) in clausulas1">
              <template v-if="item.value === 'habitacional'">habitacionales</template>
              <template v-else-if="item.value === 'oficina'">de oficina</template>
              <template v-else-if="item.value === 'comercial'">comerciales</template>
              <template v-if="index !== clausulas1.length - 1">,</template>
            </template>
          </template>
          .
        </p>
      </div>
    </div>
    <div class="col-3">
      <material-choices id="clausula1"
                        v-model:model-value="clausulas1"
                        :options="optionsClausula1"
                        is-multiple
                        label="Selecciona el uso de la propiedad"
                        name="ChoiseClausula1"
                        remove-item-button
      />
    </div>
  </div>
</template>

<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { useContratosStore } from '@/store/contratosStore.js'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import { capitalize } from '../utils.js'

export default {
  name: 'Clausula1',
  methods: { capitalize },
  components: { MaterialChoices, MaterialCheckbox },

  data() {
    return {
      store: useNewContratoStore(),
      store2: useContratosStore(),
      optionsClausula1: [
        { value: 'habitacional', label: 'Habitacional' },
        { value: 'comercial', label: 'Comercial' },
        { value: 'oficina', label: 'Oficina' }
      ],
      clausulas1: [],
      selectedOption: null,
      checkboxValue: false
    }
  },

  watch: {
    'this.$refs.Clausula1': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula1 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula1) {
      this.store.clausula1 = this.$refs.Clausula1.innerText;
    }
  }
}
</script>

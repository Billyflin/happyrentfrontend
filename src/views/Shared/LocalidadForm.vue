<template>
  <div class="row">
    <div class="col-5 mt-4">
      <material-input
        id="calleDirection"
        v-model="direccion.calle"
        is-required
        label="Calle"
        placeholder="Calle"
        type="text"
        variant="static"
      />
    </div>
    <div class="col-2 mt-4">
      <material-input
        id="numeroDirection"
        v-model="direccion.numero"
        label="Número"
        placeholder="n°"
        type="number"
        variant="static"
      />
    </div>
    <div class="col-3 mt-4">
      <material-input
        id="detalleDirection"
        v-model="direccion.detalle"
        label="Detalle"
        placeholder="Edificio H"
        type="String"
        variant="static"
      />
    </div>
    <div class="col-2 mt-4">
      <material-input
        id="postal"
        v-model="direccion.codigoPostal"
        label="Postal"
        placeholder="Postal"
        type="postal"
        variant="static"
      />
    </div>
  </div>
  <div class="row mt-4">
    <material-choices
      id="Pais"
      v-model:text-choice="direccion.pais"
      :is-multiple="false"
      :options="paises"
      class="col-3"
      disabled
      label="Pais"
      name="pais"
    />
    <MaterialChoices
      id="Region"
      v-model:text-choice="direccion.region"
      v-model:value-choice="regionNum"
      :is-multiple="false"
      :options="regiones"
      class="col-5"
      label="Region"
      name="region"
    />
    <MaterialChoices
      id="Ciudad"
      v-model:text-choice="direccion.ciudad"
      :is-multiple="false"
      :options="ciudades"
      class="col-4"
      label="Comuna"
      name="ciudad"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { ref, watch } from 'vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'

export default {
  components: {
    MaterialChoices,
    MaterialInput
  },
  props: {
    modelValue: Object
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const direccion = ref(props.modelValue)
    watch(direccion, (newDireccion) => {
      emit('update:modelValue', newDireccion)
    })

    const v$ = useVuelidate()
    return { direccion, v$ }
  },
  data() {
    return {
      regiones: [],
      ciudades: [],
      regionNum: 1,
      paises: [
        { value: 1, label: 'Argentina' },
        { value: 38, label: 'Chile', selected: true }
      ]
    }
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/region/38`)
      .then((response) => {
        this.regiones = response.data.map((region) => ({
          value: region.numero,
          label: region.nombre,
          selected: region.nombre === 'Región Metropolitana de Santiago' ? true : undefined
        }))
        // console.log('Regiones: ', this.regiones)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  watch: {
    regionNum() {
      axios
        .get(
          `${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/ciudad/${this.regionNum}`
        )
        .then((response) => {
          this.ciudades = response.data.map((ciudad) => ({
            value: ciudad.nombre,
            label: ciudad.nombre
          }))
          // console.log('Ciudades: ', this.ciudades)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-6 mt-4">
      <material-input
        id="calleDirection"
        variant="static"
        label="Calle"
        type="text"
        is-required
        v-model="direccion.calle"
        placeholder="Calle"
      />
    </div>
    <div class="col-1"></div>
    <div class="col-1 mt-4">
      <material-input
        id="numeroDirection"
        type="number"
        variant="static"
        label="Número"
        v-model="direccion.numero"
        placeholder="n°"
      />
    </div>
    <div class="col-2"></div>
    <div class="col-2 mt-4">
      <material-input
        id="postal"
        type="postal"
        variant="static"
        v-model="direccion.codigoPostal"
        label="Postal"
        placeholder="Postal"
      />
    </div>
  </div>
  <div class="row mt-4">
    <material-choices class="col-3"
                      id="Pais"
                      :options="paises"
                      v-model:text-choice="direccion.pais"
                      label="Pais"
                      disabled
                      :is-multiple="false"
                      name="pais" />
    <MaterialChoices class="col-5"
                     id="Region"
                     :options="regiones"
                     label="Region"
                     v-model:text-choice="direccion.region"
                     v-model:value-choice="regionNum"
                     :is-multiple="false"
                     name="region" />
    <MaterialChoices class="col-4"
                     id="Ciudad"
                     v-model:text-choice="direccion.ciudad"
                     :options="ciudades"
                     label="Ciudad"
                     :is-multiple="false"
                     name="ciudad"
    />
  </div>
</template>

<script>
import axios from 'axios'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import { useVuelidate } from '@vuelidate/core'
import { ref, watch } from 'vue'

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
    axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/region/38`)
      .then(response => {
        this.regiones = response.data.map(region => ({
          value: region.numero,
          label: region.nombre,
          selected: region.nombre === 'Región Metropolitana de Santiago' ? true : undefined
        }))
        // console.log('Regiones: ', this.regiones)
      })
      .catch(error => {
        console.error(error)
      })
  },
  watch: {
    regionNum() {
      console.log('Region: ', this.regionNum)
      axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/ciudad/${this.regionNum}`)
        .then(response => {
          this.ciudades = response.data.map(ciudad => ({
            value: ciudad.nombre,
            label: ciudad.nombre
          }))
          // console.log('Ciudades: ', this.ciudades)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}

</script>

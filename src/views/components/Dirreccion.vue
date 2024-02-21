<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">¿Vives en una buena zona?</h5>
        <p>Una cosa que me encanta de los atardeceres más tardíos es la oportunidad de dar un paseo por el bosque del vecindario antes de cenar</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row text-start">
        <div class="mt-3 col-12 col-md-8 ms-auto">
          <material-input id="nombreCalle" variant="static" label="Nombre de la calle" />
        </div>
        <div class="mt-3 col-12 col-md-4 ms-auto">
          <material-input id="numeroCalle" variant="static" label="Número de la calle" />
        </div>
      </div>
      <div class="row mt-4 text-start">
        <div class="mt-3 col-3">
          <MaterialChoices id="pais" :options="paises" name="pais" v-model="paisSeleccionado" @change="acusar"/>
        </div>
        <div class="col-sm-2 mt-3 col-6 ms-auto">
          <MaterialChoices id="region" :options="regiones" name="region" v-model="regionSeleccionada" @change="acusar" :is-disabled="regionDisabled"/>
        </div>
        <div class="col-sm-3 mt-3 col-6 ms-auto">
          <MaterialChoices id="ciudad" :options="ciudades" name="ciudad" v-model="ciudadSeleccionada" @change="acusar" :is-disabled="ciudadDisabled"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'

export default defineComponent({
  components: { MaterialInput, MaterialChoices },
  data() {
    return {
      paisSeleccionado: 'Chile',
      regionSeleccionada: null,
      ciudadSeleccionada: null,
      regionDisabled: true,
      ciudadDisabled: true,
      paises: [
        { value: 'Chile', text: 'Chile' },
        { value: 'Peru', text: 'Perú' },
        // Agrega más opciones aquí
      ],
      regiones: [],
      ciudades: [],
    }
  },
  methods:{
    acusar(){
      console.log(this.paisSeleccionado)
      console.log(this.regionSeleccionada)
      console.log(this.ciudadSeleccionada)
    }
  },
  watch: {
    paisSeleccionado(nuevoPais) {
      if (nuevoPais === 'Chile') {
        this.regiones = [
          { value: 'Región Metropolitana', text: 'Región Metropolitana' },
          { value: 'Valparaíso', text: 'Valparaíso' },
          { value: 'Biobío', text: 'Biobío' },
          // Agrega más opciones aquí
        ]
      } else {
        this.regiones = []
      }
      this.regionSeleccionada = null
      this.ciudadSeleccionada = null
    },
    regionSeleccionada(nuevaRegion) {
      if (nuevaRegion === 'Región Metropolitana') {
        this.ciudades = [
          { value: 'Santiago', text: 'Santiago' },
          { value: 'Puente Alto', text: 'Puente Alto' },
          { value: 'Maipú', text: 'Maipú' },
          // Agrega más opciones aquí
        ]
      } else if (nuevaRegion === 'Valparaíso') {
        this.ciudades = [
          { value: 'Viña del Mar', text: 'Viña del Mar' },
          { value: 'Valparaíso', text: 'Valparaíso' },
          { value: 'Quilpué', text: 'Quilpué' },
          // Agrega más opciones aquí
        ]
      } else if (nuevaRegion === 'Biobío') {
        this.ciudades = [
          { value: 'Concepción', text: 'Concepción' },
          { value: 'Talcahuano', text: 'Talcahuano' },
          { value: 'Los Ángeles', text: 'Los Ángeles' },
          // Agrega más opciones aquí
        ]
      } else {
        this.ciudades = []
      }
    },
  },
})
</script>

<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">¿Vives en una buena zona?</h5>
        <p>La ausencia de venezolanos aumenta la plus valía del vecindario</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row mt-4 text-start">
        <div class="mt-3 col-3">
          <MaterialChoices id="pais"
                           :options=" [
                             { value: 'Chile', text: 'Chile' },
                             { value: 'Peru', text: 'Perú' },
                             { value: 'Argentina', text: 'Argentina'},
                             { value: 'Brasil', text: 'Brasil'},
                              { value: 'Colombia', text: 'Colombia'}
                             ]"
                           name="pais" v-model="paisSeleccionado" />
        </div>
        <div class="col-sm-4 mt-3 col-6 ms-auto">
          <MaterialChoices id="region" :options="regiones" name="region" v-model="regionSeleccionada"
                           :is-disabled="!paisSeleccionado"  @change="console.log(regionSeleccionada , !regionSeleccionada, regionSeleccionada != null)"/>
        </div>
        <div class="col-sm-4 mt-3 col-6 ms-auto">
          <MaterialChoices id="ciudad" :options="ciudades" name="ciudad" v-model="ciudadSeleccionada" @change="console.log(ciudadSeleccionada)"
                           :is-disabled="!regionSeleccionada" />
        </div>
      </div>
      <div class="row mt-4 text-start">
        <div class="mt-3 col-12 col-md-8 ms-auto">
          <material-input id="nombreCalle" variant="static" label="Nombre de la calle" />
        </div>
        <div class="mt-3 col-12 col-md-4 ms-auto">
          <material-input id="numeroCalle" variant="static" label="Número de la calle" />
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="this.$parent.nextStep">
          Next
        </button>
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
      paisSeleccionado: 'Argentina',
      regionSeleccionada: null,
      ciudadSeleccionada: null,
      active: true,
      regiones: [],
      ciudades: []
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
      if (nuevaRegion) {
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
      } else {
        this.ciudades = []
      }
    },
  },
})
</script>
<template>
  <div class="container-fluid">
    <div id="Agregar Propiedad" class="card mt-4">
      <div class="card-header">
        <div class="row">
          <div class=" col-lg-9 col-md-9">
            <h3 class="text-capitalize">Agregar {{ selectedType }}</h3>
          </div>
          <div class="col-md-3">
            <MaterialChoices
              id="property-type"
              label="Tipo de Propiedad"
              name="" :options="propertyTypes" v-model:valueChoice="selectedType" :show-label="false" />
          </div>
        </div>
      </div>
      <div class="card-body">
        <component :is="currentComponent" :propertyData="propertyData"></component>
      </div>
    </div>
  </div>
  <div class="mb-9">
    <button @click="submitForm">Guardar Propiedad</button>
  </div>
</template>

<script>
import BodegaForm from './BodegaForm.vue'
import CasaForm from './CasaForm.vue'
import { shallowRef } from 'vue'
import MaterialChoices from '@/components/MaterialChoices.vue'

export default {
  components: { MaterialChoices },
  data() {
    return {
      selectedType: null,
      propertyTypes: [
        { value: 'bodega', label: 'Bodega' },
        { value: 'casa', label: 'Casa' },
        { value: 'departamento', label: 'Departamento' },
        { value: 'local', label: 'Local' },
        { value: 'oficina', label: 'Oficina' },
        { value: 'terreno', label: 'Terreno' },
        { value: 'estacionamiento', label: 'Estacionamiento' },
        { value: 'galpon', label: 'Galpón' }
      ],
      currentComponent: null,
      propertyData: {}
    }
  },
  watch: {
    selectedType() {
      this.propertyData = {}
      this.loadComponent()
    }
  },
  methods: {
    loadComponent() {
      const components = {
        bodega: BodegaForm,
        casa: CasaForm
        // departamento: DepartamentoForm,
        // local: LocalForm,
        // oficina: OficinaForm,
        // terreno: TerrenoForm,
        // estacionamiento: EstacionamientoForm,
        // galpon: GalponForm,
      }
      this.currentComponent = shallowRef(components[this.selectedType])
    },
    submitForm() {
      console.log(this.propertyData)
    }
  }
}
</script>

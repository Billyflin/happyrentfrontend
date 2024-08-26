<template>
  <div class="card h-100">
    <div class="card-header pb-0 px-4">
      <div class="row pb-0">
        <div class="col-md-8">
          <h6 class="mb-0">Servicios de la Propiedad</h6>
        </div>
        <div v-if="servicios.length > 0" class="col-md-4 d-flex justify-content-end align-items-center">
          <a href="#" class="align-items-center text-decoration-none icon-link" @click="actualizarServicios">
            <span class="material-symbols-outlined text-md">
              refresh
            </span>
            <small>Actualizar</small>
          </a>
        </div>
      </div>
    </div>
    <div class="card-body pt-0 p-3">
      <div v-if="loading" class="col-lg-12 position-relative z-index-2">
        <div class="d-flex justify-content-center align-items-center" style="height: 15vh;">
          <div class="spinner-border text-primary" role="status" style="width:3rem; height: 3rem;">
            <span class="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
      <ul v-else class="list-group">
        <li
          v-for="servicio in servicios"
          :id="servicio.numeroServicio"
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
        <span class="material-symbols-outlined me-3 d-flex align-items-center justify-content-center">
          {{ getIcono(servicio.tipoServicio) }}
        </span>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">{{ servicio.numeroServicio }}</h6>
              <span class="text-xs">{{ servicio.proveedor }}</span>
            </div>
          </div>
          <div class="d-flex flex-column text-end">
            <h6 :class="['mb-1', servicio.estadoPago === 'DEUDA' ? 'text-danger' : 'text-success', 'text-sm'] ">
              $ {{ servicio.deudaActual }}
            </h6>
            <span class="text-xs">{{ servicio.estadoPago }}</span>
          </div>
        </li>
      </ul>
      <div v-if="!loading" class="d-sm-flex justify-content-between">
        <div></div>
        <div class="d-flex">
            <material-button
              color="dark"
              size="sm"
              variant="outline"
            >Agregar
            </material-button
            >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { usePropiedadesStore } from '@/store/propiedadesStore.js'
import { getPropiedadServices } from '@/servicios/propiedadesService.js'
import MaterialButton from '@/components/Material/MaterialButton.vue'

export default {
  name: 'ServiciosItem',
  components: { MaterialButton },
  methods: {
    getIcono(tipoServicio) {
      switch (tipoServicio.toLowerCase()) {
        case 'agua':
          return 'water_drop'
        case 'luz':
          return 'lightbulb'
        case 'gas':
          return 'local_fire_department'
        default:
          return 'help_outline'
      }
    },
    actualizarServicios() {
      this.loading = true
      getPropiedadServices(this.store.propiedad.id).then((response) => {
        this.servicios = response.data
        this.loading = false
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  mounted() {
    this.actualizarServicios()
  },
  data() {
    return {
      loading: false,
      store: usePropiedadesStore(),
      servicios: []
    }
  }
}
</script>
<template>
  <div class="card h-100">
    <div class="card-header pb-0 px-4">
      <div class="row pb-0">
        <div class="col-md-8">
          <h6 class="mb-0">Servicios de la Propiedad</h6>
        </div>
        <div
          v-if="servicios.length > 0"
          class="col-md-4 d-flex justify-content-end align-items-center"
        >
          <a
            class="align-items-center text-decoration-none icon-link"
            href="#"
            @click="actualizarServicios"
          >
            <span class="material-symbols-outlined text-md"> refresh </span>
            <small>Actualizar</small>
          </a>
        </div>
      </div>
    </div>
    <div class="card-body pt-0 p-3">
      <div v-if="loading" class="col-lg-12 position-relative z-index-2">
        <div class="d-flex justify-content-center align-items-center" style="height: 15vh">
          <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem">
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
            <span
              class="material-symbols-outlined me-3 d-flex align-items-center justify-content-center"
            >
              {{ getIcono(servicio.tipoServicio) }}
            </span>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">{{ servicio.numeroServicio }}</h6>
              <span class="text-xs">{{ servicio.proveedor }}</span>
            </div>
          </div>
          <div class="d-flex flex-column text-end">
            <h6
              :class="[
                'mb-1',
                servicio.estadoPago === 'DEUDA' ? 'text-danger' : 'text-success',
                'text-sm'
              ]"
            >
              $ {{ formatNumberWithDots(servicio.deudaActual) }}
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
            data-bs-target="#addServiceModal"
            data-bs-toggle="modal"
            size="sm"
            variant="outline"
            >Administrar Servicios
          </material-button>
          <div
            id="addServiceModal"
            aria-hidden="true"
            aria-labelledby="addServiceModalLabel"
            class="modal fade"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 id="addServiceModalLabel" class="modal-title fs-5">Servicios</h1>
                  <button
                    aria-label="Close"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    type="button"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-dark text-sm">
                    Agrega un nuevo servicio a la propiedad, debes probar si el servicio funciona
                    antes de agregarlo,
                    <strong>para las cuentas de agua no debes incluir el digito verificador</strong>
                  </p>
                  <material-alert v-if="respuestaTest" color="danger" variant="outline">
                    Happrent no verifica la existencia del numero de servicio en la empresa
                  </material-alert>
                  <div class="row ps-4">
                    <div class="col">
                      <material-dropdown
                        v-model="proveedorServicio"
                        :items="[
                          'AGUAS_ANDINAS',
                          'AGUAS_ARAUCANIA',
                          'AGUAS_MAGALLANES',
                          'CGE',
                          'FRONTEL',
                          'ENEL',
                          'SAESA',
                          'METROGAS'
                        ]"
                      >
                      </material-dropdown>
                    </div>
                    <div class="col">
                      <material-input
                        v-model="numeroServicio"
                        label="Número de Servicio"
                        type="text"
                      />
                    </div>
                    <div class="col">
                      <material-button color="dark" variant="gradient" @click="probarServicio"
                        >Probar Servicio
                      </material-button>
                    </div>
                  </div>
                  <div v-if="loadingTest" class="col-lg-12 position-relative z-index-2">
                    <div
                      class="d-flex justify-content-center align-items-center"
                      style="height: 15vh"
                    >
                      <div
                        class="spinner-border text-primary"
                        role="status"
                        style="width: 3rem; height: 3rem"
                      >
                        <span class="visually-hidden">Cargando...</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="respuestaTest && !loadingTest" class="row ps-4 mb-6">
                    <ul class="list-group">
                      <h6 class="text-dark text-sm">Respuesta del servicio</h6>
                      <p>Si estas conforme con la respuesta, agregala a tu propiedad</p>
                      <li
                        class="list-group-item border-0 d-flex justify-content-between mb-2 border-radius-lg bg-success-subtle"
                      >
                        <div class="d-flex align-items-center">
                          <span
                            class="material-symbols-outlined me-3 d-flex align-items-center justify-content-center"
                          >
                            {{ getIcono(respuestaTest.tipoServicio) }}
                          </span>
                          <div class="d-flex flex-column">
                            <h6 class="mb-1 text-dark text-sm">
                              {{ respuestaTest.numeroServicio }}
                            </h6>
                            <span class="text-xs">{{ respuestaTest.proveedor }}</span>
                          </div>
                        </div>
                        <!-- Contenedor de montos, fechas y botón -->
                        <div class="d-flex align-items-center ms-auto">
                          <div
                            v-if="respuestaTest.fechaVencimiento"
                            class="d-flex flex-column text-end me-4"
                          >
                            <span class="text-xs">Fecha Vencimiento</span>
                            <h6 class="mb-1 text-dark text-sm">
                              {{ formatDate(respuestaTest.fechaVencimiento) }}
                            </h6>
                          </div>
                          <div class="d-flex flex-column text-end me-4">
                            <h6
                              :class="[
                                'mb-1',
                                respuestaTest.estadoPago === 'DEUDA'
                                  ? 'text-danger'
                                  : 'text-success',
                                'text-sm'
                              ]"
                            >
                              $ {{ formatNumberWithDots(respuestaTest.deudaActual) }}
                            </h6>
                            <span class="text-xs">{{ respuestaTest.estadoPago }}</span>
                          </div>
                          <div>
                            <material-button
                              aria-label="Close"
                              color="success"
                              data-bs-dismiss="modal"
                              size="sm"
                              variant="outline"
                              @click="guardarServicio()"
                            >
                              Agregar
                            </material-button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="row ps-4">
                    <h6>Servicios de la propiedad</h6>
                    <ul class="list-group">
                      <li
                        v-for="servicio in servicios"
                        :id="servicio.numeroServicio"
                        class="list-group-item border-0 d-flex justify-content-between align-items-center mb-2 border-radius-lg"
                      >
                        <!-- Icono y detalles del servicio -->
                        <div class="d-flex align-items-center">
                          <span
                            class="material-symbols-outlined me-3 d-flex align-items-center justify-content-center"
                          >
                            {{ getIcono(servicio.tipoServicio) }}
                          </span>
                          <div class="d-flex flex-column">
                            <h6 class="mb-1 text-dark text-sm">{{ servicio.numeroServicio }}</h6>
                            <span class="text-xs">{{ servicio.proveedor }}</span>
                          </div>
                        </div>

                        <!-- Contenedor de montos, fechas y botón -->
                        <div class="d-flex align-items-center ms-auto">
                          <!-- Monto Último Pago -->
                          <div
                            v-if="servicio.montoUltimoPago"
                            class="d-flex flex-column text-end me-4"
                          >
                            <span class="text-xs">Monto Último Pago</span>
                            <h6 class="mb-1 text-dark text-sm">
                              {{ formatNumberWithDots(servicio.montoUltimoPago) }}
                            </h6>
                          </div>

                          <!-- Fecha Último Pago -->
                          <div
                            v-if="servicio.fechaUltimoPago"
                            class="d-flex flex-column text-end me-4"
                          >
                            <span class="text-xs">Fecha Último Pago</span>
                            <h6 class="mb-1 text-dark text-sm">
                              {{ formatDate(servicio.fechaUltimoPago) }}
                            </h6>
                          </div>

                          <!-- Fecha Vencimiento -->
                          <div
                            v-if="servicio.fechaVencimiento"
                            class="d-flex flex-column text-end me-4"
                          >
                            <span class="text-xs">Fecha Vencimiento</span>
                            <h6 class="mb-1 text-dark text-sm">
                              {{ formatDate(servicio.fechaVencimiento) }}
                            </h6>
                          </div>

                          <!-- Estado del Pago y Deuda Actual -->
                          <div class="d-flex flex-column text-end me-4">
                            <h6
                              :class="[
                                'mb-1',
                                servicio.estadoPago === 'DEUDA' ? 'text-danger' : 'text-success',
                                'text-sm'
                              ]"
                            >
                              $ {{ formatNumberWithDots(servicio.deudaActual) }}
                            </h6>
                            <span class="text-xs">{{ servicio.estadoPago }}</span>
                          </div>

                          <!-- Botón de Eliminar -->
                          <div>
                            <material-button
                              aria-label="Close"
                              color="danger"
                              data-bs-dismiss="modal"
                              size="sm"
                              variant="outline"
                              @click="eliminarServicio(servicio.id)"
                            >
                              Eliminar
                            </material-button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePropiedadesStore } from '@/store/propiedadesStore.js'
import {
  addPropiedadService,
  deletePropiedadService,
  getPropiedadServices,
  testPropiedadService
} from '@/servicios/propiedadesService.js'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import { formatDate, formatNumberWithDots } from '@/views/NuevoContrato/utils.js'
import MaterialDropdown from '@/components/Material/MaterialDropdown.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { useNotificationsStore } from '@/store/notifications.js'
import MaterialAlert from '@/components/Material/MaterialAlert.vue'

export default {
  name: 'ServiciosItem',
  components: { MaterialAlert, MaterialInput, MaterialDropdown, MaterialButton },
  methods: {
    formatDate,
    formatNumberWithDots,
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
      getPropiedadServices(this.store.propiedad.id)
        .then((response) => {
          console.log(response.data)
          this.servicios = response.data
          this.loading = false
        })
        .catch((err) => {
          console.error(err)
        })
    },
    probarServicio() {
      this.loadingTest = true
      testPropiedadService(this.numeroServicio, this.proveedorServicio)
        .then((response) => {
          this.loadingTest = false
          this.respuestaTest = response.data
          console.log(response.data)
        })
        .catch((err) => {
          this.loadingTest = false
          console.error(err)
        })
    },
    guardarServicio() {
      addPropiedadService(this.store.propiedad.id, this.numeroServicio, this.proveedorServicio)
        .then((response) => {
          this.respuestaTest = null
          this.numeroServicio = null
          console.log(response.data)
          this.store4.createNotification('success', 'Servicio Agregado', response.data)
          this.actualizarServicios()
        })
        .catch((err) => {
          console.error(err)
        })
      console.log('guardar servicio')
    },
    eliminarServicio(id) {
      deletePropiedadService(id)
        .then((response) => {
          console.log(response.data)
          this.store4.createNotification('success', 'Servicio Eliminado', response.data)
          this.actualizarServicios()
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  mounted() {
    this.actualizarServicios()
  },
  data() {
    return {
      proveedorServicio: 'AGUAS_ANDINAS',
      respuestaTest: null,
      numeroServicio: null,
      loading: false,
      loadingTest: false,
      store: usePropiedadesStore(),
      store4: useNotificationsStore(),
      servicios: []
    }
  }
}
</script>

<script>
import { usePropiedadesStore } from '@/store/propiedadesStore.js'
import { getContratoByPropiedadId } from '@/servicios/contratosService.js'
import router from '@/router/index.js'
import { formatDate, formatDateTime } from '@/views/NuevoContrato/utils.js'
import DatosContrato from '@/views/DetallesContrato/components/DatosContrato.vue'
import PropietarioDetallesPropiedad from '@/views/Propiedades/PropietarioDetallesPropiedad.vue'
import TimeLineContrato from '@/views/DetallesContrato/components/TimeLineContrato.vue'
import PanelControlContrato from '@/views/DetallesContrato/components/PanelControlContrato.vue'
import RowRentaDetalleContrato from '@/views/DetallesContrato/RowRentaDetalleContrato.vue'
import DescargarContrato from '@/views/DetallesContrato/DescargarContrato.vue'
import GraficoReajuste from '@/views/DetallesContrato/GraficoReajuste.vue'
import MaterialAlert from '@/components/Material/MaterialAlert.vue'
import { useNotificationsStore } from '@/store/notifications.js'

export default {
  name: 'DetallesContrato',
  components: {
    MaterialAlert,
    GraficoReajuste,
    DescargarContrato,
    RowRentaDetalleContrato,
    PanelControlContrato,
    TimeLineContrato,
    PropietarioDetallesPropiedad,
    DatosContrato
  },
  data() {
    return {
      store: usePropiedadesStore(),
      store4: useNotificationsStore(),
      loading: false,
      contrato: null
    }
  },
  watch: {
    contrato: function () {
      console.log(this.contrato)
      if (!this.contrato) {
        router.push({ name: 'Propiedades' })
      }
    }
  },
  computed: {
    columnClass() {
      return this.contrato.codeudor ? 'col-lg-4' : 'col-lg-6'
    }
  },
  methods: {
    formatDate,
    formatDateTime,
    fetchItems: async function () {
      try {
        if (!this.store.propiedad) {
          this.store4.addNotification({
            message: 'No se ha encontrado la propiedad',
            type: 'danger'
          })
          await router.push({ name: 'Propiedades' })
        }
        this.loading = true
        const response = await getContratoByPropiedadId(this.store.propiedad.id)
        console.log(response)
        this.contrato = response.data
        this.store.propiedad = response.data
        this.loading = false
        console.log(this.contrato)
      } catch (e) {
        console.error(e)
        this.loading = false
      }
    }
  },
  async beforeMount() {
    await this.fetchItems()
  }
}
</script>

<template>
  <div v-if="contrato && !loading" class="container-fluid">
    <div class="row mb-4">
      <div class="col-lg-6 col-12 mt-md-0 mt-4"></div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <RowRentaDetalleContrato :moneda="contrato.moneda" :renta="contrato.renta" />
          </div>
        </div>
      </div>
    </div>
    <material-alert class="font-weight-light" color="danger" dismissible>
      <span
        >El arrendatario no ha pagado la renta correspondiente al mes de
        <strong>{{ formatDate(Date.now()) }}</strong>
      </span>
    </material-alert>
    <div v-if="store.propiedad" class="row">
      <div class="col-lg-8">
        <div v-if="store.propiedad" class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-8"></div>
        </div>
        <DatosContrato
          :create-date="contrato.createDate"
          :duracion-meses="contrato.duracionMeses"
          :duracionMeses="contrato.duracionMeses"
          :fecha-termino="contrato.fechaTermino"
          :fechaInicio="contrato.fechaInicio"
          :fechaTermino="contrato.fechaTermino"
          :garantia="contrato.garantia"
          :moneda="contrato.moneda"
          :periodo-reajuste-contrato="contrato.periodoReajusteContrato"
          :periodoReajusteContrato="contrato.periodoReajusteContrato"
          :plazoAvisoDias="contrato.plazoAvisoDias"
          :renta="contrato.renta"
          :valor-corretaje="contrato.valorCorretaje"
          :valorCorretaje="contrato.valorCorretaje"
        />

        <GraficoReajuste />
      </div>
      <div class="col-lg-4">
        <div v-if="store.propiedad">
          <DescargarContrato :contrato-id="contrato.id" />
          <div class="mt-4">
            <PanelControlContrato :contrato="contrato" />
          </div>
          <div class="mt-4">
            <TimeLineContrato
              :contrato="contrato"
              :format-date-time="formatDateTime(store.propiedad.createDate)"
              :store="store"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="contrato" class="row mt-4">
      <div :class="columnClass">
        <PropietarioDetallesPropiedad :propietario="contrato.propiedad.propietario" />
      </div>
      <div :class="columnClass">
        <PropietarioDetallesPropiedad
          :propietario="contrato.arrendatario"
          title="Detalles del Arrendatario"
        />
      </div>
      <div v-if="contrato.codeudor" class="col-lg-4">
        <PropietarioDetallesPropiedad
          :propietario="contrato.codeudor"
          title="Detalles del Codeudor"
        />
      </div>
    </div>
  </div>
  <div v-else class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-center align-items-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando datos del contrato...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="table-responsive">
    <table ref="datatableSearch" class="table table-flush">
      <thead class="thead-light">
      <tr>
        <th class="text-center">Estado</th>
        <th class="text-center">Tipo Propiedad</th>
        <th class="text-center">Fecha Creación</th>
        <th class="text-center">Fecha Inicio</th>
        <th class="text-center">Fecha Término</th>
        <th class="text-center">Renta</th>
        <th class="text-center">Acciones</th>
      </tr>
      </thead>
      <tbody v-if="items">
      <tr v-for="item in items" :key="item.id">
        <td class="text-sm font-weight-bold text-center align-middle">
          <div class="d-flex align-items-center justify-content-center">
            <material-button v-if="item.activo === true"
                             class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                             color="success"
                             variant="outline"
            >
              <i aria-hidden="true" class="fas fa-check"></i>
            </material-button>
            <material-button v-else
                             class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                             color="danger"
                             variant="outline">

              <i aria-hidden="true" class="fas fa-times"></i>
            </material-button>
            <span>{{ item.activo ? 'Activo' : 'Inactivo' }}</span>
          </div>
        </td>
        <td class="text-sm font-weight-normal text-center">{{ item.propiedad.tipoPropiedad.tipo }}</td>
        <td class="text-sm font-weight-normal text-center">{{ item.fechaCreacion }}</td>
        <td class="text-sm font-weight-normal text-center">{{ item.fechaInicio }}</td>
        <td class="text-sm font-weight-normal text-center">{{ item.fechaTermino }}</td>
        <td class="text-sm font-weight-normal text-center">{{ item.renta }}</td>
        <td class="d-flex align-items-center text-sm">
          <a class="btn btn-link text-dark text-sm mb-0 px-0 ms-4" @click="getReport(item.id)">
            <i aria-hidden="true" class="fas fa-file-pdf text-lg me-1"></i>
            PDF
          </a>
          <a class="btn btn-link text-dark text-sm mb-0 px-0 ms-4" @click="verDetalles(item.uuid)">
            <i aria-hidden="true" class="fa fa-eye text-lg me-1"></i>
            Ver
          </a>
        </td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import MaterialButton from '@/components/MaterialButton.vue'

export default {
  name: 'TablaContratos',
  components: { MaterialButton },
  data() {
    return {
      items: [],
      reportUrl: `${import.meta.env.VITE_SERVER_URL}:8080/contrato/reporte/`
    }
  },
  methods: {
    verDetalles(uuid) {
      console.log(uuid)
      this.$router.push({ name: 'detallesContrato', params: { uuid: uuid } })
    }


    , async getReport(id) {
      try {
        const response = await axios.get(`${this.reportUrl}${id}`, { responseType: 'blob' })
        const file = new Blob([response.data], { type: 'application/pdf' })
        const fileURL = URL.createObjectURL(file)
        window.open(fileURL)
      } catch (e) {
        console.error(e)
      }
    },
    async fetchItems() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/contrato`)
        console.log(response.data)
        this.items = response.data
      } catch (e) {
        console.error(e)
      }
    }
  },
  async beforeMount() {
    await this.fetchItems()
  }
}
</script>

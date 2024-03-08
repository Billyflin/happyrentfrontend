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
        <th class="text-center"> Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td class="text-sm font-weight-bold text-center align-middle">
          <div class="d-flex align-items-center justify-content-center">
            <material-button
                color="success"
                variant="outline"
                class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-check" aria-hidden="true"></i>
            </material-button>
            <span>{{ item.estado }}</span>
          </div>
        </td>
        <td class="text-sm font-weight-normal text-center">{{ item.propiedad.tipoPropiedad.tipo }}</td>
        <td class="text-sm font-weight-normal text-center">{{ item.fechaCreacion }}</td>
        <td class="text-sm font-weight-normal text-center">{{ item.fechaInicio }}</td>
        <td class="text-sm font-weight-normal text-center">{{ item.fechaTermino }}</td>
        <td class="text-sm font-weight-normal text-center">{{ item.renta }}</td>
        <td class="d-flex align-items-center text-sm">
          <a @click="getReport(item.id)" class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
            <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
            PDF
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {useAuthStore} from "@/store/index.js";
import axios from "axios";
import MaterialButton from "@/components/MaterialButton.vue";

export default {
  name: 'TablaContratos',
  components: {MaterialButton},
  data() {
    return {
      items: [],
      reportUrl: `${import.meta.env.VITE_SERVER_URL}:8080/contrato/reporte/`
    }
  },
  methods: {
    async getReport(id) {
      try {
        const response = await axios.get(`${this.reportUrl}${id}`, {responseType: 'blob'})
        const file = new Blob([response.data], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      } catch (e) {
        console.error(e)
      }
    },
    async fetchItems() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/contrato/user/${useAuthStore().userInfo.id}`)
        this.items = response.data
      } catch (e) {
        console.error(e)
      }
    }
  },
  async beforeMount() {
    await this.fetchItems();
  },
}
</script>

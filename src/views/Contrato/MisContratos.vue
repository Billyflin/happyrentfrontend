<template>
  <div class="py-4 container-fluid">
    <div class="d-sm-flex justify-content-between">
      <div>
        <router-link to="/nuevoContrato">
          <material-button color="success" variant="gradient">Nuevo Contrato</material-button>
        </router-link>
      </div>

      <barra-contratos></barra-contratos>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <div class="card">


          <!-- Card header -->
          <div class="card-header">
            <h5 class="mb-0">Mis Contratos</h5>
            <p class="mb-0 text-sm">
              Aquí encontrarás un listado de tus contratos
            </p>
          </div>
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
              <tr v-for="(item, index) in items" :key="index">
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
                  <a @click="logButtonClick" class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
                    PDF
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { DataTable } from 'simple-datatables'
import MaterialButton from '@/components/MaterialButton.vue'
import axios from "axios";
import {useAuthStore} from "@/store/index.js";
import BarraContratos from "@/views/Contrato/components/BarraContratos.vue";

export default {
  name: 'DataTables',
  components: {BarraContratos, MaterialButton },
  data() {
    return {
      items: [],
      dataTable: null,
      reportUrl:`${import.meta.env.VITE_SERVER_URL}:8080/contrato/reporte/`
    }
  },
  methods: {
    logButtonClick() {
      console.log('EL BOTON FUNCIONA');
    }
  },
  async mounted() {
    console.log(useAuthStore().userInfo.id)

    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/contrato/user/${useAuthStore().userInfo.id}`)
      this.items = response.data
      console.log(response.data)
    } catch (e) {
      console.log(e)
    }
  },
  watch: {
    items() {
      this.$nextTick(() => {
        if (this.dataTable) {
          this.dataTable.destroy()
        }
        this.dataTable = new DataTable(this.$refs.datatableSearch)
      })
    }
  },
  beforeUnmount() {
    if (this.dataTable) {
      this.dataTable.destroy()
    }
  }
}
</script>
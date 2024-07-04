<template>
  <div class="py-4 container-fluid">
    <div class="col-12">
      <div class="card">
        <div class="pb-0 card-header d-flex align-items-center justify-content-between">
          <h5>Contratos</h5>
        </div>
        <MyDataTableContratos
          :deletable="true"
          :editable="true"
          :headers="headers"
          :isLoading="isLoading"
          :tableData="tableData"
        />
      </div>
    </div>
  </div>
</template>


<script>
import MyDataTableContratos from '@/views/Contrato/components/MyDataTableContratos.vue'
import axios from 'axios'

export default {
  components: { MyDataTableContratos },
  data() {
    return {
      headers: [
        { key: 'propietarioNombre', title: 'Nombre del Propietario' },
        { key: 'direccion', title: 'Dirección' },
        { key: 'renta', title: 'Renta' },
        { key: 'fechaInicio', title: 'Fecha de Inicio' },
        { key: 'fechaTermino', title: 'Fecha de Término' },
        { key: 'duracionMeses', title: 'Duración (Meses)' },
        { key: 'activo', title: 'Activo' },
        { key: 'propietarioTipo', title: 'Tipo de Propietario' },
        { key: 'propiedadTipo', title: 'Tipo de Propiedad' },
        { key: 'propiedadArrendado', title: 'Propiedad Arrendada' },
        { key: 'createDate', title: 'Fecha de Creación' }
      ],
      tableData: [], // Aquí se asignarán los datos de la API
      isLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/contrato/contratos`)
        this.tableData = response.data
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}

</script>

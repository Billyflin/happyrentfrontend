<template>
  <div class="py-4 container-fluid">
    <div class="col-lg-3">
      <router-link class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
                   to="/propiedades">
  <span class="material-symbols-outlined mx-2">
    arrow_back
  </span>
        Volver
      </router-link>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="pb-0 card-header d-flex align-items-center justify-content-between">
          <h5>Contratos</h5>
        </div>
        <MyDataTableContratos
          :details="true"
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
import { getContratosProyection } from '@/servicios/contratosService.js'
import { useAppStore } from '@/store/appStore.js'
import { onMounted, onUnmounted } from 'vue'


export default {
  components: { MyDataTableContratos },
  data() {
    return {
      headers: [
        { key: 'propietarioNombre', title: 'Nombre del Propietario' },
        { key: 'direccion', title: 'Dirección' },
        { key: 'renta', title: 'Renta' },
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
        const response = await getContratosProyection()
        this.tableData = response.data
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  },
  setup() {
    const store = useAppStore()


    onMounted(() => {
      store.toggleSidenav()
      // toggleHideConfig()
    })

    onUnmounted(() => {
      store.toggleSidenav()
      // toggleHideConfig()
    })
  }
}

</script>

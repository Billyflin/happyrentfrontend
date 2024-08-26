<template>
  <div v-if="tableData.length > 0" class="table-responsive">
    <table ref="dataTablePersona" class="table table-flush table-hover">
      <!-- Aquí se gestionan los encabezados y el cuerpo de la tabla mediante DataTable -->
    </table>
  </div>
  <div v-else-if="isLoading" class="text-center mt-7 mb-6">
    <h6>Cargando datos...</h6>
    <div class="spinner-border text-primary" role="status" style="width: 4rem; height: 4rem">
      <span class="visually-hidden">Cargando...</span>
    </div>
  </div>
  <div v-else-if="error" class="text-center mt-7 mb-6">
    <h6>Error al cargar los datos.</h6>
  </div>
  <div v-else class="text-center mt-7 mb-6">
    <h6>No hay datos para mostrar.</h6>
  </div>
</template>

<script>
import { DataTable } from 'simple-datatables'
import { nextTick } from 'vue'
import { usePersonasStore } from '@/store/personasStore.js'

export default {
  name: 'TablaPersonas',
  props: {
    headers: {
      type: Array,
      default: () => [],
      required: true
    },
    tableData: {
      type: Array,
      default: () => [],
      required: true
    },
    editable: {
      type: Boolean,
      default: false
    },
    deletable: {
      type: Boolean,
      default: false
    },
    details: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  data() {
    return {
      dataTable: null,
      error: null,
      personaStore: usePersonasStore()
    }
  },
  watch: {
    '$refs.dataTablePersona': {
      handler(newVal) {
        console.log('Watcher triggered for $refs.dataTablePersona', newVal)
        if (newVal) {
          this.initializeDataTable()
        }
      },
      immediate: true // Ejecuta el handler inmediatamente si ya existe
    },
    tableData: {
      handler(newData) {
        console.log('Watcher triggered for tableData', newData)
        if (this.dataTable) {
          console.log('Destroying existing DataTable')
          this.dataTable.destroy()
          this.dataTable = null // Asegúrate de que la referencia se reinicie
        }
        this.initializeDataTable()
      },
      deep: true
    }
  },
  mounted() {
    console.log('Component mounted')
    if (this.$refs.dataTablePersona) {
      console.log('$refs.dataTablePersona exists in mounted')
      this.initializeDataTable()
    }
  },
  methods: {
    logRowData(row) {
      console.log('Row data:', row)
    },
    async initializeDataTable() {
      console.log('Initializing DataTable')
      await nextTick()
      const tableElement = this.$refs.dataTablePersona
      if (tableElement) {
        console.log('tableElement exists', tableElement)
        const data = {
          headings: [...this.headers.map((header) => header.title), 'Acciones'],
          data: this.tableData.map((row) => [
            ...this.headers.map((header) => row[header.key]),
            this.details
              ? {
                  component: 'ActionButton',
                  props: {
                    text: 'Ver detalles',
                    icon: 'visibility',
                    onClick: () => this.logRowData(row)
                  }
                }
              : null
          ])
        }
        console.log('Data for DataTable', data)
        this.dataTable = new DataTable(tableElement, {
          searchable: true,
          perPage: 5,
          labels: {
            placeholder: 'Buscar...',
            searchTitle: 'Buscar en la tabla',
            pageTitle: 'Pag {page}',
            perPage: 'Datos por página',
            noRows: 'No se encontraron resultados',
            info: 'Mostrando {start} a {end} de {rows} entradas',
            noResults: 'No se encontraron resultados para la búsqueda'
          },
          data
        })
        console.log('DataTable initialized')
      } else {
        console.log('tableElement does not exist')
      }
    }
  }
}
</script>

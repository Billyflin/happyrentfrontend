<template>
  <div v-if="tableData.length > 0" class="table-responsive">
    <table ref="dataTable" class="table table-flush">
      <thead>
      <tr>
        <th v-for="header in headers" class="text-uppercase text-center text-xs font-weight-bolder opacity-7">
          {{ header.title }}
        </th>
        <th v-if="deletable||editable" class="text-uppercase text-center text-xs font-weight-bolder opacity-7">
          Acciones
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in tableData" :key="row.id" class="text-sm text-center align-middle">
        <td v-for="header in headers" :key="header.key">
          <template v-if="header.key === 'estado'">
            <span v-if="row[header.key] === true" class="mb-0 mt-0 badge badge-success">Activo</span>
            <span v-else-if="row[header.key] === false" class="mb-0 mt-0 badge badge-danger">Inactivo</span>
            <span v-else>{{ row[header.key] }}</span>
          </template>
          <template v-else>
            {{ row[header.key] }}
          </template>
        </td>
        <td v-if="deletable||editable" class="align-middle">
          <material-button
            v-if="editable"
            class="my-sm-auto mt-2 mb-0"
            color="primary"
            name="button"
            size="sm"
            type="button"
            variant="gradient" @click="$emit('edit', row)"
          >
             <span class="material-symbols-outlined mr-3"
                   style="font-size: 16px; margin-right: 10px;;">person_edit</span>
            Editar
          </material-button>
          <material-button
            v-if="deletable"
            class="my-sm-auto mt-2 mb-0 ms-2"
            color="danger"
            name="button"
            size="sm"
            type="button" variant="gradient" @click="$emit('delete', row)"
          >
            <span class="material-symbols-outlined mr-3"
                  style="font-size: 16px; margin-right: 10px;;">person_remove</span>
            Eliminar
          </material-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else-if="isLoading" class="text-center mt-7 mb-6">
    <h6>Cargando datos...</h6>
    <div class="spinner-border text-primary" role="status" style="width:4rem; height: 4rem;">
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
import MaterialButton from '@/components/MaterialButton.vue'

export default {
  name: 'MyDataTable',
  components: { MaterialButton },
  props: {
    headers: {
      Array,
      default: [],
      required: true
    },
    tableData: {
      Array,
      default: {},
      required: true
    },
    editable: {
      Boolean,
      default: false
    },
    deletable: {
      Boolean,
      default: false
    },
    isLoading: {
      Boolean,
      default: true,
      required: true
    }
  },
  data() {
    return {
      dataTable: null,
      error: null //
    }
  },
  watch: {
    tableData: {
      handler() {
        this.$nextTick(this.initializeDataTable) // Use $nextTick
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    initializeDataTable() {
      if (this.dataTable) {
        this.dataTable.destroy()
      }

      if (this.$refs.dataTable) {
        this.dataTable = new DataTable(this.$refs.dataTable, {
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
          }
        })
      }
    }
  }
}
</script>

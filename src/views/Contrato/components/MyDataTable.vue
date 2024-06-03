<template>
  <div class="table-responsive">
    <table ref="dataTableRef" class="table table-flush">
      <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index" class="text-uppercase text-xs font-weight-bolder opacity-7">
          {{ header.title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="text-sm text-center">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { DataTable } from 'simple-datatables'

export default {
  name: 'MyDataTable',
  props: {
    headers: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dataTableRef = ref(null)
    let dataTableInstance = null

    const initializeDataTable = () => {
      if (dataTableInstance) {
        dataTableInstance.destroy()
      }
      dataTableInstance = new DataTable("#dataTableRef", {

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
        ...props.options
      })
    }

    onMounted(() => {
      nextTick(initializeDataTable())
    })

    onBeforeUnmount(() => {
      if (dataTableInstance) {
        dataTableInstance.destroy()
      }
    })

    watch(() => props.data, () => {
      nextTick(initializeDataTable())
    })

    return {
      dataTableRef
    }
  }
}
</script>
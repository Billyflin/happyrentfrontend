<template>
  <div>
    <div class="table-responsive">
      <table ref="dataTable" class="table table-flush">
        <thead class="thead-light">
        <tr>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">ID</th>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">Fecha Inicio</th>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">Fecha Término</th>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">Duración (Meses)</th>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">Renta</th>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">Plazo Aviso (Días)</th>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">Garantía</th>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">Estado</th>
          <th class="text-uppercase text-xs font-weight-bolder opacity-7">Fecha Creación</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="auth.contratos" v-for="contrato in auth.contratos" class="text-sm text-center" :key="contrato.id">
          <td>{{ contrato.id }}</td>
          <td>{{ contrato.fechaInicio }}</td>
          <td>{{ contrato.fechaTermino }}</td>
          <td>{{ contrato.duracionMeses }}</td>
          <td>{{ contrato.renta }}</td>
          <td>{{ contrato.plazoAvisoDias }}</td>
          <td>{{ contrato.garantia }}</td>
          <td v-if="contrato.activo">
            <span class="badge badge-success">Activo</span>
          </td>
          <td v-else>
            <span class="badge badge-danger">Inactivo</span>
          </td>
          <td>{{ formatFecha(contrato.createDate) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeMount, onMounted, ref } from 'vue'
import { DataTable } from 'simple-datatables'
import { useAuthStore } from '@/store/index.js'

const auth = useAuthStore()
const dataTable = ref(null)
const tableRef = ref(null)
const loading = ref(true)

onBeforeMount(async () => {
  try {
    await auth.getContratos()
    loading.value = false
  } catch (error) {
    console.error('Error fetching contratos:', error)
    loading.value = false
  }
})

onMounted(async () => {
  await nextTick()
  if (tableRef.value) {
    dataTable.value = new DataTable(tableRef.value, {
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
})

function formatFecha(fecha) {
  if (!fecha) return ''
  const date = new Date(fecha)
  return date.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}
</script>

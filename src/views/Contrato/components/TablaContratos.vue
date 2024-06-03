<template>
  <div>
    <MyDataTable :headers="headers" :data="tableData" :options="dataTableOptions" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MyDataTable from './MyDataTable.vue'
import 'simple-datatables/dist/style.css'

const headers = ref([
  {title:'ID', key:'id'},
  {title:'Fecha Inicio', key:'fechaInicio'},
  {title:'Fecha Término', key:'fechaTermino'},
  {title:'Duración (Meses)', key:'duracionMeses'},
  {title:'Renta', key:'renta'},
  {title:'Plazo Aviso (Días)', key:'plazoAvisoDias'},
  {title:'Garantía', key:'garantia'},
  {title:'Estado', key:'estado'},
  {title:'Fecha Creación', key:'fechaCreacion'},
  {title:'Acciones', key:'acciones'}
]);

const tableData = ref([{}]); // Inicializa con un objeto vacío

const dataTableOptions = ref({
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
});

onMounted(async () => {
  // Simulación de datos desde una API
  tableData.value = [
    {
      id: 1,
      fechaInicio: '2024-01-01',
      fechaTermino: '2024-12-31',
      duracionMeses: 12,
      renta: 1000,
      plazoAvisoDias: 30,
      garantia: 'Sí',
      estado: 'Activo',
      fechaCreacion: '2024-01-01'
    },
    {
      id: 2,
      fechaInicio: '2023-05-15',
      fechaTermino: '2024-05-14',
      duracionMeses: 12,
      renta: 1200,
      plazoAvisoDias: 45,
      garantia: 'No',
      estado: 'Inactivo',
      fechaCreacion: '2023-05-15'
    },
    // ... más datos
  ];
});
</script>


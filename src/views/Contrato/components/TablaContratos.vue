<template>
  <div>
    <MyDataTable :tableData="tableData" :headers="headers" :is-loading="isLoading" @edit="handleEdit" @delete="handleDelete"
                 :editable="true"
                 :deletable="true"

    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MyDataTable from './MyDataTable.vue'
import { useAuthStore } from '@/store/index.js'

const store =useAuthStore()
const headers = ref([
  {title:'ID', key:'id'},
  {title:'Fecha Inicio', key:'fechaInicio'},
  {title:'Fecha Término', key:'fechaTermino'},
  {title:'Duración (Meses)', key:'duracionMeses'},
  {title:'Renta', key:'renta'},
  {title:'Plazo Aviso (Días)', key:'plazoAvisoDias'},
  {title:'Garantía', key:'garantia'},
  {title:'Estado', key:'estado'},
  {title:'Fecha Creación', key:'fechaCreacion'}
]);

const tableData = ref([]);
const isLoading = ref(true);
const handleEdit = (row) => {
  console.log("Edit Row:", row); // Log the row data for editing
};

const handleDelete = (row) => {
  console.log("Delete Row:", row); // Log the row data for deletion
};
onMounted(async () => {
  // Simula una petición a una API 3 segundos
  await new Promise(resolve => setTimeout(resolve, 3000));
  tableData.value = [
    {
      id: 1,
      fechaInicio: '2024-01-01',
      fechaTermino: '2024-12-31',
      duracionMeses: 12,
      renta: 1000,
      plazoAvisoDias: 30,
      garantia: 'Sí',
      estado: true,
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
      estado: false,
      fechaCreacion: '2023-05-15'
    },
    {
      id: 3,
      fechaInicio: '2022-10-01',
      fechaTermino: '2023-09-30',
      duracionMeses: 12,
      renta: 1500,
      plazoAvisoDias: 60,
      garantia: 'Sí',
      estado: true,
      fechaCreacion: '2022-10-01'
    },
    {
      id: 4,
      fechaInicio: '2021-03-01',
      fechaTermino: '2022-02-28',
      duracionMeses: 12,
      renta: 2000,
      plazoAvisoDias: 90,
      garantia: 'No',
      estado: false,
      fechaCreacion: '2021-03-01'
    },
    {
      id: 5,
      fechaInicio: '2020-07-01',
      fechaTermino: '2021-06-30',
      duracionMeses: 12,
      renta: 2500,
      plazoAvisoDias: 120,
      garantia: 'Sí',
      estado: true,
      fechaCreacion: '2020-07-01'
    },
    {
      id: 6,
      fechaInicio: '2019-12-01',
      fechaTermino: '2020-11-30',
      duracionMeses: 12,
      renta: 3000,
      plazoAvisoDias: 150,
      garantia: 'No',
      estado: true,
      fechaCreacion: '2019-12-01'
    }
  ];
  isLoading.value = false;
   await store.getContratos()

});
</script>


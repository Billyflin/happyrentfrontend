<template>
  <MyDataTableContratos
    :headers="headers"
    :tableData="tableData"
    :editable="true"
    :deletable="true"
    :isLoading="isLoading"
  />
</template>

<script>
import MyDataTableContratos from '@/views/Contrato/components/MyDataTableContratos.vue';
import axios from 'axios';

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
        { key: 'createDate', title: 'Fecha de Creación' },
      ],
      tableData: [], // Aquí se asignarán los datos de la API
      isLoading: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/contrato/contratos`);
        this.tableData = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};

</script>

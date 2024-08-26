<template>
  <div id="InventarioTable" class="card">
    <div class="card-body">
      <h5>Tabla Inventario</h5>
      <div v-if="items" class="table-responsive text-sm">
        <table id="datatable-search2" class="table table-flush">
          <thead class="thead-light">
            <tr>
              <th class="text-center">Nombre</th>
              <th class="text-center">Estado</th>
              <th class="text-center">Descripción</th>
              <th class="text-center">Fotos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td class="text-sm font-weight-normal text-center">{{ item.nombre }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.estado }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.descripcion }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.fotos.length }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const items = ref([])
</script>

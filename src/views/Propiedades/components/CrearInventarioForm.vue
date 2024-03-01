<!--<script setup>-->

<!--import MaterialSwitch from '@/components/MaterialSwitch.vue'-->

<!--defineProps({-->
<!--  propietarioNuevo: Boolean,-->
<!--  agregarInventario: Boolean,-->
<!--  esEmpresa: Boolean,-->
<!--  InventarioCompleto:Object,-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <div id="Inventario" class="card mt-4">-->
<!--    <div class="card-header">-->
<!--      <h4>Inventario</h4>-->
<!--    </div>-->
<!--    <div class="card-body pt-0">-->
<!--      <div class="row mt-4" v-if="!propietarioNuevo">-->
<!--        <div class="col-3">-->
<!--          <material-switch id="agregar_inventario" name="agregar_inventario" v-model:checked="agregarInventario" checked-->
<!--                           label-class="mb-0 text-body text-truncate w-100">-->
<!--            {{ esEmpresa ? 'Agregar Inventario' : 'Sin inventario' }}-->
<!--          </material-switch>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-if="agregarInventario">-->
<!--        <div  class="row mt-4">-->
<!--          <h5>Tabla Inventario</h5>-->
<!--          <div class="col-3">-->


<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
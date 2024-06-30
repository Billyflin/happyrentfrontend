<template>
  <div class="py-4 container-fluid">
    <div class="col-12">
      <div class="card">
        <div class="pb-0 card-header d-flex align-items-center justify-content-between">
          <h5>Contratos</h5>
        </div>
        <TablaContratos/>
      </div>
    </div>
  </div>
</template>


<script setup>
import TablaContratos from '@/views/Contrato/TablaContratos.vue'
</script>
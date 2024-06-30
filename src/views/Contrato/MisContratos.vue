<template>
  <div class="py-4 container-fluid">
    <div class="col-12">
      <div class="card">
        <div class="pb-0 card-header d-flex align-items-center justify-content-between">
          <h5>Contratos</h5>
          <router-link class="mt-2 mb-2 btn btn-happLight ml-auto d-flex align-items-center"
                       to="/agregarPersona">
                Agregar persona
            <span class="material-symbols-outlined mx-2">
              person_add
            </span>
          </router-link>
        </div>
        <TablaContratos/>
      </div>
    </div>
  </div>
</template>


<script setup>

import TablaContratos from '@/views/Contrato/TablaContratos.vue'
</script>
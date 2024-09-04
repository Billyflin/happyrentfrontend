<script setup>
import MaterialButton from '@/components/Material/MaterialButton.vue'
import ContenidoSalvoconducto from '@/views/Editor/components/ContenidoSalvoconducto.vue'
</script>

<template>
  <div class="container-fluid">
    <router-link class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
                 to="/detallesContrato">
      <span class="material-symbols-outlined mx-1"> arrow_back </span> Volver
    </router-link>
    <div class="row mb-4">
      <div class="col-lg-12 mt-lg-0 mt-4">
        <div class="contrato card">
          <div class="row">
            <div class="card-body col-lg-10 mt-lg-0 mt-4 text-center text-dark clase">
              <ContenidoSalvoconducto />
            </div>
          </div>
        </div>
        <div class="mt-2 ">
          <material-button class="mt-4" full-width size="lg" variant="success" @click="saveContrato">Crear Contrato
          </material-button>
        </div>
      </div>
    </div>
  </div>
</template>
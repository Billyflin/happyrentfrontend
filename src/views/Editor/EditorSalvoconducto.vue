<script setup>
import MaterialButton from '@/components/Material/MaterialButton.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row mb-4">
      <div class="col-lg-2 mt-4 ">
<!--        <side-nav />-->
      </div>
      <div class="col-lg-10 mt-lg-0 mt-4">
        <div class="contrato card">
          <div class="row">
            <div class="card-body col-lg-10 mt-lg-0 mt-4 text-center text-dark clase">
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
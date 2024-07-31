<script setup>

import AgregarPersonaForm from '@/views/Personas/components/AgregarPersonaForm.vue'


</script>
<template>

  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-lg-2 d-flex justify-content-end mt-4">
        <router-link class="btn btn-simple d-flex align-items-center"
                     to="/Personas">
          <span class="material-symbols-outlined mx-2">
            arrow_back
          </span>
          Volver
        </router-link>
      </div>
    </div>
    <div class="row">
      <agregar-persona-form></agregar-persona-form>
    </div>

  </div>
</template>

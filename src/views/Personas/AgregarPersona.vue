<script setup>

import AgregarPersona from '@/views/Personas/components/AgregarPersona.vue'
import MaterialButton from '@/components/MaterialButton.vue'
</script>
<template>

<div class="container-fluid">
<div class="row justify-content-end">
  <div class="col-lg-2 d-flex justify-content-end mt-4">
    <router-link to="/Personas"
                 class="btn btn-simple d-flex align-items-center">
          <span class="material-symbols-outlined mx-2">
            arrow_back
          </span>
      Volver
    </router-link>
  </div>
</div>
<div class="row">
  <agregar-persona></agregar-persona>
</div>
<div class="row">
  <material-button variant="success" size="lg" class="mt-2 mb-6" full-width> Crear Persona </material-button>
</div>
</div>
</template>

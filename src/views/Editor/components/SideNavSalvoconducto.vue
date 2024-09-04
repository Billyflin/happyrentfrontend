<script setup>

</script>

<template>
  <router-link class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
               to="/Propiedades">
    <span class="material-symbols-outlined mx-1"> arrow_back </span> Volver
  </router-link>
  <div class="card position-sticky top-1 mt-4">
    <ul class="nav flex-column bg-white border-radius-lg p-3">
      <li class="nav-item">
        <a :data-scroll="'#Comparecencia'" class="nav-link align-items-center text-dark d-flex" href="#Comparecencia">
          <i class="material-symbols-outlined text-xl me-2">contract_edit</i>
          <span class="text-xs">Comparecencia</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
<script setup>

import MaterialInput from '@/components/MaterialInput.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
</script>

<template>
  <div id="Propietario" class="card mt-5">
    <div class="card-header">
      <h5>Nueva persona</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="row">
          <h6 class="mb-3">Persona</h6>
          <div class="col-sm-3">
            <material-input
              id="RutPersona"
              label="Rut"
              placeholder="Con guión"
              type="text"
              variant="static"
            />
          </div>
          <div class="col-4">
            <material-input
              id="NombrePersona"
              label="Nombre"
              placeholder="Nombre"
              variant="static"
            />
          </div>
          <div class="col-4">
            <material-input
              id="ApellidoPaternoPersona"
              label="Apellido Paterno"
              placeholder="Apellido"
              variant="static"
            />
          </div>
          <div class="col-4">
            <material-input
              id="ApellidoMaternoPersona"
              label="Apellido Materno"
              placeholder="Apellido"
              variant="static"
            />
          </div>
          <div class="col-sm-3">
            <material-input
              id="OcupacionPersona"
              label="Ocupación"
              placeholder="Ingenieria"
              type="text"
              variant="static"
            />
          </div>
        </div>
        <div class="row mt-3">
          <h5 class="mt-3 mb-3">Contacto</h5>
          <div class="col-4 mt-4">
            <material-input
              id="emailPersona"
              label="Email"
              placeholder="Email"
              type="email"
              variant="static"
            />
          </div>
          <div class="col-4 mt-4">
            <material-input
              id="confirmEmailPersona"
              label="Confimar Email"
              placeholder="Confirmar Email"
              type="email"
              variant="static"
            />
          </div>
          <div class="col-3 mt-4">
            <material-input
              id="numeroPersona"
              label="Numero de teléfono"
              placeholder="+569 xxxxxxxx"
              type="phone"
              variant="static"
            />
          </div>
        </div>
        <h5 class="mt-3">Direccion</h5>
        <LocalidadForm></LocalidadForm>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
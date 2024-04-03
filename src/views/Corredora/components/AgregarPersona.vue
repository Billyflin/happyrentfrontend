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
          <div class="row" >
            <h6 class="mb-3">Persona</h6>
            <div class="col-sm-3">
              <material-input
                id="RutPersona"
                type="text"
                variant="static"
                label="Rut"
                placeholder="Con guión"
              />
            </div>
            <div class="col-4">
              <material-input
                id="NombrePersona"
                variant="static"
                label="Nombre"
                placeholder="Nombre"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoPaternoPersona"
                variant="static"
                label="Apellido Paterno"
                placeholder="Apellido"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoMaternoPersona"
                variant="static"
                label="Apellido Materno"
                placeholder="Apellido"
              />
            </div>
            <div class="col-sm-3">
              <material-input
                id="OcupacionPersona"
                type="text"
                variant="static"
                label="Ocupación"
                placeholder="Ingenieria"
              />
            </div>
          </div>
          <div class="row mt-3" >
            <h5 class="mt-3 mb-3">Contacto</h5>
            <div class="col-4 mt-4">
              <material-input
                id="emailPersona"
                type="email"
                variant="static"
                label="Email"
                placeholder="Email"
              />
            </div>
            <div class="col-4 mt-4">
              <material-input
                id="confirmEmailPersona"
                type="email"
                variant="static"
                label="Confimar Email"
                placeholder="Confirmar Email"
              />
            </div>
            <div class="col-3 mt-4">
              <material-input
                id="numeroPersona"
                type="phone"
                variant="static"
                label="Numero de teléfono"
                placeholder="+569 xxxxxxxx"
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
<template>
  <!--    -->
  <div class="row  mt-3">
    <div class="col-5 ms-5">
      <router-link class="btn btn-simple d-flex align-items-center mt-0"
                   to="/">
      <span class="material-symbols-outlined">
        arrow_back
      </span>
        Volver
      </router-link>
    </div>
  </div>
  <!--    -->
  <div id="Arrendatario" class="card mt-5 m-5">
    <div class="card-header">
      <h5>Datos del Arrendatario</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div v-if="!arrendatarioContrato" class="row mt-4">

          <div class="col-3">
            <material-switch id="tipo_arrendatario" v-model:checked="esEmpresa" checked
                             label-class="mb-0 text-body text-truncate w-100"
                             name="tipo_arrendatario">
              {{ esEmpresa ? 'Es empresa' : 'Es persona' }}
            </material-switch>


          </div>

          <!--          Seccion Propietario general-->

          <div v-if="!esEmpresa" class="row mt-4">
            <h5 class="mt-3 mb-3">Persona</h5>
            <div class="col-sm-3">
              <material-input
                id="RutArrendatario"
                label="Rut arrendatario"
                placeholder="Con guión"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-4">
              <material-input
                id="NombreArrendatario"
                label="Nombre arrendatario"
                placeholder="Nombre"
                variant="static"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoPaternoArrendatario"
                label="Apellido Paterno Arrendatario"
                placeholder="Apellido"
                variant="static"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoMaternoArrendatario"
                label="Apellido Materno arrendatario"
                placeholder="Apellido"
                variant="static"
              />
            </div>
            <div class="col-sm-3">
              <material-input
                id="Ocupacion"
                label="Ocupación Arrendatario"
                placeholder="Ingenieria"
                type="text"
                variant="static"
              />
            </div>
          </div>
          <div v-if="!esEmpresa" class="row mt-3">
            <h5 class="mt-3 mb-3">Contacto</h5>
            <div class="col-4 mt-4">
              <material-input
                id="emailArrendatario"
                label="Email arrendatario"
                placeholder="Email"
                type="email"
                variant="static"
              />
            </div>
            <div class="col-4 mt-4">
              <material-input
                id="confirmEmailArrendatario"
                label="Confimar Email arrendatario"
                placeholder="Confirma Email"
                type="email"
                variant="static"
              />
            </div>
            <div class="col-3 mt-4">
              <material-input
                id="numeroArrendatario"
                label="Numero de teléfono"
                placeholder="+569 xxxxxxxx"
                type="phone"
                variant="static"
              />
            </div>
          </div>

          <!--  Seccion Empresa-->
          <div v-if="esEmpresa" class="row mt-4">
            <h5 class=" mt-3 mb-3">Empresa</h5>
          </div>
          <div v-if="esEmpresa" class="row mt-4">
            <div class="col-sm-3">
              <material-input
                id="Rut"
                label="Rut Empresa"
                placeholder="Con guión"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-sm-3">
              <material-input
                id="Rut"
                label="Rut Representante Legal"
                placeholder="Con guión"
                type="text"
                variant="static"
              />
            </div>
          </div>
          <div v-if="esEmpresa" class="row mt-4">
            <div class="col-4">
              <material-input
                id="NombreRepresentanteLegal"
                label="Nombre Representante Legal"
                placeholder="Nombre"
                variant="static"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoPaternoRepresentanteLegal"
                label="Apellido Paterno Representante Legal"
                placeholder="Apellido"
                variant="static"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoMaternoRepresentanteLegal"
                label="Apellido Materno Representante Legal"
                placeholder="Apellido"
                variant="static"
              />
            </div>
          </div>
          <div v-if="esEmpresa" class="row mt-4">

            <div class="col-sm-3">
              <material-input
                id="Ocupacion"
                label="Ocupación Representante Legal"
                placeholder="Ingenieria"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-sm-5">
              <material-input
                id="RazonSocial"
                label="Razón Social"
                placeholder="Razón Social"
                variant="static"
              />
            </div>
            <div class="col-sm-4">
              <material-input
                id="Giro"
                label="Giro"
                placeholder="Giro"
                variant="static"
              />
            </div>
          </div>
          <div v-if="esEmpresa" class="row">
            <h5 class=" mt-3 mb-3">Contacto</h5>
            <div class="col-4 mt-4">
              <material-input
                id="emailRepresentanteLegal"
                label="Email Representante Legal"
                placeholder="Email"
                type="email"
                variant="static"
              />
            </div>
            <div class="col-4 mt-4">
              <material-input
                id="confirmEmailRepresentanteLegal"
                label="Confimar Email Representante Legal"
                placeholder="Confirma Email"
                type="email"
                variant="static"
              />
            </div>
            <div class="col-3 mt-4">
              <material-input
                id="numeroRepresentanteLegal"
                label="Numero de teléfono"
                placeholder="+569 xxxxxxxx"
                type="phone"
                variant="static"
              />
            </div>
          </div>
        </div>
      </div>
      <!--  Seccion RepresentanteLegal Empresa-->
      <!--        generales propietario-->
      <div v-if="!arrendatarioContrato" class="row mt-4 text-start">
        <LocalidadForm v-model="persona.direccion"></LocalidadForm>
      </div>
    </div>
    <div class="card-footer">

      <material-button class="mt-2 " full-width size="lg" variant="success">Enviar</material-button>
    </div>
  </div>

</template>
<script setup>
import MaterialInput from '@/components/MaterialInput.vue'

import MaterialSwitch from '@/components/MaterialSwitch.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
import { useAppStore } from '@/store/index.js'
import MaterialButton from '@/components/MaterialButton.vue'

const arrendatarioContrato = ref(false)
const esEmpresa = ref(true)
const persona = ref({
  direccion: {
    pais: '',
    region: '',
    ciudad: '',
    calle: '',
    numero: '',
    detalle: '',
    codigoPostal: ''
  }
})

const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store
onMounted(() => {
  toggleEveryDisplay()
  toggleHideConfig()
})

onUnmounted(() => {
  toggleEveryDisplay()
  toggleHideConfig()
})

</script>
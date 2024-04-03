<template>
  <!--    -->
  <div class="row  mt-3">
    <div class="col-5 ms-5">
      <router-link to="/"
                   class="btn btn-simple d-flex align-items-center mt-0">
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
        <div class="row mt-4" v-if="!arrendatarioContrato">

          <div class="col-3">
            <material-switch id="tipo_arrendatario" name="tipo_arrendatario" v-model:checked="esEmpresa" checked
                             label-class="mb-0 text-body text-truncate w-100">
              {{ esEmpresa ? 'Es empresa' : 'Es persona' }}
            </material-switch>


          </div>

          <!--          Seccion Propietario general-->

          <div class="row mt-4" v-if="!esEmpresa">
            <h5 class="mt-3 mb-3">Persona</h5>
            <div class="col-sm-3">
              <material-input
                id="RutArrendatario"
                type="text"
                variant="static"
                label="Rut arrendatario"
                placeholder="Con guión"
              />
            </div>
            <div class="col-4">
              <material-input
                id="NombreArrendatario"
                variant="static"
                label="Nombre arrendatario"
                placeholder="Nombre"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoPaternoArrendatario"
                variant="static"
                label="Apellido Paterno Arrendatario"
                placeholder="Apellido"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoMaternoArrendatario"
                variant="static"
                label="Apellido Materno arrendatario"
                placeholder="Apellido"
              />
            </div>
            <div class="col-sm-3">
              <material-input
                id="Ocupacion"
                type="text"
                variant="static"
                label="Ocupación Arrendatario"
                placeholder="Ingenieria"
              />
            </div>
          </div>
          <div class="row mt-3" v-if="!esEmpresa">
            <h5 class="mt-3 mb-3">Contacto</h5>
            <div class="col-4 mt-4">
              <material-input
                id="emailArrendatario"
                type="email"
                variant="static"
                label="Email arrendatario"
                placeholder="Email"
              />
            </div>
            <div class="col-4 mt-4">
              <material-input
                id="confirmEmailArrendatario"
                type="email"
                variant="static"
                label="Confimar Email arrendatario"
                placeholder="Confirma Email"
              />
            </div>
            <div class="col-3 mt-4">
              <material-input
                id="numeroArrendatario"
                type="phone"
                variant="static"
                label="Numero de teléfono"
                placeholder="+569 xxxxxxxx"
              />
            </div>
          </div>

          <!--  Seccion Empresa-->
          <div class="row mt-4" v-if="esEmpresa">
            <h5 class=" mt-3 mb-3">Empresa</h5>
          </div>
          <div class="row mt-4" v-if="esEmpresa">
            <div class="col-sm-3">
              <material-input
                id="Rut"
                type="text"
                variant="static"
                label="Rut Empresa"
                placeholder="Con guión"
              />
            </div>
            <div class="col-sm-3">
              <material-input
                id="Rut"
                type="text"
                variant="static"
                label="Rut Representante Legal"
                placeholder="Con guión"
              />
            </div>
          </div>
          <div class="row mt-4" v-if="esEmpresa">
            <div class="col-4">
              <material-input
                id="NombreRepresentanteLegal"
                variant="static"
                label="Nombre Representante Legal"
                placeholder="Nombre"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoPaternoRepresentanteLegal"
                variant="static"
                label="Apellido Paterno Representante Legal"
                placeholder="Apellido"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoMaternoRepresentanteLegal"
                variant="static"
                label="Apellido Materno Representante Legal"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div class="row mt-4" v-if="esEmpresa">

            <div class="col-sm-3">
              <material-input
                id="Ocupacion"
                type="text"
                variant="static"
                label="Ocupación Representante Legal"
                placeholder="Ingenieria"
              />
            </div>
            <div class="col-sm-5">
              <material-input
                id="RazonSocial"
                variant="static"
                label="Razón Social"
                placeholder="Razón Social"
              />
            </div>
            <div class="col-sm-4">
              <material-input
                id="Giro"
                variant="static"
                label="Giro"
                placeholder="Giro"
              />
            </div>
          </div>
          <div class="row" v-if="esEmpresa">
            <h5 class=" mt-3 mb-3">Contacto</h5>
            <div class="col-4 mt-4">
              <material-input
                id="emailRepresentanteLegal"
                type="email"
                variant="static"
                label="Email Representante Legal"
                placeholder="Email"
              />
            </div>
            <div class="col-4 mt-4">
              <material-input
                id="confirmEmailRepresentanteLegal"
                type="email"
                variant="static"
                label="Confimar Email Representante Legal"
                placeholder="Confirma Email"
              />
            </div>
            <div class="col-3 mt-4">
              <material-input
                id="numeroRepresentanteLegal"
                type="phone"
                variant="static"
                label="Numero de teléfono"
                placeholder="+569 xxxxxxxx"
              />
            </div>
          </div>
        </div>
      </div>
      <!--  Seccion RepresentanteLegal Empresa-->
      <!--        generales propietario-->
      <div class="row mt-4 text-start" v-if="!arrendatarioContrato">
        <LocalidadForm></LocalidadForm>
      </div>
    </div>
    <div class="card-footer">

      <material-button variant="success" size="lg" class="mt-2 " full-width>Enviar</material-button>
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
<script setup>

import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import { defineEmits, ref, watchEffect } from 'vue'

const propietarioNuevo = ref(true)
const esEmpresa = ref(true)
const propietario_existente = ref('')
const propietarioEmpresa = ref({
  rut: '',
  rutRepresentante: '',
  razonSocial: '',
  giro: '',
  nombreRepresentante: '',
  apellidoPaternoRepresentante: '',
  apellidoMaternoRepresentante: '',
  emailRepresentante: '',
  confirmEmailRepresentante: '',
  numeroRepresentante: ''
})
const propietarioPersona = ref({
  rut: '',
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  email: '',
  confirmEmail: '',
  numero: ''
})
const direccion = ref({
  pais: '',
  region: '',
  ciudad: '',
  calle: '',
  numero: ''
})
const emit = defineEmits(['update:propietario'])
watchEffect(() => {
  emit('update:propietario', {
    propietarioNuevo: propietarioNuevo.value,
    esEmpresa: esEmpresa.value,
    propietario_existente: propietario_existente.value,
    propietarioEmpresa: propietarioEmpresa.value,
    propietarioPersona: propietarioPersona.value,
    direccion: direccion.value
  })
})

</script>

<template>
  <div id="Propietario" class="card mt-5">
    <div class="card-header">
      <h5>Datos del propietario</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4 mt-3">
          <material-switch class="" id="existente" name="existente" v-model:checked="propietarioNuevo"
                           label-class="mb-0 text-body text-truncate w-100"> Propietario nuevo
          </material-switch>
        </div>
      </div>
      <div class="row">
        <div class="row mt-4" v-if="propietarioNuevo">

          <div class="col-3">
            <material-switch id="tipo_propietario" name="tipo_propietario" v-model:checked="esEmpresa" checked
                             label-class="mb-0 text-body text-truncate w-100">
              {{ esEmpresa ? 'Es empresa' : 'Es persona' }}
            </material-switch>


          </div>

          <!--          Seccion Propietario general-->

          <div class="row mt-4" v-if="!esEmpresa">
            <h5 class="mt-3 mb-3">Persona</h5>
            <div class="col-sm-3">
              <material-input
                id="RutPropietario"
                type="text"
                variant="static"
                label="Rut propietario"
                placeholder="Con guión"
                v-model="propietarioPersona.rut"
              />
            </div>
            <div class="col-4">
              <material-input
                id="NombrePropietario"
                variant="static"
                label="Nombre propietario"
                placeholder="Nombre"
                v-model="propietarioPersona.nombre"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoPaternoPropietario"
                variant="static"
                label="Apellido Paterno Propietario"
                placeholder="Apellido"
                v-model="propietarioPersona.apellidoPaterno"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoMaternoPropietario"
                variant="static"
                label="Apellido Materno propietario"
                placeholder="Apellido"
                v-model="propietarioPersona.apellidoMaterno"
              />
            </div>
          </div>
          <div class="row mt-3" v-if="!esEmpresa">
            <h5 class="mt-3 mb-3">Contacto</h5>
            <div class="col-4 mt-4">
              <material-input
                id="emailPropietario"
                type="email"
                variant="static"
                label="Email propietario"
                placeholder="Email"
                v-model="propietarioPersona.email"
              />
            </div>
            <div class="col-4 mt-4">
              <material-input
                id="confirmEmailPropietario"
                type="email"
                variant="static"
                label="Confimar Email propietario"
                placeholder="Confirma Email"
              />
            </div>
            <div class="col-3 mt-4">
              <material-input
                id="numeroPropietario"
                type="phone"
                variant="static"
                label="Numero de teléfono"
                placeholder="+569 xxxxxxxx"
                v-model="propietarioPersona.numero"
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
                v-model="propietarioEmpresa.rut"
              />
            </div>
          </div>
          <div class="row mt-4" v-if="esEmpresa">

            <div class="col-sm-3">
              <material-input
                id="Rut"
                type="text"
                variant="static"
                label="Rut Representante Legal"
                placeholder="Con guión"
                v-model="propietarioEmpresa.rutRepresentante"
              />
            </div>
            <div class="col-sm-5">
              <material-input
                id="RazonSocial"
                variant="static"
                label="Razón Social"
                placeholder="Razón Social"
                v-model="propietarioEmpresa.razonSocial"
              />
            </div>
            <div class="col-sm-4">
              <material-input
                id="Giro"
                variant="static"
                label="Giro"
                placeholder="Giro"
                v-model="propietarioEmpresa.giro"
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
                v-model="propietarioEmpresa.nombreRepresentante"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoPaternoRepresentanteLegal"
                variant="static"
                label="Apellido Paterno Representante Legal"
                placeholder="Apellido"
                v-model="propietarioEmpresa.apellidoPaternoRepresentante"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoMaternoRepresentanteLegal"
                variant="static"
                label="Apellido Materno Representante Legal"
                placeholder="Apellido"
                v-model="propietarioEmpresa.apellidoMaternoRepresentante"
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
                v-model="propietarioEmpresa.emailRepresentante"
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
                v-model="propietarioEmpresa.numeroRepresentante"
              />
            </div>
          </div>
        </div>
        <div class="row mt-4" v-if="!propietarioNuevo">
          <div class="row">
            <div class="col-6 mb-4">
              <material-choices id="propietario_seleccionado"
                                v-model="propietario_existente"
                                :options="[
                              {value:'1',text:'Acá van a estar los propietarios existentes'},
                              {value:'2',text:'Pero de momento no se a implementado'},
                              {value:'3',text:'Se los debemos :P'}
                              ]"
                                name="propietario_existente" label="Selecciona un propietario existente"
                                :search-enabled="false" />
            </div>
          </div>
          <!--  Seccion RepresentanteLegal Empresa-->
          <!--        generales propietario-->

        </div>

        <div class="row mt-4 text-start" v-if="propietarioNuevo">
          <h5 class="mt-3 mb-3">Dirección</h5>
          <div class="mt-3 col-3">
            <MaterialChoices id="paisPropiedad"
                             label="País"
                             :options=" [
                             { value: 'Chile', text: 'Chile' },
                             { value: 'Peru', text: 'Perú' },
                             { value: 'Argentina', text: 'Argentina'},
                             { value: 'Brasil', text: 'Brasil'},
                              { value: 'Colombia', text: 'Colombia'}
                             ]"
                             name="pais" v-model="direccion.pais" />
          </div>
          <div class="col-sm-4 mt-3 col-6 ms-auto">
            <MaterialChoices id="region" label="Región" :options="regiones" name="region" v-model="direccion.region"
                             :is-disabled="!paisSeleccionado"
            />
          </div>
          <div class="col-sm-4 mt-3 col-6 ms-auto">
            <MaterialChoices id="ciudad" label="Ciudad" :options="ciudades" name="ciudad" v-model="direccion.ciudad"
                             :is-disabled="!regionSeleccionada" />
          </div>
        </div>
        <div class="row mt-3 text-start" v-if="propietarioNuevo">
          <div class="mt-3 col-12 col-md-8 ms-auto">
            <material-input id="nombreCalle" variant="static" label="Nombre de la calle" v-model="direccion.calle" />
          </div>
          <div class="mt-3 col-12 col-md-4 ms-auto">
            <material-input id="numeroCalle" variant="static" label="Número de la calle" v-model="direccion.numero" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
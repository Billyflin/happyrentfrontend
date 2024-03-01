<script setup>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import { ref } from 'vue'
const propietarioContrato = ref(false)
const esEmpresa = ref(true)
const propietario_elegido = ref(null)
// todo: listo
</script>

<template>
  <div id="Propietario" class="card mt-5">
    <div class="card-header">
      <h5>Datos del arrendador</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4 mt-3">
          <material-switch class="" id="existente" name="existente" v-model:checked="propietarioContrato"
                           label-class="mb-0 text-body text-truncate w-100"> Propietario existente
          </material-switch>
        </div>
      </div>
      <div class="row">
        <div class="row mt-4" v-if="!propietarioContrato">

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
              />
            </div>
            <div class="col-4">
              <material-input
                id="NombrePropietario"
                variant="static"
                label="Nombre propietario"
                placeholder="Nombre"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoPaternoPropietario"
                variant="static"
                label="Apellido Paterno Propietario"
                placeholder="Apellido"
              />
            </div>
            <div class="col-4">
              <material-input
                id="ApellidoMaternoPropietario"
                variant="static"
                label="Apellido Materno propietario"
                placeholder="Apellido"
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
          </div>
          <div class="row mt-4" v-if="esEmpresa">

            <div class="col-sm-3">
              <material-input
                id="Rut"
                type="text"
                variant="static"
                label="Rut Representante Legal"
                placeholder="Con guión"
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
        <div class="row mt-4" v-if="propietarioContrato">
          <div class="row">
            <div class="col-6 mb-4">
              <material-choices id="propietario_seleccionado"
                                v-model="propietario_elegido"
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

<!--        <div class="row mt-4 text-start" v-if="!propietarioContrato">-->
<!--          <h5 class="mt-3 mb-3">Dirección</h5>-->
<!--          <div class="mt-3 col-3">-->
<!--            <MaterialChoices id="paisPropiedad"-->
<!--                             label="País"-->
<!--                             :options=" [-->
<!--                             { value: 'Chile', text: 'Chile' },-->
<!--                             { value: 'Peru', text: 'Perú' },-->
<!--                             { value: 'Argentina', text: 'Argentina'},-->
<!--                             { value: 'Brasil', text: 'Brasil'},-->
<!--                              { value: 'Colombia', text: 'Colombia'}-->
<!--                             ]"-->
<!--                             name="pais" v-model="paisSeleccionado" />-->
<!--          </div>-->
<!--          <div class="col-sm-4 mt-3 col-6 ms-auto">-->
<!--            <MaterialChoices id="region" label="Región" :options="regiones" name="region" v-model="regionSeleccionada"-->
<!--                             :is-disabled="!paisSeleccionado"-->
<!--                             @change="console.log(regionSeleccionada , !regionSeleccionada, regionSeleccionada != null)" />-->
<!--          </div>-->
<!--          <div class="col-sm-4 mt-3 col-6 ms-auto">-->
<!--            <MaterialChoices id="ciudad" label="Ciudad" :options="ciudades" name="ciudad" v-model="ciudadSeleccionada"-->
<!--                             @change="console.log(ciudadSeleccionada)"-->
<!--                             :is-disabled="!regionSeleccionada" />-->
<!--          </div>-->
<!--        </div>-->
        <div class="row mt-3 text-start" v-if="!propietarioContrato">
          <div class="mt-3 col-12 col-md-8 ms-auto">
            <material-input id="nombreCalle" variant="static" label="Nombre de la calle" />
          </div>
          <div class="mt-3 col-12 col-md-4 ms-auto">
            <material-input id="numeroCalle" variant="static" label="Número de la calle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
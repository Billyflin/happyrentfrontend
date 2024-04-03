<script>
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'

export default {
  name: 'PropiedadAgregarPropietario',
  components: {
    MaterialSwitch,
    MaterialInput,
    MaterialChoices,
    LocalidadForm
  },
  data() {
    return {
      propietarioNuevo: true,
      esEmpresa: false,
      propietario_existente: ''
    }
  },
  emits: ['update:propietario'],
  watch: {
    propietarioNuevo() {
      if (this.propietarioNuevo) {
        this.esEmpresa = false
      }
    },
    esEmpresa() {
      if (this.esEmpresa) {
        this.propietarioNuevo = false
        this.$emit('update:propietario', {
          propietarioNuevo: this.propietarioNuevo,
          propietarioExistente: this.propietario_existente,
          esEmpresa: this.esEmpresa
        })
      }
    },
    propietario_existente() {
      this.$emit('update:propietario', {
        propietarioNuevo: this.propietarioNuevo,
        propietarioExistente: this.propietario_existente,
        esEmpresa: this.esEmpresa
      })
    }
  }
}
</script>
<template>
  <div id="Propietario" class="card mt-5">
    <button @click="console.log(propietario_existente)">log</button>
    <div class="card-header">
      <h5>Datos del Propietario</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4 mt-3">
          <material-switch class="" id="existente" name="existente" v-model:checked="propietarioNuevo"
                           label-class="mb-0 text-body text-truncate w-100"> Propietario existente
          </material-switch>
        </div>
      </div>
      <div class="row">
        <div class="row mt-4" v-if="!propietarioNuevo">

          <div class="col-3">
            <material-switch id="tipo_propietario" name="tipo_propietario" v-model:checked="esEmpresa"
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
            <div class="col-sm-3">
              <material-input
                id="Ocupacion"
                type="text"
                variant="static"
                label="Ocupación Propietario"
                placeholder="Ingeniero"
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
                placeholder="Ingeniero"
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
        <div class="row mt-4" v-if="propietarioNuevo">
          <div class="row">
            <div class="col-6 mb-4">
              <material-choices id="propietario_seleccionado"
                                v-model="propietario_existente"
                                :options="[
                              {value:'1',label:'Acá van a estar los propietarios existentes'},
                              {value:'2',label:'Pero de momento no se a implementado',selected : true},
                              {value:'3',label:'Se los debemos :P'}
                              ]"
                                name="propietario_existente" label="Selecciona un propietario existente"
              />
            </div>
          </div>
        </div>
        <h4>Direccion</h4>
        <LocalidadForm></LocalidadForm>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
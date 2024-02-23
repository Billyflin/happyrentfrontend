<template>
  <div class="container-fluid mt-4">
    <div id="Agregar Propiedad" class="card mt-4">
      <div class="card-header">
        <h4>Agregar Propiedad</h4>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-6">
            <material-input
              id="PropiedadName"
              variant="static"
              label="Nombre Propiedad"
              placeholder="Casa de campo, etc"
            />
          </div>
          <div class="col-4">
            <material-choices id="tipo_propiedad"
                              v-model="tipo_propiedad"
                              :options="[
                              {value:'Casa',text:'Casa'},
                              {value:'Terreno',text:'Terreno'},
                              {value:'Departamento',text:'Departamento'}
                              ]"
                              name="TipoPropiedad" label="Tipo Propiedad" :search-enabled="false" />
          </div>
          <div class="col-2">
            <material-input
              id="fechaNacimento"
              variant="static"
              type="date"
              label="Fecha Nacimiento"
              placeholder="10/10/2001"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <material-input
              id="numBanos"
              type="number"
              variant="static"
              label="numero de baños"
              placeholder="1"
            />
          </div>
          <div class="col-3">
            <material-input
              id="numEstacionamientos"
              type="number"
              variant="static"
              label="numero de estacionamientos"
              placeholder="1"
            />
          </div>
          <div class="col-3">
            <material-input
              id="numPiezas"
              type="number"
              variant="static"
              label="numero de piezas"
              placeholder="1"
            />
          </div>
          <div class="col-3">
            <material-input
              id="metrosCuadradosTerreno"
              type="number"
              variant="static"
              label="metros cuadrados terreno"
              placeholder="50"
            />
          </div>
          <div class="col-3">
            <material-input
              id="metrosCuadradosConstruidos"
              type="number"
              variant="static"
              label="metros cuadrados construidos"
              placeholder="40"
            />
          </div>
          <div class="col-3">
            <material-input
              id="numBodegas"
              type="number"
              variant="static"
              label="numero de bodegas"
              placeholder="1"
            />
          </div>
        </div>
        <div class="row mt-5">
          <!--    Agregar imagenes-->
          <h5 class="font-weight-bolder">Imágenes</h5>
          <div class="multisteps-form__content">
            <div class="mt-3 row">
              <div class="col-12">
                <label class="form-control mb-0">Product images</label>
                <div
                  id="productImg"
                  action="/file-upload"
                  class="form-control border dropzone"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div id="Agregar Propiedad" class="card mt-4">
      <div class="card-header">
        <h5>Propietario</h5>
      </div>
      <div class="card-body pt-0">
        <!--        inicio fomulario propiedades-->
        <div class="row">
          <div class="col-4 mt-3">
            <material-switch class="" id="existente" name="existente" v-model:checked="propietarioNuevo"
                             label-class="mb-0 text-body text-truncate w-100"> Propietario existente
            </material-switch>
          </div>
        </div>

        <div class="row mt-4" v-if="!propietarioNuevo">

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
        <div class="row mt-4" v-if="propietarioNuevo">
          <div class="row">
            <div class="col-6 mb-4">
              <material-choices id="propietario_seleccionado"
                                v-model="propietario_seleccionado"
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

        <div class="row mt-4 text-start" v-if="!propietarioNuevo">
          <h5 class="mt-3 mb-3">Dirección</h5>
          <div class="mt-3 col-3">
            <MaterialChoices id="pais"
                             label="País"
                             :options=" [
                             { value: 'Chile', text: 'Chile' },
                             { value: 'Peru', text: 'Perú' },
                             { value: 'Argentina', text: 'Argentina'},
                             { value: 'Brasil', text: 'Brasil'},
                              { value: 'Colombia', text: 'Colombia'}
                             ]"
                             name="pais" v-model="paisSeleccionado" />
          </div>
          <div class="col-sm-4 mt-3 col-6 ms-auto">
            <MaterialChoices id="region" label="Región" :options="regiones" name="region" v-model="regionSeleccionada"
                             :is-disabled="!paisSeleccionado"
                             @change="console.log(regionSeleccionada , !regionSeleccionada, regionSeleccionada != null)" />
          </div>
          <div class="col-sm-4 mt-3 col-6 ms-auto">
            <MaterialChoices id="ciudad" label="Ciudad" :options="ciudades" name="ciudad" v-model="ciudadSeleccionada"
                             @change="console.log(ciudadSeleccionada)"
                             :is-disabled="!regionSeleccionada" />
          </div>
        </div>
        <div class="row mt-3 text-start" v-if="!propietarioNuevo">
          <div class="mt-3 col-12 col-md-8 ms-auto">
            <material-input id="nombreCalle" variant="static" label="Nombre de la calle" />
          </div>
          <div class="mt-3 col-12 col-md-4 ms-auto">
            <material-input id="numeroCalle" variant="static" label="Número de la calle" />
          </div>
        </div>
        <!--  Seccion Reajuste-->

      </div>
    </div>


    <div id="Agregar Propiedad" class="card mt-4">
      <div class="card-header">
        <h4>Agregar Propiedad</h4>
      </div>
      <div class="card-body pt-0">


      </div>
    </div>


    <!--  Boton enviar! -->

    <material-button variant="success" size="lg" class="mt-4" full-width @click="mostrarAlerta">Enviar</material-button>

  </div>
</template>


<script>
import MaterialButton from '@/components/MaterialButton.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialBadge from '@/components/MaterialBadge.vue'
import MaterialAvatar from '@/components/MaterialAvatar.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import Dropzone from 'dropzone'
import MaterialChoices from '@/components/MaterialChoices.vue'

export default {
  name: 'AgregarPropiedad',
  components: {
    MaterialChoices,
    MaterialButton,
    MaterialSwitch,
    MaterialBadge,
    MaterialAvatar,
    MaterialInput
  },
  data() {
    return {
      paisSeleccionado: 'Argentina',
      regionSeleccionada: null,
      ciudadSeleccionada: null,
      tipo_propiedad: null,
      tipo_propietario: null,
      propietario_seleccionado: null,
      propietarioNuevo: false,
      regiones: [],
      ciudades: [],
      esEmpresa: true,
      esPersona: false
    }
  },
  watch: {
    paisSeleccionado(nuevoPais) {
      if (nuevoPais === 'Chile') {
        this.regiones = [
          { value: 'Región Metropolitana', text: 'Región Metropolitana' },
          { value: 'Valparaíso', text: 'Valparaíso' },
          { value: 'Biobío', text: 'Biobío' }
          // Agrega más opciones aquí
        ]
      } else {
        this.regiones = []
      }
      this.regionSeleccionada = null
      this.ciudadSeleccionada = null
    },
    regionSeleccionada(nuevaRegion) {
      if (nuevaRegion) {
        if (nuevaRegion === 'Región Metropolitana') {
          this.ciudades = [
            { value: 'Santiago', text: 'Santiago' },
            { value: 'Puente Alto', text: 'Puente Alto' },
            { value: 'Maipú', text: 'Maipú' }
            // Agrega más opciones aquí
          ]
        } else if (nuevaRegion === 'Valparaíso') {
          this.ciudades = [
            { value: 'Viña del Mar', text: 'Viña del Mar' },
            { value: 'Valparaíso', text: 'Valparaíso' },
            { value: 'Quilpué', text: 'Quilpué' }
            // Agrega más opciones aquí
          ]
        } else if (nuevaRegion === 'Biobío') {
          this.ciudades = [
            { value: 'Concepción', text: 'Concepción' },
            { value: 'Talcahuano', text: 'Talcahuano' },
            { value: 'Los Ángeles', text: 'Los Ángeles' }
            // Agrega más opciones aquí
          ]
        } else {
          this.ciudades = []
        }
      } else {
        this.ciudades = []
      }
    }
  },
  methods: {
    mostrarAlerta() {
      alert('hola')
    }
  },
  mounted() {
    let myDropzone = new Dropzone('#productImg')
    myDropzone.on('addedfile', (file) => {
      console.log(`File added: ${file.name}`)
    })
  }
}
</script>

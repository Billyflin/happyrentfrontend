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

<!--        inicio fomulario propiedades-->
        <div class="row">
          <h5 class="font-weight-bolder" >Propietario</h5>
          <material-switch id="existente" name="existente"  v-model:checked="propietarioNuevo"></material-switch>
        </div>
        <div class="row" v-if="!propietarioNuevo">
          <div class="col-4">
            <material-choices id="tipo_Propietario"
                              v-model="tipo_propietario"
                              :options="[
                              {value:'Empresa',text:'Empresa'},
                              {value:'Persona',text:'Persona'}
                              ]"
                              name="TipoPropietario" label="Tipo Propietario" :search-enabled="false" />
                </div>
          <!--  Seccion RepresentanteLegal Empresa-->
                <div class="col-sm-3">
                  <material-input
                    id="Rut"
                    type="text"
                    variant="static"
                    label="Rut Representante Legal"
                    placeholder="Con guión"
                  />
                </div>
                <div class="col-sm-3">
                  <material-input
                    id="RazonSocial"
                    variant="static"
                    label="Razón Social"
                    placeholder="Razón Social"
                  />
                </div>
                <div class="col-sm-2">
                  <material-input
                    id="Giro"
                    variant="static"
                    label="Giro"
                    placeholder="Giro"
                  />
                </div>
              </div>
              <div class="row">
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

              <div class="card-category mt-4">
                <h5>Contacto Representante Legal</h5>
              </div>
              <div class="row">
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
                <div class="col-2 mt-4">
                  <material-input
                    id="numeroRepresentanteLegal"
                    type="phone"
                    variant="static"
                    label="Numero de teléfono"
                    placeholder="+569 xxxxxxxx"
                  />
                </div>
              </div>

              <div class="card-category mt-4">
                <h5>Dirección Representante Legal</h5>
              </div>
        <div class="multisteps-form__content">
          <div class="row mt-4 text-start">
            <div class="mt-3 col-3">
              <MaterialChoices id="pais"
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
              <MaterialChoices id="region" :options="regiones" name="region" v-model="regionSeleccionada"
                               :is-disabled="!paisSeleccionado"  @change="console.log(regionSeleccionada , !regionSeleccionada, regionSeleccionada != null)"/>
            </div>
            <div class="col-sm-4 mt-3 col-6 ms-auto">
              <MaterialChoices id="ciudad" :options="ciudades" name="ciudad" v-model="ciudadSeleccionada" @change="console.log(ciudadSeleccionada)"
                               :is-disabled="!regionSeleccionada" />
            </div>
          </div>
          <div class="row mt-4 text-start">
            <div class="mt-3 col-12 col-md-8 ms-auto">
              <material-input id="nombreCalle" variant="static" label="Nombre de la calle" />
            </div>
            <div class="mt-3 col-12 col-md-4 ms-auto">
              <material-input id="numeroCalle" variant="static" label="Número de la calle" />
            </div>
          </div>
          <div class="mt-4 button-row d-flex">
            <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="this.$parent.nextStep">
              Next
            </button>
          </div>
        </div>
          <!--  Seccion Reajuste-->

        <div class="row" v-if="propietarioNuevo">
          <div class="col-6">
            <material-choices id="propietario_seleccionado"
                              v-model="propietario_seleccionado"
                              :options="[
                              {value:'1',text:'Acá van a estar los propietarios existentes'},
                              {value:'2',text:'Pero de momento no se a implementado'},
                              {value:'3',text:'Se los debemos :P'}
                              ]"
                              name="propietario_existente" label="Selecciona un propietario existente" :search-enabled="false" />
          </div>
        </div>


        <div class="row">
          <!--    Agregar imagenes-->
          <h5 class="font-weight-bolder">Media</h5>
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
      propietario_seleccionado: null,
      propietarioNuevo: false
    }
  },
  watch: {
    paisSeleccionado(nuevoPais) {
      if (nuevoPais === 'Chile') {
        this.regiones = [
          { value: 'Región Metropolitana', text: 'Región Metropolitana' },
          { value: 'Valparaíso', text: 'Valparaíso' },
          { value: 'Biobío', text: 'Biobío' },
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
            { value: 'Maipú', text: 'Maipú' },
            // Agrega más opciones aquí
          ]
        } else if (nuevaRegion === 'Valparaíso') {
          this.ciudades = [
            { value: 'Viña del Mar', text: 'Viña del Mar' },
            { value: 'Valparaíso', text: 'Valparaíso' },
            { value: 'Quilpué', text: 'Quilpué' },
            // Agrega más opciones aquí
          ]
        } else if (nuevaRegion === 'Biobío') {
          this.ciudades = [
            { value: 'Concepción', text: 'Concepción' },
            { value: 'Talcahuano', text: 'Talcahuano' },
            { value: 'Los Ángeles', text: 'Los Ángeles' },
            // Agrega más opciones aquí
          ]
        } else {
          this.ciudades = []
        }
      } else {
        this.ciudades = []
      }
    },
  },
  mounted() {
    let myDropzone = new Dropzone('#productImg')
    myDropzone.on('addedfile', (file) => {
      console.log(`File added: ${file.name}`)
    })
  }
}
</script>

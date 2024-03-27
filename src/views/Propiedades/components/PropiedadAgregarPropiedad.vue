<!--todo Revisado-->
<script setup>
import { defineEmits, onMounted, ref, watchEffect } from 'vue'
import Dropzone from 'dropzone'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialTextarea from '@/components/MaterialTextarea.vue'
import MaterialButton from '@/components/MaterialButton.vue'

let myDropzone = null
const nuevoEstacionamiento = ref(false)
const nuevaBodega = ref(false)
const items = ref([])
const nuevoItemEstacionamiento = ref({
  nombre: 'Estacionamiento',
  piso: '',
  numero: '',
  descripcion: ''
})
const nuevoItemBodega = ref({
  nombre: 'Bodega',
  piso: '',
  numero: '',
  descripcion: ''
})
const propiedad = ref({
  nombre: '',
  tipo: '',
  numBanos: 0,
  numEstacionamientos: [],
  numPiezas: 0,
  metrosCuadradosTerreno: 0,
  metrosCuadradosConstruidos: 0,
  numBodegas: [],
  imagenes: []
})
const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0
  }
}

function agregarEstacionamiento() {
  console.log('Nuevo item:', nuevoItemEstacionamiento.value)
  items.value.push({ ...nuevoItemEstacionamiento.value })
  nuevoItemEstacionamiento.value = { piso: '', numero: '', descripcion: '',nombre:'Estacionamiento' }
}

function agregarBodega() {
  console.log('Nuevo item:', nuevoItemBodega.value)
  items.value.push({ ...nuevoItemBodega.value })
  nuevoItemBodega.value = { piso: '', numero: '', descripcion: '',nombre:'Bodega' }
}

const emit = defineEmits(['update:propiedad'])
watchEffect(() => {
  emit('update:propiedad', propiedad.value)
})

onMounted(() => {
  myDropzone = new Dropzone('#productImg', {
    maxFiles: 1,
    acceptedFiles: 'image/*',
    autoProcessQueue: false,
    addRemoveLinks: true,
    dictRemoveFile: 'Eliminar',
    dictDefaultMessage: 'Arrastra aquí tus imágenes',
    dictFallbackMessage: 'Tu navegador no soporta arrastrar y soltar para subir archivos',
    dictInvalidFileType: 'No puedes subir este tipo de archivo',
    dictFileTooBig: 'El archivo es muy grande',
    dictCancelUpload: 'Cancelar subida'
  })

  myDropzone.on('addedfile', (file) => {
    if (myDropzone.files.length > 1) {
      myDropzone.removeFile(myDropzone.files[0])
    }
    // Agregar el objeto de archivo a propiedad.value.imagenes
    propiedad.value.imagenes.push(file)
    console.log(
      'Imagenes: ',
      propiedad.value.imagenes)
    console.log('Propiedad: ', propiedad.value)
    emit('update:propiedad', propiedad.value)
  })
  myDropzone.on('removedfile', (file) => {
    propiedad.value.imagenes = []
    console.log('Imagenes: ', propiedad.value.imagenes)
    console.log('Propiedad: ', propiedad.value)
    emit('update:propiedad', propiedad.value)
  })
})
</script>

<template>
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
            v-model="propiedad.nombre"
          />
        </div>
        <div class="col-4">
          <material-choices id="tipo_propiedad"
                            :options="[
                              {value:'Terreno',label:'Terreno'},
                              {value:'Casa',label:'Casa',selected:true},
                              {value:'Departamento',label:'Departamento'}
                              ]"
                            name="TipoPropiedad" label="Tipo Propiedad" :search-enabled="false" />
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
            v-model="propiedad.numBanos"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="numPiezas"
            type="number"
            variant="static"
            label="numero de piezas"
            placeholder="1"
            v-model="propiedad.numPiezas"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="metrosCuadradosTerreno"
            type="number"
            variant="static"
            label="metros cuadrados terreno"
            placeholder="50"
            v-model="propiedad.metrosCuadradosTerreno"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="metrosCuadradosConstruidos"
            type="number"
            variant="static"
            label="metros cuadrados construidos"
            placeholder="40"
            v-model="propiedad.metrosCuadradosConstruidos"
            @input="validateInput"
          />
        </div>
      </div>
      <div class="row mt-5">
        <!--    Agregar imagenes-->
        <h5 class="font-weight-bolder">Imágenes</h5>
        <div class="multisteps-form__content">
          <div class="mt-3 row">
            <div class="col-12">
              <label class="form-control mb-0">Imagen de la propiedad</label>
              <div
                id="productImg"
                action="/file-upload"
                class="form-control border dropzone"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!--      estacionamientos y bodegas-->
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-4 mt-3">
            <material-switch id="estacionamientos" name="estacionamientos" v-model:checked="nuevoEstacionamiento"
                             checked
                             label-class="mb-0 text-body text-truncate w-100">
              {{ nuevoEstacionamiento ? 'con Estacionamiento' : 'sin Estacionamiento' }}
            </material-switch>
          </div>
          <div class="col-4 mt-3">
            <material-switch id="bodegas" name="bodegas" v-model:checked="nuevaBodega" checked
                             label-class="mb-0 text-body text-truncate w-100">
              {{ nuevaBodega ? 'con Bodega' : 'sin Bodega' }}
            </material-switch>
          </div>
        </div>
        <div class="row mt-4" v-if="nuevoEstacionamiento">
          <div class="row mt-4">
            <h5>Agregar Estacionamiento</h5>
            <form @submit.prevent="agregarEstacionamiento" class="row mt-2">
              <div class="col-4">
                <MaterialInput
                  id="pisoEstacionamiento"
                  size="lg"
                  type="number"
                  label="piso"

                  v-model="nuevoItemEstacionamiento.piso"
                  isRequired
                />
              </div>
              <div class="col-4">
                <MaterialInput
                  id="numeroEstacionamiento"
                  type="number"
                  label="numero"
                  @input="validateInput"
                  v-model="nuevoItemEstacionamiento.numero"
                  isRequired
                />
              </div>
              <div class="col-12 mt-2">
                <MaterialTextarea
                  id="descripcionEstacionamiento"
                  placeholder="Añade una descripción..."
                  v-model="nuevoItemEstacionamiento.descripcion"
                  isRequired
                  :resizable="false"
                />
              </div>
              <div class="col-12 mt-4 mb-4">
                <material-button type="submit" color="success">Agregar</material-button>
              </div>
            </form>
          </div>
        </div>
        <div class="row mt-4" v-if="nuevaBodega">
          <div class="row mt-4">
            <h5>Agregar Bodega</h5>
            <form @submit.prevent="agregarBodega" class="row mt-2">
              <div class="col-4">
                <MaterialInput
                  id="pisoBodega"
                  size="lg"
                  type="number"
                  label="piso"
                  v-model="nuevoItemBodega.piso"
                  isRequired
                />
              </div>
              <div class="col-4">
                <MaterialInput
                  id="numeroBodega"
                  type="number"
                  label="numero"
                  @input="validateInput"
                  v-model="nuevoItemBodega.numero"
                  isRequired
                />
              </div>
              <div class="col-12 mt-2">
                <MaterialTextarea
                  id="descripcionBodega"
                  placeholder="Añade una descripción..."
                  v-model="nuevoItemBodega.descripcion"
                  isRequired
                  :resizable="false"
                />
              </div>
              <div class="col-12 mt-4 mb-4">
                <material-button type="submit" color="success">Agregar</material-button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row mt-4" v-if="nuevoEstacionamiento || nuevaBodega" >
        <div class="table-responsive">
          <table id="datatable-search2" class="table table-flush">
            <thead class="thead-light">
            <tr>
              <th class="text-center">nombre</th>
              <th class="text-center">Piso</th>
              <th class="text-center">Numero</th>
              <th class="text-center">Descripción</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td class="text-sm font-weight-normal text-center">{{ item.nombre }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.piso }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.numero }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.descripcion }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
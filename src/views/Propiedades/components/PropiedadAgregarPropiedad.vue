<script setup>
import { defineEmits, onMounted, ref, watchEffect } from 'vue'
import Dropzone from 'dropzone'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'

let myDropzone = null
const propiedad = ref({
  nombre: '',
  tipo: '',
  numBanos: 0,
  numEstacionamientos: 0,
  numPiezas: 0,
  metrosCuadradosTerreno: 0,
  metrosCuadradosConstruidos: 0,
  numBodegas: 0,
  imagenes: []
})

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
                            v-model="propiedad.tipo"
                            :options="[
                              {value:'Casa',text:'Casa'},
                              {value:'Terreno',text:'Terreno'},
                              {value:'Departamento',text:'Departamento'}
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
          />
        </div>
        <div class="col-3">
          <material-input
            id="numEstacionamientos"
            type="number"
            variant="static"
            label="numero de estacionamientos"
            placeholder="1"
            v-model="propiedad.numEstacionamientos"
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
          />
        </div>
        <div class="col-3">
          <material-input
            id="numBodegas"
            type="number"
            variant="static"
            label="numero de bodegas"
            placeholder="1"
            v-model="propiedad.numBodegas"
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
    </div>
  </div>
</template>
<!--todo LISTO-->
<script setup>

import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import { defineEmits, onMounted, watchEffect } from 'vue'
import Dropzone from 'dropzone'
import propiedad from '@/views/Propiedades/Propiedad.vue'

let myDropzone = null
const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0;
  }
}
const emit = defineEmits(['update:propiedad'])
watchEffect(() => {
  emit('update:propiedad', propiedad.value)
})
onMounted(() => {
  myDropzone = new Dropzone('#propiedadImg', {
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
  })
})
</script>
<template>
  <div id="Propiedad" class="card mt-4">
    <div class="card-header">
      <h5>Propiedad</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-6">
          <material-input
            id="calleDirection"
            variant="static"
            label="Calle"
            placeholder="Calle"
          />
        </div>
        <div class="col-2">
          <material-input
            id="numeroDirection"
            type="number"
            variant="static"
            label="Número"
            placeholder="n°"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="postal"
            type="number"
            variant="static"
            label="Código postal"
            placeholder="postal"
            @input="validateInput"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-3">
          <material-choices id="tipo_propiedad"
                            v-model="tipo_propiedad"
                            :options="[
                              {value:'Casa',text:'Casa'},
                              {value:'Terreno',text:'Terreno'},
                              {value:'Departamento',text:'Departamento'}
                              ]"
                            name="TipoPropiedad" label="Tipo Propiedad" :search-enabled="false" />
        </div>
        <div class="mt-2 col-2">
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
        <div class="col-sm-3 mt-3 col-3 ms-auto">
          <MaterialChoices id="region" label="Región" :options="regiones" name="region" v-model="regionSeleccionada"
                           :is-disabled="!paisSeleccionado"
                           @change="console.log(regionSeleccionada , !regionSeleccionada, regionSeleccionada != null)" />
        </div>
        <div class="col-sm-3 mt-3 col-3 ms-auto">
          <MaterialChoices id="ciudad" label="Ciudad" :options="ciudades" name="ciudad" v-model="ciudadSeleccionada"
                           @change="console.log(ciudadSeleccionada)"
                           :is-disabled="!regionSeleccionada" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-2">
          <material-input
            id="numBanos"
            type="number"
            variant="static"
            label="Numero de baños"
            placeholder="Numero de baños"
            @input="validateInput"
          />
        </div>
        <div class="col-2">
          <material-input
            id="numPiezas"
            type="number"
            variant="static"
            label="Numero de Piezas"
            placeholder="Numero de Piezas"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="numEstacionamientos"
            type="number"
            variant="static"
            label="Numero de Estacionamientos"
            placeholder="Numero de Estacionamientos"
            @input="validateInput"
          />
        </div>
        <!--        <div class="row mt-4">-->
        <div class="col-2">
          <material-input
            id="metrosCuadradosT"
            type="number"
            variant="static"
            label="Metros Cuadrados Terreno"
            placeholder=" M²"
            @input="validateInput"
          />
        </div>
        <div class="col-2">
          <material-input
            id="metrosCuadradosC"
            type="number"
            variant="static"
            label="Metros Cuadrados Construidos"
            placeholder=" M²"
            @input="validateInput"

          />
        </div>
        <!--        </div>-->
      </div>
      <div class="row">
        <!--    Agregar imagenes-->
        <h5 class="font-weight-bolder">Imagenes</h5>
        <div class="multisteps-form__content">
          <div class="mt-3 row">
            <div class="col-12">
              <label class="form-control mb-0">Puedes añadir imágenes arrastrando los archivos o haciendo click sobre
                este cuadro </label>
              <div
                id="propiedadImg"
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

<style scoped>

</style>


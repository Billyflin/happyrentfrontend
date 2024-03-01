<script setup>

import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import { onMounted , ref } from 'vue'
import Dropzone from 'dropzone'
const tipo_propiedad = ref(null)
// todo Arrerglar dropzone
onMounted(() => {
  {
    let myDropzone = new Dropzone('#productImg')
    myDropzone.on('addedfile', (file) => {
      console.log(`File added: ${file.name}`)
    })
  }
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
        <!--          <div class="col-2">-->
        <!--            <material-input-->
        <!--              id="fechaNacimento"-->
        <!--              variant="static"-->
        <!--              type="date"-->
        <!--              label="Fecha Nacimiento"-->
        <!--              placeholder="10/10/2001"-->
        <!--            />-->
        <!--          </div>-->
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
</template>

<style scoped>

</style>
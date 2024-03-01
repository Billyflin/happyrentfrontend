<script setup>

import MaterialInput from '@/components/MaterialInput.vue'
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
          />
        </div>
        <div class="col-3">
          <material-input
            id="postal"
            type="number"
            variant="static"
            label="Código postal"
            placeholder="postal"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-3">
          <label class="form-label mt-4 ms-0">Tipo Propiedad</label>
          <select
            id="choices-tipo-propiedad"
            class="form-control"
            name="choices-tipo-propiedad"
          >
            <option value="Casa">Casa</option>
            <option value="Edificio">Edificio</option>
            <option value="Sitio">Sitio</option>
            <option value="Bodega">Bodega</option>
            <option value="Departamento">Departamento</option>
            <option value="Parcela">Parcela</option>
          </select>
        </div>
        <div class="col-sm-2 col-2">
          <label class="form-label mt-4 ms-0" for="choices-pais">País</label>

          <select class="form-control" v-model="selectedPais" @change="actualizarRegiones" id="choices-pais"
                  name="choices-pais">
            <option value="Chile">Chile</option>
            <!-- Agrega más opciones aquí -->
          </select>

        </div>
        <div class="col-sm-2 col-2">
          <label class="form-label mt-4 ms-0" for="choices-region">Región</label>
          <select v-model="selectedRegion" id="choices-region" :disabled="!selectedPais">
            <!-- Opciones de regiones según el país seleccionado -->
            <option v-for="region in regions" :key="region">{{ region }}</option>
          </select>
        </div>

        <div class="col-sm-3 col-2">
          <label class="form-label mt-4 ms-0" for="choices-ciudad">Ciudad</label>
          <select v-model="selectedCiudad" id="choices-ciudad" :disabled="!selectedRegion">
            <!-- Opciones de ciudades según la región seleccionada -->
            <option v-for="ciudad in ciudades" :key="ciudad">{{ ciudad }}</option>
          </select>
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
          />
        </div>
        <div class="col-2">
          <material-input
            id="numPiezas"
            type="number"
            variant="static"
            label="Numero de Piezas"
            placeholder="Numero de Piezas"
          />
        </div>
        <div class="col-3">
          <material-input
            id="numEstacionamientos"
            type="number"
            variant="static"
            label="Numero de Estacionamientos"
            placeholder="Numero de Estacionamientos"
          />
        </div>
        <!--        <div class="row mt-4">-->
        <div class="col-2">
          <material-input
            id="metrosCuadrados"
            type="number"
            variant="static"
            label="Metros Cuadrados Terreno"
            placeholder=" M²"
          />
        </div>
        <div class="col-2">
          <material-input
            id="metrosCuadrados"
            type="number"
            variant="static"
            label="Metros Cuadrados Construidos"
            placeholder=" M²"
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
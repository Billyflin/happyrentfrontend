<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <h4>Edita la propiedad a continuación</h4>
      </div>
      <div
        class="text-right col-lg-6 d-flex flex-column justify-content-center"
      >
        <button
          type="button"
          class="mt-2 mb-0 btn bg-gradient-success ms-lg-auto me-lg-0 me-auto mt-lg-0"
          @click="acciones.guardar"
        >
          Guardar
        </button>
      </div>
    </div>
    <div class="mt-4 row">
<!--    imagen de la propiedad-->
      <div class="col-lg-4">
        <div class="card mt-4" data-animation="true">
          <div class="card-body text-center">
            <img
              class="mt-3 rounded img-fluid"
            src="https://images.unsplash.com/photo-1606744824163-985d376605aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Propiedad"
            >
            <p class="mb-0">
              El lugar está cerca de la playa de Barceloneta y la parada de autobús a solo 2 minutos a pie y cerca de "Naviglio" donde puedes disfrutar de la vida nocturna principal en Barcelona.
            </p>
            <div class="mt-3 mx-auto"> <!-- Modificamos el margen para que los botones estén debajo del texto -->
              <button
                class="btn bg-gradient-success btn-sm mb-0 me-2"
                type="button"
                name="button"
                @click="acciones.editar"
              >
                Editar
              </button>
              <button
                class="btn btn-outline-dark btn-sm mb-0"
                type="button"
                name="button"
                @click="acciones.eliminar"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
<!--    Información de la propiedad-->
      <div class="mt-4 col-lg-8 mt-lg-0">
        <div class="card">
          <div class="card-body">
            <h5 class="font-weight-bolder">Información de la Propiedad</h5>
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
                    label="baños"
                    placeholder="1"
                    v-model="propiedad.numBanos"
                    @input="validateInput"
                  />
                </div>
                <div class="col-3">
                  <material-input
                    id="numEstacionamientos"
                    type="number"
                    variant="static"
                    label="estacionamientos"
                    placeholder="1"
                    v-model="propiedad.numEstacionamientos"
                    @input="validateInput"
                  />
                </div>
                <div class="col-3">
                  <material-input
                    id="numPiezas"
                    type="number"
                    variant="static"
                    label="piezas"
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
                <div class="col-4">
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
                <div class="col-3">
                  <material-input
                    id="numBodegas"
                    type="number"
                    variant="static"
                    label="numero de bodegas"
                    placeholder="1"
                    v-model="propiedad.numBodegas"
                    @input="validateInput"
                  />
                </div>
              </div>
            <div class="row">
              <div class="col-sm-6">
                <label class="mt-4 ms-0">Descripción</label>
                <p class="text-xs form-text text-muted ms-1 d-inline">
                  (opcional)
                </p>
                <textarea class="form-control mt-1" rows="3"></textarea>
              </div>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import { defineEmits, ref, watchEffect } from 'vue'

const propiedad = ref({
  nombre: 'casa de campo',
  tipo: 'casa',
  numBanos: 0,
  numEstacionamientos: 0,
  numPiezas: 0,
  metrosCuadradosTerreno: 0,
  metrosCuadradosConstruidos: 0,
  numBodegas: 0,
  imagenes: []
})
const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0
  }
}
const emit = defineEmits(['update:propiedad'])
watchEffect(() => {
  emit('update:propiedad', propiedad.value)
})

const acciones = {
  guardar: () => {
    console.log(propiedad.value)
  },
  editar: () => {
    console.log('editar')
  },
  eliminar: () => {
    console.log('eliminar')
  }
}
</script>

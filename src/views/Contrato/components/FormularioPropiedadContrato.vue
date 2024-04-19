<script setup>
import MaterialAvatar from '@/components/MaterialAvatar.vue'
import { useAuthStore } from '@/store/index.js'

const store = useAuthStore()

</script>
<template>
  <div id="Propiedad" class="card mt-4">
    <div class="card-header">
      <h5>Propiedad</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <!--          <h5>{{store.propiedad.imagen.dataURL}}</h5>-->
        <!--          <material-avatar  alt="Avatar" size="xl" border-radius="lg"/>-->
        <div class="col-xl-5 col-lg-5 text-center">
          <img
            class="w-100 border-radius-lg shadow-lg mx-auto"
            :src="'data:image/png;base64,'+ store.propiedad.imagen.imageData"
            alt="chair"
          />
        </div>
        <div class="mx-4 col flex-grow">
          <h5 class="mt-4 mt-lg-0">{{ store.propiedad.direccion.calle + ' ' + store.propiedad.direccion.numero }}</h5>
          <h6 class="mt-0">{{ store.propiedad.direccion.ciudad + ', ' + store.propiedad.direccion.pais }}</h6>
          <span v-if="!store.propiedad.arrendado" class="badge badge-success">Disponible</span>
          <span v-else class="badge badge-danger">Arrendado</span>
          <div class="col mt-6">
            <strong class="text-dark">Fecha de creación:</strong>&nbsp;{{ store.propiedad.fechaCreacion }}
          </div>
          <div class="col mt-2">
            <strong class="text-dark">Tipo de propiedad:</strong>&nbsp;{{ store.propiedad.tipoPropiedad.tipo }}
          </div>
          <div class="col mt-2">
            <strong class="text-dark">Cantidad de baños:</strong>&nbsp;{{ store.propiedad.numBanos }}
          </div>
          <div class="col mt-2">
            <strong class="text-dark">Cantidad de dormitorios:</strong>&nbsp;{{ store.propiedad.numPiezas }}
          </div>
          <div class="col mt-2">
            <strong class="text-dark">Metros cuadrados del
              terreno:</strong>&nbsp;{{ store.propiedad.metrosCuadradosTerreno }}
          </div>
          <div class="col mt-2">
            <strong class="text-dark">Metros cuadrados
              construidos:</strong>&nbsp;{{ store.propiedad.metrosCuadradosConstruidos }}

          </div>
        </div>
        <div class="mx-1 col-lg-2 col-xl-2">
          <div>
            <!--        <div class="mx-2 col flex-grow-1">-->
            <h5 class="mt-0">Estacionamientos del edificio</h5>
            <ul class="list-group">
              <li v-for="estacionamiento in store.propiedad.estacionamientos"
                  class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
              >

                <div class="d-flex flex-column">
                  <h6 class="mb-3 text-sm">{{ estacionamiento.descripcion }}</h6>
                  <div class="d-flex justify-content-between">
                    <span class="mb-2 text-xs mx-2">
                      Piso:<span class="text-dark font-weight-bold ms-sm-2">{{ estacionamiento.piso }}</span>
                    </span>
                    <span class="mb-2 text-xs ml-auto">
                      Numero:<span class="text-dark ms-sm-2 font-weight-bold">{{ estacionamiento.numero }}</span>
                    </span>
                  </div>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                ></a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="mx-1 col-lg-2 col-xl-2">
          <div>
            <h5 class="mt-4">Bodegas del edificio</h5>
            <ul class="list-group">
              <li v-for="bodega in store.propiedad.bodegas"
                  class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
              >
                <div class="d-flex flex-column">
                  <h6 class="mb-3 text-sm">{{ bodega.descripcion }}</h6>
                  <div class="d-flex justify-content-between">
                    <span class="mb-2 text-xs mx-2">
                      Piso:<span class="text-dark font-weight-bold ms-sm-2">{{ bodega.piso }}</span>
                    </span>
                    <span class="mb-2 text-xs ml-auto">
                      Numero:<span class="text-dark ms-sm-2 font-weight-bold">{{ bodega.numero }}</span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>


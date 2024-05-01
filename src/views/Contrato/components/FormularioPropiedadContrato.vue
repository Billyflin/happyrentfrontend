<script setup>
import { useAuthStore } from '@/store/index.js'

const store = useAuthStore()
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('es-CL', options)
}

</script>
<template>
  <div class="card">
    <div class="card-header">
      <h5>Propiedad</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-xl-5 col-lg-5 text-center">
          <img
            class="w-100 border-radius-lg shadow-lg mx-auto"
            :src="'data:image/png;base64,'+ store.propiedad.imagenPortada.contenido"
            alt="chair"
          />
        </div>
        <div class="mx-4 col flex-grow">
          <h5 class="mb-0 text-capitalize">{{ store.propiedad.direccion.calle + ' ' + store.propiedad.direccion.numero
            }}</h5>
          <h6 class="font-weight-normal mt-0 text-capitalize">{{ store.propiedad.direccion.ciudad + ', '+store.propiedad.direccion.region+ ', ' + store.propiedad.direccion.pais }}</h6>
          <span v-if="!store.propiedad.arrendado" class="badge badge-success">Disponible</span>
          <span v-else class="badge badge-danger">Arrendado</span>
          <p class="mb-0 mt-6">
            <strong> Fecha de creación: </strong>
            &nbsp;{{ formatDate(store.propiedad.createDate) }}
          </p>
          <p class="mb-0 ">
            <strong> Tipo de propiedad:</strong>&nbsp;{{ store.propiedad.type.toUpperCase() }}
          </p>








          <div v-if="store.propiedad.type === 'departamento'">
            <p class="mb-0">
              <strong> Piso: </strong>
              {{ store.propiedad.piso }}
            </p>
            <p class="mb-0">
              <strong> Cantidad de baños:</strong>&nbsp;{{ store.propiedad.banios }}
            </p>
            <p class="mb-0">
              <strong> Cantidad de dormitorios:</strong>&nbsp;{{ store.propiedad.habitaciones }}
            </p>
            <p class="mb-0">
              <strong> Metros cuadrados:</strong>&nbsp;{{ store.propiedad.metrosCuadrados }}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'casa'">
            <p class="mb-0">
              <strong> Pisos: </strong>
              {{ store.propiedad.numeroDePisos }}
            </p>
            <p class="mb-0">
              <strong>Cantidad de baños:</strong>&nbsp;{{ store.propiedad.banios }}
            </p>
            <p class="mb-0">
              <strong> Cantidad de dormitorios:</strong>&nbsp;{{ store.propiedad.habitaciones }}
            </p>
            <p class="mb-0">
              <strong> Metros cuadrados del terreno:</strong>&nbsp;{{ store.propiedad.metrosCuadradosTerreno }}
            </p>
            <p class="mb-0">
              <strong>Metros cuadrados construidos:</strong>&nbsp;{{ store.propiedad.metrosCuadradosConstruidos }}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'local'">
            <p class="mb-0">
              <strong> Cantidad de baños:</strong>&nbsp;{{ store.propiedad.banios }}
            </p>
            <p class="mb-0">
              <strong> Metros cuadrados:</strong>&nbsp;{{ store.propiedad.metrosCuadrados }}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'terreno'">
            <p class="mb-0">
              <strong> Metros cuadrados:</strong>&nbsp;{{ store.propiedad.metrosCuadrados }}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'bodega'">
            <p class="mb-0">
              <strong> Metros cuadrados:</strong>&nbsp;{{ store.propiedad.metrosCuadrados }}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'oficina'">
            <p class="mb-0">
              <strong> Cantidad de baños:</strong>&nbsp;{{ store.propiedad.banios }}
            </p>
            <p class="mb-0">
              <strong> Metros cuadrados:</strong>&nbsp;{{ store.propiedad.metrosCuadrados }}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'estacionamiento'">
            <p class="mb-0">
              <strong> Metros cuadrados:</strong>&nbsp;{{ store.propiedad.metrosCuadrados }}
            </p>
          </div>
<!--          <p class="mb-0">-->
<!--            <strong> Pisos: </strong>-->
<!--            {{ store.propiedad.numeroDePisos }}-->
<!--          </p>-->
<!--          <p class="mb-0">-->
<!--            <strong>Cantidad de baños:</strong>&nbsp;{{ store.propiedad.banios }}-->
<!--          </p>-->
<!--          <p class="mb-0">-->
<!--            <strong> Cantidad de dormitorios:</strong>&nbsp;{{ store.propiedad.habitaciones }}-->
<!--          </p>-->
<!--          <p class="mb-0">-->
<!--            <strong> Metros cuadrados del terreno:</strong>&nbsp;{{ store.propiedad.metrosCuadradosTerreno }}-->
<!--          </p>-->
<!--          <p class="mb-0">-->
<!--            <strong>Metros cuadrados construidos:</strong>&nbsp;{{ store.propiedad.metrosCuadradosConstruidos }}-->
<!--          </p>-->

        </div>












        <div class="col">
          <h5 class="font-weight-normal">Propietario</h5>
          <p class="mb-0"><strong>Nombre:</strong> {{ store.propiedad.propietario.nombre  + ' ' + store.propiedad.propietario.apellidoPaterno + ' ' + store.propiedad.propietario.apellidoMaterno}}</p>
          <p class="mb-0"><strong>Email:</strong> {{ store.propiedad.propietario.email }}</p>
          <p class="mb-0"><strong>Teléfono:</strong> {{ store.propiedad.propietario.telefono }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>


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
              <strong> Estacionamientos:</strong>{{ store.propiedad.estacionamientos}}
            </p>
            <p class="mb-0">
              <strong> Bodegas:</strong>{{ store.propiedad.bodegas }}
            </p>
            <p class="mb-0">
              <strong> Metros cuadrados:</strong>&nbsp;{{ store.propiedad.metrosCuadrados }}
            </p>
            <p class="mb-0">
              <strong> Descripción:</strong>&nbsp;{{ store.propiedad.descripcion}}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'casa'">
            <p class="mb-0">
              <b>Piscina</b>
              {{store.propiedad.piscina}}
            </p>
            <p class="mb-0">
              <b>Patio</b>
              {{store.propiedad.patio}}
            </p>
            <p class="mb-0">
              <b>Jardin</b>
              {{store.propiedad.jardines}}
            </p>
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
              <strong> Antiguedad:</strong>{{ store.propiedad.antiguedad }}
            </p>
            <p class="mb-0">
              <strong> Estacionamientos:</strong>{{ store.propiedad.estacionamientos }}
            </p>
            <p class="mb-0">
              <strong> Metros cuadrados del terreno:</strong>&nbsp;{{ store.propiedad.metrosCuadradosDeTerreno}}
            </p>
            <p class="mb-0">
              <strong>Metros cuadrados construidos:</strong>&nbsp;{{ store.propiedad.metrosCuadradosDeConstruccion}}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'local'">
            <p class="mb-0">
              <strong> Pisos: </strong>
              {{ store.propiedad.piso }}
            </p>
            <p class="mb-0">
              <strong> Numero de locales:</strong>{{ store.propiedad.numero}}
            </p>
            <p class="mb-0">
              <strong> Descripcion:</strong>{{ store.propiedad.descripcion}}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'terreno'">
            <p class="mb-0">
              <b> Area:</b>{{ store.propiedad.area}}
            </p>
            <p class="mb-0">
              <b> tipo de Terreno:</b>{{ store.propiedad.tipoTerreno}}
            </p>
            <p class="mb-0">
              <b> Uso de suelo:</b>{{ store.propiedad.usoSuelo}}
            </p>
            <p class="mb-0">
              <b> Topografia:</b>{{ store.propiedad.topografia}}
            </p>
            <p class="mb-0">
              <b> Servicios:</b>{{ store.propiedad.servicios}}
            </p>
            <p class="mb-0">
              <b> Forma de terreno:</b>{{ store.propiedad.formaTerreno}}
            </p>
            <p class="mb-0">
              <b> Frente:</b>&nbsp;{{ store.propiedad.frente}}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'bodega'">
            <p class="mb-0">
              <b> Numero de pisos:</b>{{ store.propiedad.numeroDePisos}}
            </p>
            <p class="mb-0">
              <b> Numero:</b>{{ store.propiedad.numero}}
            </p>
            <p class="mb-0">
              <b> Descripcion:</b>{{ store.propiedad.descripcion}}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'oficina'">
            <p class="mb-0">
              <b> Numero de pisos:</b>{{ store.propiedad.piso}}
            </p>
            <p class="mb-0">
              <b> Numero de baños:</b>&nbsp;{{ store.propiedad.banios }}
            </p>
            <p class="mb-0">
              <b> Numero de Cocinas:</b>{{ store.propiedad.cocinas}}
            </p>
            <p class="mb-0">
              <b> Numero de Oficinas:</b>{{ store.propiedad.numeroDeOficinas}}
            </p>
            <p class="mb-0">
              <b> Numero de comedores:</b>{{ store.propiedad.numeroDeComedores}}
            </p>
            <p class="mb-0">
              <b> Descripcion:</b>{{ store.propiedad.descripcion}}
            </p>
          </div>
          <div v-else-if="store.propiedad.type === 'estacionamiento'">
            <p class="mb-0">
              <b> Numero de pisos:</b>{{ store.propiedad.piso}}
            </p>
            <p class="mb-0">
              <b> Numero:</b>{{ store.propiedad.numero}}
            </p>
            <p class="mb-0">
              <b> Descripcion:</b>{{ store.propiedad.descripcion}}
            </p>
          </div>

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


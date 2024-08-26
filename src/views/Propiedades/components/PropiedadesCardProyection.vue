<template>
  <div class="card" data-animation="true">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a class="d-block blur-shadow-image">
        <img
          :src="'data:image/png;base64,' + img"
          alt="img-blur-shadow"
          class="img-fluid border-radius-lg image-standard"
        />
        <svg-footer-card />
      </a>
      <div
        :style="`background-image: url('data:image/png;base64,' + img)`"
        class="colored-shadow"
      ></div>
    </div>
    <div class="card-body text-center">
      <div class="d-flex justify-content-center mt-n6 mx-auto">
        <button
          class="btn btn-link text-primary border-0 d-flex align-items-center justify-content-center"
          data-bs-placement="bottom"
          data-bs-toggle="tooltip"
          title="Crear contrato"
          @click="irANuevoContrato(propiedad.propiedadId)"
        >
          <span class="material-symbols-outlined">history_edu</span> Crear Contrato
        </button>

        <button
          class="btn btn-link text-primary border-0 d-flex align-items-center justify-content-center"
          data-bs-placement="bottom"
          data-bs-toggle="tooltip"
          title="Editar Propiedad"
          @click="irAEditarPropiedad(propiedad.propiedadId)"
        >
          <span class="material-symbols-outlined">manage_search</span>Ver Propiedad
        </button>
      </div>
      <h5 class="font-weight-normal text-capitalize mt-3">
        <a href="javascript:">{{ propiedad.direccionCalle + ' ' + propiedad.direccionNumero }}</a>
      </h5>
      <p class="mb-0">
        {{
          propiedad.propietarioTipo === 'persona'
            ? propiedad.propietarioNombre +
              ' ' +
              propiedad.propietarioApellido +
              ' ' +
              propiedad.propietarioMaterno
            : propiedad.propietarioNombre
        }}
      </p>
      <div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-start mb-0 mt-1">
            <span v-if="propiedad.propietarioTipo" class="mb-0 mt-0 badge badge-warning">
              {{ propiedad.propiedadTipo.toUpperCase() }}
            </span>
            <span v-if="propiedad.propietarioTipo" class="mb-0 mx-1 mt-0 badge badge-info">
              {{ propiedad.propietarioTipo.toUpperCase() }}
            </span>
            <span v-if="propiedad.propiedadArrendado" class="mb-0 mt-0 badge badge-success">
              ARRENDADO
            </span>
          </div>
        </div>
      </div>
    </div>
    <hr class="dark horizontal my-0" />
    <div class="card-footer d-flex">
      <p class="font-weight-normal my-auto">{{ formatDate(propiedad.propiedadFechaCreacion) }}</p>
      <i class="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
      <p class="text-sm my-auto">
        {{ propiedad.direccionCiudad + ', ' + propiedad.direccionPais }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { usePropiedadesStore } from '@/store/propiedadesStore.js'
import router from '@/router/index.js'
import { useContratosStore } from '@/store/contratosStore.js'
import SvgFooterCard from '@/views/Propiedades/components/SvgFooterCard.vue'

const store = usePropiedadesStore()
const store2 = useContratosStore()

const props = defineProps({
  img: {
    type: String,
    required: true
  },
  propiedad: {
    type: Object
  }
})
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('es-CL', options)
}

const irAEditarPropiedad = (id) => {
  console.log(id)
  store.fetchPropiedad(id).then(() => router.push({ name: 'DetallesPropiedad' }))
}
const irANuevoContrato = (id) => {
  store2.fetchPropiedad(id).then(() => router.push({ name: 'NuevoContrato' }))
}
</script>

<style scoped>
.image-standard {
  width: 100%;
  height: 300px; /* Ajusta la altura según tus necesidades */
  object-fit: cover; /* Esto asegura que la imagen se recorte adecuadamente si es necesario */
}
</style>

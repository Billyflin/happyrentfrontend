<template>
  <div class="card" data-animation="true">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a class="d-block blur-shadow-image">
        <img
          :src="'data:image/png;base64,' + img"
          alt="img-blur-shadow"
          class="img-fluid shadow border-radius-lg image-standard"
        />
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
          @click="irANuevoContrato"
        >
          <span class="material-symbols-outlined">history_edu</span> Crear Contrato
        </button>

        <router-link :to="'/propiedad/edit/'+propiedad.id">
          <button
            class="btn btn-link text-primary border-0 d-flex align-items-center justify-content-center"
            data-bs-placement="bottom"
            data-bs-toggle="tooltip"
            title="Editar Propiedad"
          >
            <span class="material-symbols-outlined text-lg">edit</span> Editar
          </button>
        </router-link>
      </div>
      <h5 class="font-weight-normal text-capitalize mt-3">
        <a href="javascript:;">{{ propiedad.direccion.calle + ' ' + propiedad.direccion.numero }}</a>
      </h5>
      <p class="mb-0">
        {{
          propiedad.propietario.type === 'persona'
            ? propiedad.propietario.nombre + ' ' + propiedad.propietario.apellidoPaterno + ' ' + propiedad.propietario.apellidoMaterno
            : propiedad.propietario.nombre
        }}
      </p>
      <div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-start mb-0 mt-1">
            <span v-if="propiedad.propietario.type" class="mb-0 mt-0 badge badge-warning">
              {{ propiedad.propietario.type.toUpperCase() }}
            </span>
            <span v-if="propiedad.type" class="mb-0 mx-1 mt-0 badge badge-info">
              {{ propiedad.type.toUpperCase() }}
            </span>
            <span v-if="propiedad.arrendado" class="mb-0 mt-0 badge badge-success">
              ARRENDADO
            </span>
          </div>
<!--          <div class="d-flex justify-content-end">-->
<!--            <button-->
<!--              class="btn btn-primary btn-sm mb-0 mt-1"-->
<!--              data-bs-placement="bottom"-->
<!--              data-bs-toggle="tooltip"-->
<!--              title="Crear contrato"-->
<!--              @click="irANuevoContrato"-->
<!--            >-->
<!--              Crear Contrato-->
<!--            </button>-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <hr class="dark horizontal my-0" />
    <div class="card-footer d-flex">
      <p class="font-weight-normal my-auto">{{ formatDate(propiedad.createDate) }}</p>
      <i class="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
      <p class="text-sm my-auto">{{ propiedad.direccion.ciudad + ', ' + propiedad.direccion.pais }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/index.js'

const router = useRouter()
const store = useAuthStore()

const props = defineProps({
  img: {
    type: String,
    required: true
  },
  propiedad: {
    type: Object,
    required: true
  }
})
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('es-CL', options)
}

const irANuevoContrato = () => {
  store.propiedad = props.propiedad
  router.push({ name: 'NuevoContrato' })
}
</script>

<style scoped>
.image-standard {
  width: 100%;
  height: 300px; /* Ajusta la altura según tus necesidades */
  object-fit: cover; /* Esto asegura que la imagen se recorte adecuadamente si es necesario */
}
</style>

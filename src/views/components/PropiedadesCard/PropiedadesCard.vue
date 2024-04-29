<template>
  <div class="card" data-animation="true">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a class="d-block blur-shadow-image">
<!--    <p>{{img}}</p>-->
        <img
          :src="'data:image/png;base64,' + img"
          alt="img-blur-shadow"
          class="img-fluid shadow border-radius-lg"
        />
      </a>
      <div
        class="colored-shadow"
        :style="`background-image: url('data:image/png;base64,' + img)`"
      ></div>
    </div>
    <div class="card-body text-center">
      <div class="d-flex justify-content-center mt-n6 mx-auto">


        <button
          class="btn btn-link text-primary border-0 d-flex align-items-center justify-content-center"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Crear contrato"
          @click="irANuevoContrato"
        >
          <span class="material-symbols-outlined">history_edu</span> Crear Contrato
        </button>

        <router-link :to="'/propiedad/edit/'+propiedad.id">
          <button
            class="btn btn-link text-primary border-0 d-flex align-items-center justify-content-center"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Editar Propiedad"
          >
            <span class="material-symbols-outlined text-lg">edit</span> Editar
          </button>
        </router-link>
      </div>
      <h5 class="font-weight-normal mt-3">
        <a href="javascript:;">{{ propiedad.direccion.calle + ' ' + propiedad.direccion.numero }}</a>
      </h5>
      <p class="mb-0">
        {{ propiedad.propietario.nombre }}
      </p>
    </div>
    <hr class="dark horizontal my-0" />
    <div class="card-footer d-flex">
      <p class="font-weight-normal my-auto">{{ propiedad.fechaCreacion }}</p>
      <i class="material-icons position-relative ms-auto text-lg me-1 my-auto"
      >place</i
      >
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

const irANuevoContrato = () => {
  store.propiedad = props.propiedad
  router.push({ name: 'NuevoContrato' })
}
</script>

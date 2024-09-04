<template>
  <div class="card" v-if="store.propiedad">
    <div class="card-body">
      <h6>Imagen de la Propiedad</h6>
      <div class="image-section position-relative ">
        <img :src="'data:image/png;base64,' + store.propiedad.imagenPortada.contenido" alt="Imagen de la Propiedad"
             class="img-fluid border-radius-lg border" />
        <a
          class="btn btn-sm btn-icon-only bg-gradient-primary position-absolute bottom-0 end-0 mb-n2 me-n2 d-grid"
        >
<!--          @click="triggerFileInput"-->
      <span
        class="material-icons text-xs top-0"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title
        aria-hidden="true"
        data-bs-original-title="Editar Imagen"
        aria-label="Edit Image"
      >edit</span>
        </a>
      </div>
<!--      <p class="text-muted mt-3">Nombre: {{ store.propiedad.imagenPortada.nombre }}</p>-->
<!--      <p class="text-muted mt-3">Fecha: {{ formatDate(store.propiedad.imagenPortada.createDate) }}</p>-->
    </div>
  </div>
</template>
<script>
import { formatDate } from '@/views/NuevoContrato/utils.js'

export default {
  name: 'ImgPropiedadDetails',
  methods: { formatDate  },
  props: {
    store: {}
  }
}
</script>
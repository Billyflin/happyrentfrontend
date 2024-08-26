<template>
  <div v-if="store.propiedad" class="card">
    <div class="card-body">
      <h6>Imagen de la Propiedad</h6>
      <div class="image-section">
        <img
          :src="'data:image/png;base64,' + store.propiedad.imagenPortada.contenido"
          alt="Imagen de la Propiedad"
          class="img-fluid border-radius-lg"
        />
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
  methods: { formatDate },
  props: {
    store: {}
  }
}
</script>

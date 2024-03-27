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
        <div class="mx-2 col-lg-4">
          <h5 class="mt-4 mt-lg-0">{{ store.propiedad.direccion.calle+' '+store.propiedad.direccion.numero }}</h5>
          <h6 class="mt-0">{{ store.propiedad.direccion.ciudad+', '+store.propiedad.direccion.pais }}</h6>
          <div class="mt-4 row">
            <label >fecha de creación</label>
            <p>{{ store.propiedad.fechaCreacion }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>


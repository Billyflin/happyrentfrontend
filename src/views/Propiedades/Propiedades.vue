<template>
  <div class="py-4 container-fluid">
    <div class="row mb-5">
      <div class="col-lg-6">
        <h4>Estas son las propiedades a las que tienes acceso</h4>

      </div>
      <div
        class="text-right col-lg-6 d-flex flex-column justify-content-center"
      >
        <router-link class="mt-2 mb-0 btn bg-gradient-success ms-lg-auto me-lg-0 me-auto mt-lg-0"
                     to="/agregarPropiedad">
          Agregar propiedad
        </router-link>
      </div>
    </div>
    <div class="row mt-4">
      <div v-for="propiedad in auth.propiedades" :key="propiedad.id" class="col-lg-4 col-md-6 mb-8">
        <propiedades-card
          :img="propiedad.imagenPortada.contenido"
          :propiedad="propiedad"

        />
      </div>
    </div>
  </div>
</template>


<script setup>
import PropiedadesCard from '@/views/components/PropiedadesCard/PropiedadesCard.vue'
import { useAuthStore } from '@/store/index.js'
import { onMounted } from 'vue'

const auth = useAuthStore()
onMounted(async () => {
  await auth.getPropiedades()

})
</script>
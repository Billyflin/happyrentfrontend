<template>
  <div class="py-4 container-fluid">
    <div class="row mb-5">
      <div class="col-12 col-lg-9">
        <h4>Estas son las propiedades a las que tienes acceso</h4>
        <p class="text-muted">
          Puedes ver, editar y crear contratos para las propiedades que te pertenecen,<br> <b>arrastra el cursor sobre la propiedad para ver más</b>
        </p>
      </div>
      <div class="col-12 col-lg-3 d-flex flex-column justify-content-center text-lg-right text-center">
        <router-link
          class="mt-2 mb-0 btn bg-gradient-success ms-lg-auto me-lg-0 me-auto mt-lg-0"
          to="/agregarPropiedad"
        >
          Agregar propiedad
        </router-link>
      </div>
    </div>
    <div class="row mt-4">
      <div v-if="auth.propiedades.length === 0" class="col-12">
        <div class="alert alert-primary text-light text-center">No tienes propiedades registradas</div>
      </div>
      <div v-for="propiedad in auth.propiedades" :key="propiedad.id" class="col-12 col-md-6 col-lg-4 mb-6">
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

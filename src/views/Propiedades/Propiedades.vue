<template>
  <div class="py-4 container-fluid">
    <div class="row mb-5">
      <div class="col-12 col-lg-9">
        <h4>Estas son las propiedades a las que tienes acceso</h4>
        <p class="text-muted">
          Puedes ver, editar y crear contratos para las propiedades que te pertenecen,<br />
          <b>arrastra el cursor sobre la propiedad para ver más</b>
        </p>
      </div>
      <div
        class="col-12 col-lg-3 d-flex flex-column justify-content-center text-lg-right text-center"
      >
        <router-link
          class="mt-2 mb-0 btn bg-gradient-success ms-lg-auto me-lg-0 me-auto mt-lg-0"
          to="/agregarPropiedad"
        >
          Agregar propiedad
        </router-link>
      </div>
    </div>
    <div v-if="loading" class="col-lg-12 position-relative z-index-2">
      <div class="d-flex justify-content-center align-items-center" style="height: 50vh">
        <div class="spinner-border text-primary" role="status" style="width: 4rem; height: 4rem">
          <span class="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>
    <div v-else class="row mt-4">
      <div v-if="proyection.length === 0" class="col-12">
        <div class="alert alert-primary text-light text-center">
          No tienes propiedades registradas
        </div>
      </div>
      <div
        v-for="propiedad in proyection"
        :key="propiedad.id"
        class="col-12 col-md-6 col-lg-4 mb-6"
      >
        <propiedades-card-proyection :img="propiedad.archivo.contenido" :propiedad="propiedad" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getPropiedadesProyection } from '@/servicios/propiedadesService.js'
import PropiedadesCardProyection from '@/views/Propiedades/components/PropiedadesCardProyection.vue'
import { useAppStore } from '@/store/appStore.js'

const loading = ref(false)
const proyection = ref([])
const store = useAppStore()
onMounted(async () => {
  store.showNavbar = true
  store.showSidenav = true
  store.showFooter = true
  loading.value = true
  try {
    const response = await getPropiedadesProyection()
    proyection.value = response.data
  } catch (err) {
    console.error(err)
  }
  loading.value = false
})
</script>

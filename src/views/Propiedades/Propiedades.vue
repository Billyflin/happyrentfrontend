<template>
  <div class="py-4 container-fluid">
    <div class="d-flex align-items-center justify-content-between">
      <div class="">
        <h4>Estas son las propiedades a las que tienes acceso</h4>
        <p class="text-muted">
          Puedes ver, editar y crear contratos para las propiedades que te pertenecen,
          <b>arrastra el cursor sobre la propiedad para ver más</b>
        </p>
      </div>
<!--      <div class="col-lg-4 d-flex justify-content-end">-->
<!--        <ul class="nav nav-pills">-->
<!--          <li class="nav-item" v-for="step in 2" :key="step">-->
<!--            <a class="nav-link active">Vista Carta</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
      <div class="d-flex justify-content-end">
        <router-link to="/agregarPropiedad">
          <material-button class="btn btn-primary" size="lg">Agregar propiedad</material-button>
        </router-link>
      </div>
    </div>



    <div v-if="loading" class="col-lg-12 position-relative z-index-2">
      <div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
        <div class="spinner-border text-primary" role="status" style="width:4rem; height: 4rem;">
          <span class="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>
    <div v-else class="row mt-4">
      <div v-if="proyection.length === 0" class="col-12">
        <div class="alert alert-primary text-light text-center">No tienes propiedades registradas</div>
      </div>
      <div v-for="propiedad in proyection" :key="propiedad.id" class="col-12 col-md-6 col-lg-4 mb-6">
        <propiedades-card-proyection
          :img="propiedad.archivo.contenido"
          :propiedad="propiedad"
        />
      </div>
      </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getPropiedadesProyection } from '@/servicios/propiedadesService.js'
import PropiedadesCardProyection from '@/views/Propiedades/components/PropiedadesCardProyection.vue'
import { useAppStore } from '@/store/appStore.js'
import setNavPills from '@/assets/js/nav-pills.js'
import MaterialButton from '@/components/Material/MaterialButton.vue'

const loading = ref(false)
const proyection = ref([])
 const store= useAppStore()
onMounted(async () => {
  setNavPills()
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

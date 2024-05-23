<script>
import { useAuthStore } from '@/store/index.js'
import { onUnmounted } from 'vue'

export default {
  name: 'SolicitudDetails',
  setup() {
    const auth = useAuthStore()
    onUnmounted(
      () => {
        auth.solicitud = null
      }
    )
    return { auth }
  }
}
</script>

<template>
  <div class="row mt-3">
    <div class="col-lg-3">
      <router-link class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
                   to="/Solicitudes">
  <span class="material-symbols-outlined mx-2">
    arrow_back
  </span>
        Volver
      </router-link>
    </div>
  </div>
  <div id="Solicitud" class="card">
    <div class="card-header">
      <h3>Detalles de la solicitud</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-lg-6">
          <h5 class="mb-3">Datos del solicitante</h5>
          <div class="mb-3">
            {{ auth.solicitud }}
          </div>
        </div>
        <div class="col-lg-6" v-if="auth.solicitud.archivos">
          <h5 class="mb-3">Archivos adjuntos</h5>
          <div class="mb-3">
            <div v-for="archivo in auth.solicitud.archivos" class="d-flex align-items-center">
              <div class="d-flex align-items-center">

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
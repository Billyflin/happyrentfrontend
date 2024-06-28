<script>
import { useAuthStore } from '@/store/index.js'
import { onUnmounted, ref } from 'vue'

export default {
  name: 'SolicitudDetails',
  setup() {
    const auth = useAuthStore()
    const archivoPrevisualizado = ref(null)
    const mostrarModal = ref(false)

    const previsualizarArchivo = (archivo) => {
      archivoPrevisualizado.value = `data:application/pdf;base64,${archivo.contenido}`
      mostrarModal.value = true
    }

    const descargarArchivo = (archivo) => {
      const link = document.createElement('a')
      link.href = `data:application/pdf;base64,${archivo.contenido}`
      link.download = archivo.nombre
      link.click()
    }

    const cerrarModal = () => {
      mostrarModal.value = false
      archivoPrevisualizado.value = null
    }

    onUnmounted(() => {
      auth.solicitud = null
    })

    return { auth, archivoPrevisualizado, mostrarModal, previsualizarArchivo, descargarArchivo, cerrarModal }
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
            <div v-for="archivo in auth.solicitud.archivos" :key="archivo.id" class="d-flex align-items-center">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined mx-2">
                  insert_drive_file
                </span>
                <a :href="archivo.url" target="_blank">{{ archivo.nombre }}</a>
                <button @click="previsualizarArchivo(archivo)" class="btn btn-link">Previsualizar</button>
                <button @click="descargarArchivo(archivo)" class="btn btn-link">Descargar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal para la previsualización -->
  <div v-if="mostrarModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="cerrarModal">&times;</span>
      <iframe :src="archivoPrevisualizado" width="100%" height="500px"></iframe>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: block; /* Cambiar a 'none' para ocultar el modal */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

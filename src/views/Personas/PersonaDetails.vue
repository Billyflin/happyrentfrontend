<script>
import { useAuthStore } from '@/store/index.js'
import { onUnmounted, ref } from 'vue'
import MaterialButton from '@/components/MaterialButton.vue'

export default {
  name: 'SolicitudDetails',
  components: { MaterialButton },
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
      auth.persona = null
    })

    return { auth, archivoPrevisualizado, mostrarModal, previsualizarArchivo, descargarArchivo, cerrarModal }
  }
}
</script>

<template>
  <div class="container-fluid mt-4">
    <div class="row mt-3">
      <div class="col-lg-3">
        <router-link class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
                     to="/Personas">
        <span class="material-symbols-outlined mx-2">
          arrow_back
        </span>
          Volver
        </router-link>
      </div>
      <div class="col-12">
        <div id="Persona" class="card">
          <div class="card-header">
            <h3>Detalles de la Persona</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <h5 class="mb-3">Datos de Persona</h5>
                <ul class="list-group mb-3">
                  <li class="list-group-item text-start"><strong>Nombre:</strong> {{ auth.persona.nombre }}</li>
                  <li class="list-group-item text-start"><strong>Apellido Paterno:</strong>
                    {{ auth.persona.apellidoPaterno }}
                  </li>
                  <li class="list-group-item text-start"><strong>Apellido Materno:</strong>
                    {{ auth.persona.apellidoMaterno }}
                  </li>
                  <li class="list-group-item text-start"><strong>Tratamiento:</strong> {{ auth.persona.tratamiento }}</li>
                  <li class="list-group-item text-start"><strong>Ocupación:</strong> {{ auth.persona.ocupacion }}</li>
                  <li class="list-group-item text-start"><strong>Estado Civil:</strong> {{ auth.persona.estadoCivil }}
                  </li>
                  <li class="list-group-item text-start"><strong>Nacionalidad:</strong> {{ auth.persona.nacionalidad }}
                  </li>
                  <li class="list-group-item text-start"><strong>Fecha de Nacimiento:</strong>
                    {{ auth.persona.fechaNacimiento }}
                  </li>
                  <li class="list-group-item text-start"><strong>Email:</strong> {{ auth.persona.email }}</li>
                  <li class="list-group-item text-start"><strong>Teléfono:</strong> {{ auth.persona.telefono }}</li>
                  <li class="list-group-item text-start"><strong>RUT:</strong> {{ auth.persona.rut }}</li>
                </ul>
              </div>

              <div class="col-lg-3">
                <h5 class="mb-3">Dirección</h5>
                <ul class="list-group mb-3">
                  <li class="list-group-item text-start"><strong>Calle:</strong> {{ auth.persona.direccion.calle }}</li>
                  <li class="list-group-item text-start"><strong>Número:</strong> {{ auth.persona.direccion.numero }}</li>
                  <li class="list-group-item text-start"><strong>Detalle:</strong> {{ auth.persona.direccion.detalle }}
                  </li>
                  <li class="list-group-item text-start"><strong>Región:</strong> {{ auth.persona.direccion.region }}</li>
                  <li class="list-group-item text-start"><strong>Ciudad:</strong> {{ auth.persona.direccion.ciudad }}</li>
                  <li class="list-group-item text-start"><strong>País:</strong> {{ auth.persona.direccion.pais }}</li>
                  <li class="list-group-item text-start"><strong>Código Postal:</strong>
                    {{ auth.persona.direccion.codigoPostal }}
                  </li>
                </ul>
              </div>

              <div v-if="auth.persona.archivos && auth.persona.archivos.length > 0" class="col-lg-5">
                <h5 class="mb-3">Archivos adjuntos</h5>
                <ul class="list-group mb-3">
                  <li v-for="archivo in auth.persona.archivos" :key="archivo.id"
                      class="list-group-item d-flex align-items-center">
                    <span class="material-symbols-outlined mx-2">insert_drive_file</span>
                    <a :href="archivo.url" class="text-sm" target="_blank">{{ archivo.nombre }}</a>
                    <div class="ms-auto">
                      <MaterialButton class="btn btn-link" @click="previsualizarArchivo(archivo)">Previsualizar
                      </MaterialButton>
                      <MaterialButton class="btn btn-link" @click="descargarArchivo(archivo)">Descargar</MaterialButton>
                    </div>
                  </li>
                </ul>
              </div>
              <div v-else class="col-lg-2">
                <h5 class="mb-3">Sin archivos adjuntos</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para la previsualización -->
    <div v-if="mostrarModal" class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Previsualización de Archivo</h5>
            <button aria-label="Close" class="btn-close" type="button" @click="cerrarModal"></button>
          </div>
          <div class="modal-body">
            <iframe :src="archivoPrevisualizado" height="800px" width="100%"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
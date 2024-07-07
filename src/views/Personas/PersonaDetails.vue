<script>
import { useAuthStore } from '@/store/index.js'
import { onUnmounted, ref } from 'vue'
import MaterialButton from '@/components/MaterialButton.vue'
import ListaDatosPersona from '@/views/Personas/ListaDatosPersona.vue'
import ListaDireccionPersona from '@/views/Personas/ListaDireccionPersona.vue'
import ModalConfirmacion from '@/views/Personas/ModalConfirmacion.vue'
import ModalPreview from '@/views/Personas/ModalPreview.vue'

export default {
name: 'SolicitudDetails',
components: { ModalPreview, ModalConfirmacion, ListaDireccionPersona, ListaDatosPersona, MaterialButton },
setup() {
const auth = useAuthStore()
const archivoPrevisualizado = ref(null)
const mostrarModal = ref(false)
const mostrarModalConfirmacion = ref(false)
const archivoSeleccionado = ref(null)
const editMode = ref(false)

const previsualizarArchivo = (archivo) => {
archivoPrevisualizado.value = `data:application/pdf;base64,${archivo.contenido}`
mostrarModal.value = true
}

const getFileIconClass = (filename) => {
if (filename.endsWith('.pdf')) return 'fas fa-file-pdf'
if (filename.endsWith('.doc') || filename.endsWith('.docx')) return 'fas fa-file-word'
if (filename.endsWith('.xls') || filename.endsWith('.xlsx')) return 'fas fa-file-excel'
return 'fas fa-file'
}

const descargarArchivo = (archivo) => {
const link = document.createElement('a')
link.href = `data:application/pdf;base64,${archivo.contenido}`
link.download = archivo.nombre
link.click()
}

const confirmarEliminarPersona = () =>{
mostrarModalConfirmacion.value = true
}

const eliminarArchivo = () => {
// Aquí debes agregar la lógica para eliminar el archivo seleccionado
// Por ejemplo, podrías llamar a una API para eliminar el archivo del servidor

mostrarModalConfirmacion.value = false
archivoSeleccionado.value = null
}

const cerrarModal = () => {
mostrarModal.value = false
archivoPrevisualizado.value = null
}

const cerrarModalConfirmacion = () => {
mostrarModalConfirmacion.value = false
archivoSeleccionado.value = null
}

const toggleEditMode = () => {
editMode.value = !editMode.value
}

const saveChanges = () => {
// Aquí debes agregar la lógica para guardar los cambios
toggleEditMode()
}

const cancelEdit = () => {
// Aquí debes agregar la lógica para cancelar la edición
toggleEditMode()
}

onUnmounted(() => {
auth.persona = null
})

return {
auth,
archivoPrevisualizado,
mostrarModal,
mostrarModalConfirmacion,
archivoSeleccionado,
previsualizarArchivo,
descargarArchivo,
confirmarEliminarArchivo: confirmarEliminarPersona,
eliminarArchivo,
cerrarModal,
cerrarModalConfirmacion,
getFileIconClass,
editMode,
toggleEditMode,
saveChanges,
cancelEdit
}
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
          <div class="pb-0 card-header d-flex align-items-center justify-content-between">
            <h3>Detalles de la Persona</h3>
            <material-button color="primary" @click="toggleEditMode"
                             class="btn btn-primary text-small d-flex justify-content-center align-items-center my-sm-auto mt-2 mb-0 ms-2">
              <span class="material-symbols-outlined me-1">edit</span>
              {{ editMode ? 'Cancelar' : 'Editar' }}
            </material-button>
          </div>
          <div class="card-body">
            <div class="row">
              <ListaDatosPersona  :class="(auth.persona.archivos.length > 0)?`col-lg-4`: `col-lg-5`" :auth="auth" :edit-mode="editMode" />
              <ListaDireccionPersona  :class="(auth.persona.archivos.length > 0)?`col-lg-3`: `col-lg-5`" :auth="auth" :edit-mode="editMode" />
              <div v-if="auth.persona.archivos && auth.persona.archivos.length > 0" class="col-lg-5">
                <h5 class="mb-3">Archivos adjuntos</h5>
                <ul class="list-group mb-3">
                  <li v-for="archivo in auth.persona.archivos" :key="archivo.id"
                      class="list-group-item d-flex align-items-center">
                    <i :class="getFileIconClass(archivo.nombre)" class="fa-3x me-2 text-lg"></i>
                    <a :href="archivo.url" class="text-sm" target="_blank">{{ archivo.nombre }}</a>
                    <div class="ms-auto">
                      <MaterialButton v-if="archivo.nombre.endsWith('.pdf')" class="btn btn-link"
                                      @click="previsualizarArchivo(archivo)">Previsualizar
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
          <div class="card-footer text-sm text-center text-capitalize align-middle">
            <material-button v-if="editMode" color="primary" @click="saveChanges"
                             class="btn btn-primary text-small d-flex justify-content-center align-items-center my-sm-auto mt-2 mb-0 ms-2">
              <span class="material-symbols-outlined me-1">save</span>
              Guardar
            </material-button>
            <material-button v-else color="danger" @click="mostrarModalConfirmacion=true"
                             class="btn btn-danger text-small d-flex justify-content-center align-items-center my-sm-auto mt-2 mb-0 ms-2">
              <span class="material-symbols-outlined me-1">delete</span>
              Eliminar
            </material-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para la previsualización -->
    <ModalPreview :archivo-previsualizado="archivoPrevisualizado" :cerrar-modal="cerrarModal"
                  :mostrar-modal="mostrarModal" />

    <!-- Modal para la confirmación de eliminación -->
    <ModalConfirmacion :auth="auth" :cerrar-modal-confirmacion="cerrarModalConfirmacion" :eliminar-archivo="eliminarArchivo"
                       :mostrar-modal-confirmacion="mostrarModalConfirmacion" />
  </div>
</template>


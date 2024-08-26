<script>
import { onMounted, onUnmounted, ref } from 'vue'
import ModalConfirmacion from '@/views/Personas/components/ModalConfirmacion.vue'
import ListaDireccionPersona from '@/views/Personas/components/ListaDireccionPersona.vue'
import ModalPreview from '@/views/Personas/components/ModalPreview.vue'
import ListaDatosPersona from '@/views/Personas/components/ListaDatosPersona.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import { usePersonasStore } from '@/store/personasStore.js'
import router from '@/router/index.js'
import { postPersona } from '@/servicios/personasService.js'
import MaterialAlert from '@/components/Material/MaterialAlert.vue'
import { useNotificationsStore } from '@/store/notifications.js'
import ListaDatosBancarios from '@/views/Personas/ListaDatosBancarios.vue'

export default {
  name: 'PersonaDetails',
  components: {
    ListaDatosBancarios,
    MaterialAlert,
    ModalPreview,
    ModalConfirmacion,
    ListaDireccionPersona,
    ListaDatosPersona,
    MaterialButton
  },
  setup() {
    const auth = usePersonasStore()
    const notificationsStore = useNotificationsStore()
    const archivoPrevisualizado = ref(null)
    const mostrarModal = ref(false)
    const mostrarModalConfirmacion = ref(false)
    const archivoSeleccionado = ref(null)
    const editMode = ref(false)
    const loading = ref(false)

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

    const confirmarEliminarPersona = () => {
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
      loading.value = true
      try {
        postPersona(auth.persona).then(() => {
          loading.value = false
          toggleEditMode()
          notificationsStore.createNotification(
            'success',
            'Cambios guardados',
            'Los cambios se han guardado correctamente.'
          )
        })
      } catch (error) {
        console.error('Error al guardar los cambios:', error)
        notificationsStore.createNotification(
          'danger',
          'Error',
          'Hubo un error al guardar los cambios.'
        )
      }
    }

    const cancelEdit = () => {
      // Aquí debes agregar la lógica para cancelar la edición
      toggleEditMode()
    }

    onMounted(() => {
      if (!auth.persona) {
        router.push('/Personas')
      }
    })

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
        <router-link
          class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
          to="/Personas"
        >
          <span class="material-symbols-outlined mx-2"> arrow_back </span>
          Volver
        </router-link>
      </div>
      <div class="col-12">
        <div id="Persona" class="card">
          <div class="pb-0 card-header d-flex align-items-center justify-content-between">
            <h3>Detalles de la Persona</h3>
            <material-button
              class="btn btn-primary text-small d-flex justify-content-center align-items-center my-sm-auto mt-2 mb-0 ms-2"
              color="primary"
              @click="toggleEditMode"
            >
              <span class="material-symbols-outlined me-1">edit</span>
              {{ editMode ? 'Cancelar' : 'Editar' }}
            </material-button>
          </div>
          <div class="card-body">
            <material-alert v-if="editMode" class="font-weight-light" color="danger" dismissible>
              <span>En esta version happ rent no se hace cargo de la modificación de datos. </span>
            </material-alert>
            <material-alert v-if="editMode" class="font-weight-light" color="info" dismissible>
              <span
                >A pesar de que los datos pueden ser modificados, estos no se verán reflejados en la
                base de datos hasta que hagas click en guardar
              </span>
            </material-alert>

            <div v-if="auth.persona" class="row">
              <ListaDatosPersona
                :auth="auth"
                :class="auth.persona.archivos.length > 0 ? `col-lg-4` : `col-lg-5`"
                :edit-mode="editMode"
              />
              <ListaDireccionPersona
                :auth="auth"
                :class="auth.persona.archivos.length > 0 ? `col-lg-4` : `col-lg-5`"
                :edit-mode="editMode"
              />
              <div
                :class="
                  auth.persona.datosBancarios ||
                  (auth.persona.archivos && auth.persona.archivos.length > 0)
                    ? `col-lg-4`
                    : `col-lg-2`
                "
              >
                <ListaDatosBancarios :datosBancarios="auth.persona.datosBancarios" />
                <div v-if="auth.persona.archivos && auth.persona.archivos.length > 0">
                  <h5 class="mb-3">Archivos adjuntos</h5>
                  <ul class="list-group mb-3">
                    <li
                      v-for="archivo in auth.persona.archivos"
                      :key="archivo.id"
                      class="list-group-item d-flex align-items-center"
                    >
                      <span class="material-symbols-outlined mx-2">insert_drive_file</span>
                      <a :href="archivo.url" class="text-sm" target="_blank">{{
                        archivo.nombre
                      }}</a>
                      <div class="ms-auto">
                        <MaterialButton class="btn btn-link" @click="previsualizarArchivo(archivo)"
                          >Previsualizar
                        </MaterialButton>
                        <MaterialButton class="btn btn-link" @click="descargarArchivo(archivo)"
                          >Descargar
                        </MaterialButton>
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-else>
                  <h5 class="mb-3">Sin archivos adjuntos</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-sm text-center align-middle">
            <material-button
              v-if="editMode"
              class="btn btn-primary text-small d-flex justify-content-center align-items-center my-sm-auto mt-2 mb-0 ms-2"
              color="primary"
              @click="saveChanges"
            >
              <span class="material-symbols-outlined me-1">save</span>
              Guardar
            </material-button>
            <material-button
              v-else
              class="btn btn-danger text-small d-flex justify-content-center align-items-center my-sm-auto mt-2 mb-0 ms-2"
              color="danger"
              @click="mostrarModalConfirmacion = true"
            >
              <span class="material-symbols-outlined me-1">delete</span>
              Eliminar
            </material-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para la previsualización -->
    <ModalPreview
      :archivo-previsualizado="archivoPrevisualizado"
      :cerrar-modal="cerrarModal"
      :mostrar-modal="mostrarModal"
    />

    <!-- Modal para la confirmación de eliminación -->
    <ModalConfirmacion
      :auth="auth"
      :cerrar-modal-confirmacion="cerrarModalConfirmacion"
      :eliminar-archivo="eliminarArchivo"
      :mostrar-modal-confirmacion="mostrarModalConfirmacion"
    />
  </div>
</template>

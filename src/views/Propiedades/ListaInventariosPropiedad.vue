<template>
  <div class="card pb-0 mt-4">
    <div class="card-header pb-0 d-flex justify-content-between align-items-center">
      <h6>Lista de Inventario de la Propiedad</h6>
      <button class="btn btn-primary btn-sm" @click="addItem">
        <i class="bi bi-plus"></i> Agregar Inventario
      </button>
    </div>
    <div class="card-body p-0">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Fotos</th>
          <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in inventarios" :key="item.id">
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
              <span :class="getStatusBadgeClass(item.estado)">
                {{ getStatusText(item.estado) }}
              </span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openPhotoGallery(item)">
              <i class="bi bi-camera"></i> Ver fotos ({{ item.archivoes.length }})
            </button>
          </td>
          <td>
            <button class="btn btn-outline-secondary btn-sm" @click="editItem(item)">
              <i class="bi bi-pencil-square"></i> Editar
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- Modal para la galería de fotos -->
  <div class="modal fade" id="photoGalleryModal" tabindex="-1" aria-labelledby="photoGalleryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="photoGalleryModalLabel">Galería de Fotos: {{ currentItem?.nombre }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="currentItem" class="text-center">
            <img :src="currentItem.archivoes[currentPhotoIndex]" class="img-fluid mb-2" :alt="currentItem.nombre">
            <div>
              <button class="btn btn-outline-primary me-2" @click="prevPhoto" :disabled="currentPhotoIndex === 0">
                <i class="bi bi-chevron-left"></i> Anterior
              </button>
              <button class="btn btn-outline-primary" @click="nextPhoto" :disabled="currentPhotoIndex === currentItem.archivoes.length - 1">
                Siguiente <i class="bi bi-chevron-right"></i>
              </button>
            </div>
            <p class="mt-2">Foto {{ currentPhotoIndex + 1 }} de {{ currentItem.archivoes.length }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal para agregar o editar inventarios -->
  <div class="modal fade" id="inventarioModal" tabindex="-1" aria-labelledby="inventarioModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inventarioModalLabel">{{ editing ? 'Editar' : 'Agregar' }} Inventario</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveItem">
            <div class="mb-3">
              <label for="itemName" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="itemName" v-model="editItemData.nombre" required>
            </div>
            <div class="mb-3">
              <label for="itemDescription" class="form-label">Descripción</label>
              <textarea class="form-control" id="itemDescription" v-model="editItemData.descripcion" required></textarea>
            </div>
            <div class="mb-3">
              <label for="itemStatus" class="form-label">Estado</label>
              <select class="form-control" id="itemStatus" v-model="editItemData.estado">
                <option value="good">Bueno</option>
                <option value="damaged">Dañado</option>
                <option value="missing">Faltante</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="itemPhotos" class="form-label">Agregar Fotos</label>
              <input type="file" class="form-control" id="itemPhotos" @change="handleFileUpload" multiple>
            </div>
            <button type="submit" class="btn btn-primary">{{ editing ? 'Actualizar' : 'Agregar' }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import { Modal } from 'bootstrap'

export default {
  name: 'ListaInventariosPropiedad',
  props: {
    inventarios: Array
  },
  setup(props) {
    const currentItem = ref(null)
    const currentPhotoIndex = ref(0)
    let photoGalleryModal = null
    let inventarioModal = null
    const editing = ref(false)
    const editItemData = reactive({ nombre: '', descripcion: '', estado: 'good', archivoes: [] })

    const getStatusBadgeClass = (status) => {
      switch (status) {
        case 'good':
          return 'badge bg-success'
        case 'damaged':
          return 'badge bg-warning'
        case 'missing':
          return 'badge bg-danger'
        default:
          return 'badge bg-secondary'
      }
    }

    const getStatusText = (status) => {
      switch (status) {
        case 'good':
          return 'Bueno'
        case 'damaged':
          return 'Dañado'
        case 'missing':
          return 'Faltante'
        default:
          return 'Desconocido'
      }
    }

    const openPhotoGallery = (item) => {
      currentItem.value = item
      currentPhotoIndex.value = 0
      if (!photoGalleryModal) {
        photoGalleryModal = new Modal(document.getElementById('photoGalleryModal'))
      }
      photoGalleryModal.show()
    }

    const addItem = () => {
      editing.value = false
      editItemData.nombre = ''
      editItemData.descripcion = ''
      editItemData.estado = 'good'
      editItemData.archivoes = []
      if (!inventarioModal) {
        inventarioModal = new Modal(document.getElementById('inventarioModal'))
      }
      inventarioModal.show()
    }

    const editItem = (item) => {
      editing.value = true
      editItemData.nombre = item.nombre
      editItemData.descripcion = item.descripcion
      editItemData.estado = item.estado
      editItemData.archivoes = item.archivoes
      if (!inventarioModal) {
        inventarioModal = new Modal(document.getElementById('inventarioModal'))
      }
      inventarioModal.show()
    }

    const handleFileUpload = (event) => {
      const files = event.target.files
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.onload = (e) => {
          editItemData.archivoes.push(e.target.result)
        }
        reader.readAsDataURL(files[i])
      }
    }

    const saveItem = () => {
      // Logic to save or update item, including handling the photos stored in `editItemData.archivoes`
      console.log('Saving item:', editItemData)
      inventarioModal.hide()
    }

    const nextPhoto = () => {
      if (currentItem.value && currentPhotoIndex.value < currentItem.value.archivoes.length - 1) {
        currentPhotoIndex.value++
      }
    }

    const prevPhoto = () => {
      if (currentItem.value && currentPhotoIndex.value > 0) {
        currentPhotoIndex.value--
      }
    }

    return { currentItem, currentPhotoIndex, getStatusBadgeClass, getStatusText, openPhotoGallery, addItem, editItem, saveItem, handleFileUpload, editing, editItemData, nextPhoto, prevPhoto }
  }
}
</script>
<template>
  <div
    class="modal fade"
    id="inventarioModal"
    tabindex="-1"
    aria-labelledby="inventarioModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inventarioModalLabel">
            {{ editing ? 'Editar' : 'Agregar' }} Inventario
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveItem">
            <div class="mb-3">
              <label for="itemName" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control border"
                id="itemName"
                v-model="editItemData.nombre"
                required
              />
            </div>
            <div class="mb-3">
              <label for="itemDescription" class="form-label">Descripción</label>
              <textarea
                class="form-control border"
                id="itemDescription"
                v-model="editItemData.descripcion"
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="itemStatus" class="form-label">Estado</label>
              <select class="form-control border" id="itemStatus" v-model="editItemData.estado">
                <option value="good">Bueno</option>
                <option value="damaged">Dañado</option>
                <option value="missing">Faltante</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="itemPhotos" class="form-label">Agregar Fotos</label>
              <input
                type="file"
                class="form-control border"
                id="itemPhotos"
                @change="handleFileUpload"
                multiple
                accept=".jpg, .jpeg, .png"              />
            </div>
            <div class="d-flex justify-content-between">
              <button type="submit" class="btn btn-primary">
                {{ editing ? 'Actualizar' : 'Agregar' }}
              </button>
              <button v-if="editing" type="button" class="btn btn-danger" @click="deleteItem">
                Borrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveInventario, deleteInventario } from '@/servicios/propiedadesService.js';
import { reactive, ref } from 'vue';
import { Modal } from 'bootstrap';

export default {
  name: 'InventarioModal',
  props: {
    idPropiedad: {
      type: String,
      required: true
    }
  },
  emits: ['save-item', 'delete-item'],
  setup(props, { emit }) {
    const editing = ref(false);
    const editItemData = reactive({
      id: null,
      nombre: '',
      descripcion: '',
      estado: 'good',
      archivoes: []
    });
    const archivos = ref([]);
    let inventarioModal = null;

    const openModal = (isEditing, item = null) => {
      editing.value = isEditing;
      if (item) {
        Object.assign(editItemData, item);
      } else {
        resetEditItemData();
      }
      if (!inventarioModal) {
        inventarioModal = new Modal(document.getElementById('inventarioModal'));
      }
      inventarioModal.show();
    };

    const resetEditItemData = () => {
      editItemData.id = null;
      editItemData.nombre = '';
      editItemData.descripcion = '';
      editItemData.estado = 'good';
      editItemData.archivoes = [];
      archivos.value = [];
    };

    const handleFileUpload = (event) => {
      archivos.value = Array.from(event.target.files);
    };

    const saveItem = async () => {
      try {
        const result = await saveInventario(editItemData, archivos.value, props.idPropiedad);
        emit('save-item', result);
        inventarioModal.hide();
      } catch (error) {
        console.error('Error al guardar el inventario:', error);
      }
    };

    const deleteItem = async () => {
      try {
        if (editItemData.id) {
          await deleteInventario(editItemData.id, props.idPropiedad);
          emit('delete-item', editItemData.id);
          inventarioModal.hide();
        }
      } catch (error) {
        console.error('Error al borrar el inventario:', error);
      }
    };

    return {
      editing,
      editItemData,
      openModal,
      handleFileUpload,
      saveItem,
      deleteItem
    };
  }
};
</script>

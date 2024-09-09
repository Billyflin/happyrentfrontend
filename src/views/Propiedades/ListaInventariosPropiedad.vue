<template>
  <div class="card pb-0 mt-4">
    <div class="card-header pb-0 d-flex justify-content-between align-items-center">
      <h6>Lista de Inventario de la Propiedad</h6>
      <button class="btn btn-primary btn-sm" @click="handleAddItemClick">
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
        <InventarioItem
          v-for="item in inventarios"
          :key="item.id"
          :item="item"
          @edit-item="handleEditItemClick"
          @open-photo-gallery="handleOpenPhotoGalleryClick"
        />
        </tbody>
      </table>
      {{inventarios}}
    </div>
  </div>
  <PhotoGalleryModal ref="photoGalleryModal" />
  <InventarioModal ref="inventarioModal" />
</template>

<script>
import { ref, onMounted } from 'vue';
import InventarioItem from './InventarioItem.vue';
import PhotoGalleryModal from './PhotoGalleryModal.vue';
import InventarioModal from './InventarioModal.vue';

export default {
  name: 'ListaInventariosPropiedad',
  components: {
    InventarioItem,
    PhotoGalleryModal,
    InventarioModal
  },
  props: {
    inventarios: {
      type: Array,
      required: true
    }
  },
  setup() {
    const photoGalleryModal = ref(null);
    const inventarioModal = ref(null);

    onMounted(() => {
      if (photoGalleryModal.value && inventarioModal.value) {
        console.log("Modales montados correctamente");
      } else {
        console.error("Error al montar los modales");
      }
    });

    const handleAddItemClick = () => {
      if (inventarioModal.value) {
        inventarioModal.value.openModal(false);
      } else {
        console.error('InventarioModal no está disponible');
      }
    };

    const handleEditItemClick = (item) => {
      if (inventarioModal.value) {
        inventarioModal.value.openModal(true, item);
      } else {
        console.error('InventarioModal no está disponible');
      }
    };

    const handleOpenPhotoGalleryClick = (item) => {
      if (photoGalleryModal.value) {
        photoGalleryModal.value.openModal(item);
      } else {
        console.error('PhotoGalleryModal no está disponible');
      }
    };

    return {
      handleAddItemClick,
      handleEditItemClick,
      handleOpenPhotoGalleryClick,
      photoGalleryModal,
      inventarioModal
    };
  }
};
</script>

<template>
  <div class="card pb-0 mt-4">
    <div class="card-header pb-0 d-flex justify-content-between align-items-center">
      <h6 class="text-center">Lista de Inventario de la Propiedad</h6>
      <a class="align-items-center text-decoration-none icon-link" @click="refreshInventario">
        <span class="material-symbols-outlined text-md">refresh</span>
        <small>Actualizar</small>
      </a>
    </div>
    <div class="card-body p-0">
      <table class="table table-striped table-hover ">
        <thead>
        <tr>
          <th class="text-center">Nombre</th>
          <th class="text-center">Descripción</th>
          <th class="text-center">Estado</th>
          <th class="text-center">Fotos</th>
          <th class="text-center">Acciones</th>
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
    </div>
    <div class="card-footer pt-0 d-flex justify-content-end">
      <button class="btn btn-primary " @click="handleAddItemClick">
        <i class="bi bi-plus"></i> Agregar Inventario
      </button>
    </div>
  </div>
  <PhotoGalleryModal ref="photoGalleryModal" />
  <InventarioModal ref="inventarioModal" :id-propiedad="idPropiedad" @action-completed="refreshInventario" @save-item="refreshInventario"/>
</template>

<script>
import { onMounted, ref } from 'vue';
import InventarioItem from './InventarioItem.vue';
import PhotoGalleryModal from './PhotoGalleryModal.vue';
import InventarioModal from './InventarioModal.vue';
import { getInventario } from '@/servicios/propiedadesService.js';

export default {
  name: 'ListaInventariosPropiedad',
  components: {
    InventarioItem,
    PhotoGalleryModal,
    InventarioModal
  },
  props: {
    idPropiedad: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const inventarios = ref([]);
    const photoGalleryModal = ref(null);
    const inventarioModal = ref(null);

    // Función para cargar inventarios desde el servidor
    const refreshInventario = async () => {
      try {
        const result = await getInventario(props.idPropiedad);
        inventarios.value = result.data; // Actualiza la lista de inventarios
        console.log(result)
      } catch (error) {
        console.error('Error al cargar los inventarios:', error);
      }
    };

    onMounted(() => {
      refreshInventario(); // Carga los inventarios cuando se monta el componente
      if (photoGalleryModal.value && inventarioModal.value) {
        console.log('Modales montados correctamente');
      } else {
        console.error('Error al montar los modales');
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
      inventarios,
      handleAddItemClick,
      handleEditItemClick,
      handleOpenPhotoGalleryClick,
      refreshInventario,
      photoGalleryModal,
      inventarioModal
    };
  }
};
</script>

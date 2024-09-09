<template>
  <div class="modal fade" id="photoGalleryModal" tabindex="-1" aria-labelledby="photoGalleryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="photoGalleryModalLabel">Galería de Fotos: {{ currentItem?.nombre }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="currentItem" class="text-center">
            <img :src="currentPhoto" class="img-fluid mb-2" :alt="currentItem.nombre">
            <div>
              <button class="btn btn-outline-primary me-2" @click="prevPhoto" :disabled="isFirstPhoto">
                <i class="bi bi-chevron-left"></i> Anterior
              </button>
              <button class="btn btn-outline-primary" @click="nextPhoto" :disabled="isLastPhoto">
                Siguiente <i class="bi bi-chevron-right"></i>
              </button>
            </div>
            <p class="mt-2">Foto {{ currentPhotoIndex + 1 }} de {{ currentItem.archivoes.length }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { Modal } from 'bootstrap';

export default {
  name: 'PhotoGalleryModal',
  setup() {
    const currentItem = ref(null);
    const currentPhotoIndex = ref(0);
    let photoGalleryModal = null;

    const openModal = (item) => {
      currentItem.value = item;
      currentPhotoIndex.value = 0;
      if (!photoGalleryModal) {
        photoGalleryModal = new Modal(document.getElementById('photoGalleryModal'));
      }
      photoGalleryModal.show();
    };

    const currentPhoto = computed(() => currentItem.value.archivoes[currentPhotoIndex.value]);

    const isFirstPhoto = computed(() => currentPhotoIndex.value === 0);
    const isLastPhoto = computed(() => currentPhotoIndex.value === currentItem.value.archivoes.length - 1);

    const nextPhoto = () => {
      if (!isLastPhoto.value) currentPhotoIndex.value++;
    };

    const prevPhoto = () => {
      if (!isFirstPhoto.value) currentPhotoIndex.value--;
    };

    return {
      currentItem,
      currentPhotoIndex,
      openModal,
      currentPhoto,
      isFirstPhoto,
      isLastPhoto,
      nextPhoto,
      prevPhoto
    };
  }
};
</script>

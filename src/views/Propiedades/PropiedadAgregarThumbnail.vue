<template>
  <p>Sube una imagen para identificar fácilmente la propiedad</p>
  <img
    v-if="imagenPortadaPreview"
    :src="imagenPortadaPreview"
    alt="portada"
    class="w-100 border-radius-lg mb-4 shadow-lg mx-auto"
  />
  <material-button v-if="imagenPortadaPreview" class="mx-3" color="danger" @click="removeImage">
    Eliminar imagen
  </material-button>

  <div v-else class="file-dropzone mt-3">
    <div id="idDropzone" class="dropzone"></div>
  </div>

  <p class="text-center mt-2 mb-0" v-if="!imagenPortadaPreview">
    La imagen de portada es obligatoria
  </p>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import Dropzone from 'dropzone'
import MaterialButton from '@/components/Material/MaterialButton.vue'

const props = defineProps({
  imagenPortada: {
    type: File,
    default: null,
  },
  imagenPortadaPreview: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:imagenPortada', 'update:imagenPortadaPreview'])

const myDropzone = ref(null)

const initializeDropzone = async () => {
  await nextTick() // Asegurarse de que el DOM esté listo
  const dropzoneElement = document.querySelector('#idDropzone')
  if (dropzoneElement) {
    myDropzone.value = new Dropzone(dropzoneElement, {
      url: "/", // Se requiere una URL dummy para inicializar Dropzone
      maxFiles: 1,
      acceptedFiles: 'image/*',
      autoProcessQueue: false,
      dictRemoveFile: 'Eliminar',
      dictDefaultMessage: 'Arrastra aquí tus imágenes',
      dictFallbackMessage: 'Tu navegador no soporta arrastrar y soltar para subir archivos',
      dictInvalidFileType: 'No puedes subir este tipo de archivo',
      dictFileTooBig: 'El archivo es muy grande',
      dictCancelUpload: 'Cancelar subida',
    })

    myDropzone.value.on('addedfile', (file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        emit('update:imagenPortadaPreview', e.target.result)
      }
      reader.readAsDataURL(file)
      emit('update:imagenPortada', file)
    })
  }
}

const removeImage = async () => {
  emit('update:imagenPortadaPreview', null)
  emit('update:imagenPortada', null)

  // Limpia y destruye la instancia actual de Dropzone
  if (myDropzone.value) {
    myDropzone.value.removeAllFiles(true)
    myDropzone.value.destroy()
    myDropzone.value = null
  }

  // Reinicializa Dropzone después de limpiar
  await initializeDropzone()
}

onMounted(() => {
  initializeDropzone()
})

onBeforeUnmount(() => {
  if (myDropzone.value) {
    myDropzone.value.destroy() // Destruir Dropzone para evitar errores al desmontar
    myDropzone.value = null
  }
})
</script>

<style scoped>
.file-dropzone {
  border: 2px dashed #13505B;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>

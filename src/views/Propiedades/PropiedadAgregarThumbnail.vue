<template>
  <div class="card">
    <div class="card-header pb-0">
      <h5>Imagen de portada</h5>
    </div>
    <div class="card-body pt-0">
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
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Dropzone from 'dropzone'
import MaterialButton from '@/components/Material/MaterialButton.vue'

const imagenPortadaFile = ref(null)
const imagenPortadaPreview = ref(null)
const myDropzone = ref(null)

const emit = defineEmits(['update:imagenPortada'])
watch(imagenPortadaFile, (newFile) => {
  emit('update:imagenPortada', newFile)
})
const initializeDropzone = () => {
  myDropzone.value = new Dropzone('#idDropzone', {
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
      imagenPortadaPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
    imagenPortadaFile.value = file
  })
}

onMounted(() => {
  initializeDropzone()
})

const removeImage = () => {
  imagenPortadaPreview.value = ''
  imagenPortadaFile.value = null
  emit('update:imagenPortada', null)
  // Reinicializar Dropzone
  setTimeout(() => {
    initializeDropzone()
  }, 0)
}
</script>

<style scoped>
.file-dropzone {
  border: 2px dashed #13505B;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>

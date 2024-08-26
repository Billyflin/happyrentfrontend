<template>
  <div class="card">
    <div class="card-header">
      <h5>Agregar Item</h5>
      <material-alert color="danger" dismissible>
        <span class="text-sm">No se funcional, requiere optimizacion en la respuesta</span>
      </material-alert>
    </div>
    <div class="card-body pt-0">
      <form class="row mt-2" @submit.prevent="agregarItem">
        <div class="col-4 mt-3">
          <material-switch
            id="modificable"
            v-model:checked="modificable"
            checked
            name="modificable"
          >
            {{ modificable ? 'Es modificable' : 'No es modificable' }}
          </material-switch>
        </div>
        <div class="col-4">
          <MaterialInput
            id="nombre"
            v-model="nuevoItem.nombre"
            isRequired
            label="Nombre del objeto"
            size="lg"
          />
        </div>
        <div class="col-4">
          <MaterialInput id="estado" v-model="nuevoItem.estado" isRequired label="Estado" />
        </div>
        <div class="col-12 mt-2">
          <MaterialTextarea
            id="descripcion"
            v-model="nuevoItem.descripcion"
            :resizable="false"
            isRequired
            placeholder="Añade una descripción..."
          />
        </div>
        <div class="row mt-2">
          <h5 class="font-weight-bolder">Imagenes</h5>
          <div class="multisteps-form__content">
            <div class="mt-3 row">
              <div class="col-12">
                <label class="form-control mb-0"
                  >Puedes añadir imágenes arrastrando los archivos o haciendo click sobre este
                  cuadro
                </label>
                <div
                  id="InventarioImg"
                  action="/file-upload"
                  class="form-control border dropzone"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4 mb-4">
          <material-button color="success" type="submit">Agregar</material-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue'
import Dropzone from 'dropzone'
import MaterialSwitch from '@/components/Material/MaterialSwitch.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialTextarea from '@/components/Material/MaterialTextarea.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialAlert from '@/components/Material/MaterialAlert.vue'

let myDropzone = null

const modificable = ref(false)
const nuevoItem = ref({ nombre: '', estado: '', modificable: true, descripcion: '', fotos: [] })
const agregarInventario = ref(false)

watch(modificable, (newValue) => {
  nuevoItem.value.modificable = newValue
})

function agregarItem() {
  nuevoItem.value.fotos = myDropzone.files
  items.value.push({ ...nuevoItem.value })
  nuevoItem.value = {
    nombre: '',
    estado: '',
    modificable: modificable.value,
    descripcion: '',
    fotos: []
  }
  myDropzone.removeAllFiles()
}

watch(agregarInventario, (newValue) => {
  if (!newValue) {
    items.value = []
  }
  if (newValue && !myDropzone) {
    nextTick(() => {
      myDropzone = new Dropzone('#InventarioImg', {
        maxFiles: 5,
        acceptedFiles: 'image/*',
        autoProcessQueue: false,
        addRemoveLinks: true,
        dictRemoveFile: 'Eliminar',
        dictDefaultMessage: 'Arrastra aquí tus imágenes',
        dictFallbackMessage: 'Tu navegador no soporta arrastrar y soltar para subir archivos',
        dictInvalidFileType: 'No puedes subir este tipo de archivo',
        dictFileTooBig: 'El archivo es muy grande',
        dictCancelUpload: 'Cancelar subida'
      })

      myDropzone.on('addedfile', (file) => {
        if (myDropzone.files.length > 5) {
          myDropzone.removeFile(myDropzone.files[0])
        }
      })
    })
  }
})
</script>

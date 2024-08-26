<script setup>
import { nextTick, ref, watch } from 'vue'
import axios from 'axios'
import MaterialSwitch from '@/components/Material/MaterialSwitch.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialTextarea from '@/components/Material/MaterialTextarea.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import Dropzone from 'dropzone'

let myDropzone = null

const agregarInventario = ref(false)
const modificable = ref(false)

const nuevoItem = ref({ nombre: '', estado: '', modificable: true, descripcion: '', fotos: [] })
const items = ref([])

watch(modificable, (newValue) => {
  if (newValue) {
    nuevoItem.value.modificable = true
  } else {
    nuevoItem.value.modificable = false
  }
})

async function enviar() {
  for (const item of items.value) {
    const formData = new FormData()
    const inventario = {
      nombre: item.nombre,
      descripcion: item.descripcion,
      modificable: item.modificable,
      estado: item.estado
    }
    formData.append('inventario', new Blob([JSON.stringify(inventario)], { type: 'application/json' }))

    item.fotos.forEach((foto) => {
      const blob = dataURLtoBlob(foto.dataURL)
      formData.append('imagenes', blob, foto.upload.filename)
    })

    try {
      const response = await axios.post('http://localhost:8080/propiedad/1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Item guardado:', response.data)
    } catch (error) {
      console.error('Error al guardar item:', error)
    }
  }
}

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = 'image/jpg',
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}


function agregarItem() {
  nuevoItem.value.fotos = myDropzone.files
  console.log('Nuevo item:', nuevoItem.value)
  items.value.push({ ...nuevoItem.value })
  nuevoItem.value = { nombre: '', estado: '', modificable: modificable.value, descripcion: '', fotos: [] }
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


<template>
  <div id="Inventario" class="card">
    <div class="card-header">
      <h4>Inventario</h4>
    </div>
    <div class="card-body pt-0">
      <div class="row mt-4">
        <div class="col">
          <material-switch id="agregar_inventario" v-model:checked="agregarInventario" checked
                           label-class="mb-0 text-body text-truncate w-100"
                           name="agregar_inventario">
            {{ agregarInventario ? 'Agregar Inventario' : 'Sin inventario' }}
          </material-switch>
        </div>
      </div>
      <div v-if="agregarInventario" class="row mt-4">
        <div class="row mt-4">
          <h5>Agregar Item</h5>
          <form class="row mt-2" @submit.prevent="agregarItem">
            <div class="col-4 mt-3">
              <material-switch id="modificable" v-model:checked="modificable" checked name="modificable">
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
              <MaterialInput
                id="estado"
                v-model="nuevoItem.estado"
                isRequired
                label="Estado"
              />
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
            <div class="row mt-2 ">
              <!--    Agregar imagenes-->
              <h5 class="font-weight-bolder">Imagenes</h5>
              <div class="multisteps-form__content">
                <div class="mt-3 row">
                  <div class="col-12">
                    <label class="form-control mb-0">Puedes añadir imágenes arrastrando los archivos o haciendo click
                      sobre
                      este cuadro </label>
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
      <div class="row mt-4">
        <div v-if="agregarInventario" class="table-responsive">
          <table id="datatable-search2" class="table table-flush">
            <thead class="thead-light">
            <tr>
              <th class="text-center">Nombre</th>
              <th class="text-center">Estado</th>
              <th class="text-center">Descripción</th>
              <th class="text-center">Fotos</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td class="text-sm font-weight-normal text-center">{{ item.nombre }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.estado }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.descripcion }}</td>
              <td class="text-sm font-weight-normal text-center">{{ item.fotos.length }}</td>
            </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" @click="enviar">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

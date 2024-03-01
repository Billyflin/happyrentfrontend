<script setup>
import { nextTick, ref, watch } from 'vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialTextarea from '@/components/MaterialTextarea.vue'
import Dropzone from 'dropzone'
import MaterialButton from '@/components/MaterialButton.vue'

let myDropzone = null

const agregarInventario = ref(false)
const modificable = ref(false)

const nuevoItem = ref({ nombre: '', estado: '', descripcion: '', fotos: [] })
const items = ref([])

function agregarItem() {
  nuevoItem.value.fotos = myDropzone.files
  console.log('Nuevo item:', nuevoItem.value)
  items.value.push({ ...nuevoItem.value })
  nuevoItem.value = { nombre: '', estado: '', descripcion: '', fotos: [] }
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
  <div id="Inventario" class="card mt-4">
    <div class="card-header">
      <h4>Inventario</h4>
    </div>
    <div class="card-body pt-0">
      <div class="row mt-4">
        <div class="col-3">
          <material-switch id="agregar_inventario" name="agregar_inventario" v-model:checked="agregarInventario" checked
                           label-class="mb-0 text-body text-truncate w-100">
            {{ agregarInventario ? 'Agregar Inventario' : 'Sin inventario' }}
          </material-switch>
        </div>
      </div>
      <div class="row mt-4" v-if="agregarInventario">
        <div class="row mt-4">
          <h5>Agregar Item</h5>
          <form @submit.prevent="agregarItem" class="row mt-2">
            <div class="col-4 mt-3">
            <material-switch id="modificable" name="modificable" v-model:checked="modificable" checked>{{modificable? 'Es modificable':'No es modificable'}}</material-switch>
            </div>
            <div class="col-4">
              <MaterialInput
                id="nombre"
                size="lg"
                label="Nombre del objeto"
                v-model="nuevoItem.nombre"
                isRequired
              />
            </div>
            <div class="col-4">
              <MaterialInput
                id="estado"
                label="Estado"
                v-model="nuevoItem.estado"
                isRequired
              />
            </div>
            <div class="col-12 mt-2">
              <MaterialTextarea
                id="descripcion"
                placeholder="Añade una descripción..."
                v-model="nuevoItem.descripcion"
                isRequired
                :resizable="false"
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
              <material-button type="submit" color="success">Agregar</material-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-4">
        <div class="table-responsive" v-if="agregarInventario">
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
        </div>
      </div>
    </div>
  </div>
</template>

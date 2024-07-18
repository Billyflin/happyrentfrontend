<script setup>
import { onMounted, ref } from 'vue'
import MyDataTablePersonas from '@/views/Personas/components/TablaPersonas.vue'
import DefaultStatisticsCard from '@/examples/Cards/DefaultStatisticsCard.vue'
import axios from 'axios'
import * as XLSX from 'xlsx'
import FileSave from 'file-saver'

const perfiles = ref([])
const personas = ref(null)
const empresas = ref(null)
const isLoading = ref(true)

function s2ab(s) {
  var buf = new ArrayBuffer(s.length)
  var view = new Uint8Array(buf)
  for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF
  return buf
}

function flattenObject(ob) {
  var toReturn = {}

  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue

    // Excluye los campos que no quieres incluir
    if (i === 'id' || i === 'createdBy' || i === 'lastModifiedBy' || i === 'type') continue

    if ((typeof ob[i]) == 'object' && ob[i] !== null) {
      var flatObject = flattenObject(ob[i])
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue

        // Excluye los campos que no quieres incluir
        if (x === 'id' || x === 'createdBy' || x === 'lastModifiedBy' || i === 'type') continue

        toReturn[i + '_' + x] = flatObject[x]
      }
    } else {
      toReturn[i] = ob[i]
    }
  }
  return toReturn
}


function downloadExcel(data, filename) {
  const wb = XLSX.utils.book_new()
  const ws = XLSX.utils.json_to_sheet(data)
  XLSX.utils.book_append_sheet(wb, ws)
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' })
  FileSave.saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), filename)
}

let flattenedPersonas = ref(null)
let flattenedEmpresas = ref(null)
onMounted(async () => {
  isLoading.value = true
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/perfil/info`).then(
    response => {
      isLoading.value = false
      console.log(response.data)
      return response
    }
  )
  perfiles.value = response.data
  personas.value = response.data
    .filter(persona => persona.type === 'persona')
    .map(({ id, createdBy, lastModifiedBy, type, nombre, ...rest }) => {
      return { nombre, ...rest }
    })
  empresas.value = response.data
    .filter(persona => persona.type === 'empresa')
    .map(({ id, createdBy, lastModifiedBy, type, representante, nombre, ...rest }) => {
      return { nombre, ...rest, representante }
    })

// Aplana los objetos en tus datos
  flattenedPersonas = personas.value.map(persona => flattenObject(persona))
  flattenedEmpresas = empresas.value.map(empresa => flattenObject(empresa))

})


function handleDetails(row) {
  console.log('Details Row:', row) // Log the row data for details
}

</script>

<template>
  <div class="container-fluid mt-4">
    <div class="row mb-4">
      <div class="col-lg-8">
        <h4>Acá puedes gestionar las personas, puedes utilizarlos para crear contratos</h4>
        <p>
          Puedes agregarla manualmente o solicitarle al futuro arrendatario que complete un formulario para agregarla a
          tu lista de personas.
        </p>
      </div>
      <default-statistics-card
        :count="personas ? personas.length : 0"
        :dropdown=" [
              { label: 'Descargar Excel',
                icon:'file_download',
                action: () => downloadExcel(flattenedPersonas, 'personas.xlsx')
              }
            ]"
        description="Total de personas"
        menu="Descargar"
        title="Total Personas"
      />
      <default-statistics-card
        :count="empresas ? empresas.length : 0"
        :dropdown=" [
              { label: 'Descargar Excel',
                icon:'file_download',
                action: () => downloadExcel(flattenedEmpresas, 'empresas.xlsx')
              }
            ]"
        :lista="empresas"
        description="Total de empresas"
        icon="business"
        menu="Descargar"
        title="Total Empresas"
      />
    </div>
    <div class="row mb-6">
      <div class="col-lg-12">
        <div class="card p-3">
          <div class="pb-0 card-header d-flex align-items-center justify-content-between">
            <h5>Personas</h5>
            <router-link class="mt-2 mb-2 btn btn-happLight ml-auto d-flex align-items-center"
                         to="/agregarPersona">
              Agregar persona
              <span class="material-symbols-outlined mx-2">
                person_add
              </span>
            </router-link>
          </div>
          <MyDataTablePersonas
            :details="true"
            :headers="[
                { key: 'nombre', title: 'Nombre' },
                { key: 'rut', title: 'RUT' },
                { key: 'email', title: 'Email' },
                { key: 'direccion', title: 'Dirección' },
                { key: 'type', title: 'Tipo Entidad' },
                { key: 'archivos', title: 'Archivos'}
              ]"
            :isLoading="isLoading"
            :tableData="perfiles"
            @details="handleDetails"
          />
        </div>
      </div>
    </div>
  </div>
</template>

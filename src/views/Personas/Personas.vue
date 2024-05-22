<script setup>
import { onMounted, ref } from 'vue'
import TablaPersonas from '@/views/Personas/components/TablaPersonas.vue'
import DefaultStatisticsCard from '@/examples/Cards/DefaultStatisticsCard.vue'
import axios from 'axios'
import * as XLSX from 'xlsx'
import FileSave from 'file-saver'

const perfiles = ref(null)
const personas = ref(null)
const empresas = ref(null)

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
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/perfil`)
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
      <tabla-personas v-if="perfiles"
                      :headers="['Nombre', 'Rut', 'Email','Direccion', 'Tipo Entidad', 'Accion']"
                      :lists="perfiles.map(persona => ({
    title: persona.type === 'persona' ? `${persona.nombre} ${persona.apellidoPaterno} ${persona.apellidoMaterno}` : persona.nombre,
    direccion: persona.direccion.ciudad,
    region: persona.direccion.region + ', ' + persona.direccion.pais,
    values: [persona.rut || persona.rut, persona.email,
      persona.direccion.calle + ' ' + persona.direccion.numero, persona.type.charAt(0).toUpperCase() + persona.type.slice(1), persona.id],
  }))"
      />
    </div>
  </div>
</template>

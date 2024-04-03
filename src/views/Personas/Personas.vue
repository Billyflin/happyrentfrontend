<script setup>

import SolicitarDatosContrato from '@/views/Contrato/components/SolicitarDatosContrato.vue'
import TablaPersonas from '@/views/Personas/components/TablaPersonas.vue'

import setTooltip from '@/assets/js/tooltip.js'
import { useAppStore } from '@/store/index.js'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const personas = ref(null)
const store = useAppStore()

onMounted(async () => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/personas`)
  personas.value = response.data
  console.log(personas.value)
  setTooltip(store.bootstrap)
})
</script>

<template>
  <div class="container-fluid mt-4">
    <div class="row mb-2">
      <div class="col-lg-9">
        <h4>Acá puedes gestionar las personas, puedes utilizarlos para crear contratos</h4>
        <p>
          Puedes agregarla manualmente o solicitarle al futuro arrendatario que complete un formulario para agregarla a
          tu lista de personas.
        </p>
      </div>


    </div>
    <div class="row mb-4">
      <solicitar-datos-contrato />
    </div>
    <div class="row mb-6">
      <tabla-personas v-if="personas"
        :headers="['Nombre', 'Rut', 'Email','Persona o Empresa', 'Tipo Entidad', 'Accion']"
        :lists="personas.map(persona => ({
        title: persona.persona.persona.nombres + ' ' + persona.persona.persona.apellidoPaterno,
        direccion: persona.persona.persona.direccion.ciudad,
        region:persona.persona.persona.direccion.region+ ', ' + persona.persona.persona.direccion.pais,
          values: [persona.persona.persona.rut, persona.persona.persona.email, persona.persona.empresa ? 'Empresa' : 'Persona', persona.tipoPersona , persona.tipoEntidad, ''],
        }))"
      />

    </div>
  </div>
</template>

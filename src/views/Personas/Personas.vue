<script setup>
import TablaPersonas from '@/views/Personas/components/TablaPersonas.vue'

import { onMounted, ref } from 'vue'
import axios from 'axios'

const personas = ref(null)

onMounted(async () => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/perfil`)
  personas.value = response.data
  console.log(personas.value)

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
<!--        <p v-for="persona in personas">-->
<!--          {{ persona }}-->

<!--        </p>-->
      </div>
    </div>

    <div class="row mb-6">
      <tabla-personas v-if="personas"
                      :headers="['Nombre', 'Rut', 'Email','Direccion', 'Tipo Entidad', 'Accion']"
                      :lists="personas.map(persona => ({
                    title: persona.nombre,
                    direccion: persona.direccion.ciudad,
                    region: persona.direccion.region + ', ' + persona.direccion.pais,
                    values: [persona.rut || persona.rutEmpresa, persona.email,
                      persona.direccion.calle + ' ' + persona.direccion.numero, persona.type, ''],
        }))"
      />
    </div>
  </div>
</template>

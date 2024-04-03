<script setup>
import CorredoraCardPropiedades from '@/views/Corredora/CorredoraCardPropiedades.vue'
import { onBeforeMount, onMounted, ref } from 'vue'
import axios from 'axios'

import setTooltip from "@/assets/js/tooltip.js";
import { useAppStore } from '@/store/index.js'
import AgregarPersona from '@/views/Corredora/components/AgregarPersona.vue'

const corredora = ref(null)
const store = useAppStore()

onMounted(async () => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/corredora`)
  corredora.value = response.data
  setTooltip(store.bootstrap);
})
</script>

<template>
  <div class="container-fluid mt-4">
    <corredora-card-propiedades
      v-if="corredora"
      :title="corredora.nombre"
      :headers="['Direccion', 'Propietario', 'Tipo Propiedad', 'Arrendado']"
      :lists="corredora.propiedades.map(propiedad => ({
        title: propiedad.direccion.calle + ' ' + propiedad.direccion.numero,
        direccion: propiedad.direccion.ciudad ,
        region: ', ' + propiedad.direccion.region+ ', ' + propiedad.direccion.pais,
        values: [propiedad.propietario.persona.nombres+' '+propiedad.propietario.persona.apellidoPaterno ,propiedad.tipoPropiedad.tipo, propiedad.arrendado ? 'Sí' : 'No'],
        info: `hola` , // Añade la información adicional que necesites aquí
        image: `data:image/png;base64,${propiedad.imagen.imageData}`,
        icon: 'bold-up text-success', // Ajusta el icono según tus necesidades
      }))"
    />
<!--  <agregar-persona></agregar-persona>-->
  </div>

</template>
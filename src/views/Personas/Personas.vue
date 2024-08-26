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
<!--      <default-statistics-card-->
<!--        :count="personas ? personas.length : 0"-->
<!--        :dropdown=" [-->
<!--              { label: 'Descargar Excel',-->
<!--                icon:'file_download',-->
<!--                action: () => downloadExcel(flattenedPersonas, 'personas.xlsx')-->
<!--              }-->
<!--            ]"-->
<!--        description="Total de personas"-->
<!--        menu="Descargar"-->
<!--        title="Total Personas"-->
<!--      />-->
<!--      <default-statistics-card-->
<!--        :count="empresas ? empresas.length : 0"-->
<!--        :dropdown=" [-->
<!--              { label: 'Descargar Excel',-->
<!--                icon:'file_download',-->
<!--                action: () => downloadExcel(flattenedEmpresas, 'empresas.xlsx')-->
<!--              }-->
<!--            ]"-->
<!--        :lista="empresas"-->
<!--        description="Total de empresas"-->
<!--        icon="business"-->
<!--        menu="Descargar"-->
<!--        title="Total Empresas"-->
<!--      />-->
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
          <tabla-personas
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
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import TablaPersonas from '@/views/Personas/components/TablaPersonas.vue'
import { getPersonas } from '@/servicios/personasService.js'
import DefaultStatisticsCard from '@/components/Cards/DefaultStatisticsCard.vue'

const perfiles = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await getPersonas()
    perfiles.value = response.data
    isLoading.value = false
  } catch (err) {
    console.error(err)
  }
})

</script>
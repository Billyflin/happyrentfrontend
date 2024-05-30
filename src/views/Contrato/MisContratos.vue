<template>
  <div class="py-4 container-fluid">
      <div class="col-12">
        <div class="card">


          <!-- Card header -->
          <div class="card-header">
            <h5 class="mb-0">Mis Contratos</h5>
            <p class="mb-0 text-sm">
              Aquí encontrarás un listado de tus contratos
            </p>
          </div>
          <TablaContratos></TablaContratos>
        </div>
      </div>
  </div>
</template>


<script>
import TablaContratos from '@/views/Contrato/components/TablaContratos.vue'
import { defineComponent } from 'vue'
import MaterialButton from '@/components/MaterialButton.vue'
import BarraContratos from '@/views/Contrato/components/BarraContratos.vue'

export default defineComponent({
  components: { BarraContratos, MaterialButton, TablaContratos }
})


</script>
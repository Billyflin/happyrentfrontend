<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h5>Descargar Contrato</h5>
          <p class="text-muted">Descarga el contrato en formato PDF</p>
        </div>
        <div>
          <material-button size="lg" @click="getDocumento(contratoId)"> Descargar</material-button>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'
import { getDocumento } from '@/servicios/contratosService.js'

export default {
  name: 'DescargarContrato',
  methods: { getDocumento },
  components: { MaterialButton },
  props: {
    contratoId: {}
  }
}
</script>
<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h5>Descargar Contrato</h5>
          <p class="text-muted">Descarga el contrato en formato PDF</p>
        </div>
        <div>
          <material-button size="lg"> Descargar</material-button>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'

export default {
  name: 'DescargarContrato',
  components: { MaterialButton },
  props: {
    contratoId: {}
  }
}
</script>
<template>
  <div class="card">
    <div class="card-header pb-2">
      <h5 class="card-title text-primary">Control de contrato</h5>
    </div>
    <div class="card-body">
      <!-- Generar Salvoconducto -->
      <div class="row mb-4">
        <div class="col-md-8">
          <h5>Generar Salvoconducto</h5>
          <p class="text-muted">Descarga el salvoconducto en formato PDF</p>
        </div>
        <div class="col-md-4 text-end">
          <router-link to="/EditorSalvoconducto">
            <material-button size="lg" color="primary">Generar</material-button>
          </router-link>
        </div>
      </div>

      <!-- Generar ACTA de RECEPCIÓN Y ENTREGA de propiedad -->
      <div class="row mb-4">
        <div class="col-md-8">
          <h5>Generar ACTA de RECEPCIÓN Y ENTREGA de propiedad</h5>
          <p class="text-muted">Descarga el documento en formato PDF</p>
        </div>
        <div class="col-md-4 text-end">
          <router-link to="/EditorRecepcion">
            <material-button size="lg" color="primary">Generar</material-button>
          </router-link>
        </div>
      </div>

      <!-- Acciones adicionales -->
      <div class="row mt-4">
        <div class="col-12">
          <p class="text-muted mb-3">
            Aquí puedes renovar, ver el historial de pagos detallado o terminar el contrato en nombre del arrendatario.
            El propietario tiene su propio botón de solicitud de término de contrato.
          </p>
        </div>
        <div class="col-md-6 mb-3">
          <button class="btn btn-success w-100">Notificar Arrendatario</button>
        </div>
        <div class="col-md-6 mb-3">
          <button class="btn btn-success w-100">Renovar contrato</button>
        </div>
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary w-100">Ver historial de contrato</button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-danger w-100">Terminar contrato</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'

export default {
  name: 'PanelControlContrato',
  components: { MaterialButton },
  props: {
    contrato: {}
  }
}
</script>


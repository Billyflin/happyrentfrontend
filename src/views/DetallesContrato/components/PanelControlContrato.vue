<template>

  <div class="card">
    <div class="card-header pb-0">
      <h5 class="card-title  text-primary">Control de contrato</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <p class="text-muted">Aquí puedes renovar, ver el historial de pagos detallado o terminar el contrato en nombre del arrendatario,

          el propietario tiene su propio botón de solicitud de termino de contrato</p>


        <button class="btn btn-success btn-block">Notificar Arrendatario</button>

        <button class="btn btn-success btn-block">Renovar contrato</button>

        <button class="btn btn-primary btn-block">Ver historial de contrato</button>

        <button class="btn btn-danger btn-block">Terminar contrato</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PanelControlContrato',
  props: {
    contrato: {}
  }
}
</script>


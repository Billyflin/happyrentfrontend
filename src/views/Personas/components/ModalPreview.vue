<template>
  <div v-if="mostrarModal" class="modal fade show" style="display: block" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Previsualización de Archivo</h5>
          <button aria-label="Close" class="btn-close" type="button" @click="cerrarModal"></button>
        </div>
        <div class="modal-body">
          <iframe :src="archivoPrevisualizado" height="800px" width="100%"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalPreview',
  props: {
    archivoPrevisualizado: {},
    cerrarModal: {},
    mostrarModal: {}
  }
}
</script>
<style scoped>
.modal {
  z-index: 9999999;
}
</style>

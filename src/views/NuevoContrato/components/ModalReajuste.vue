<template>
  <!-- Button trigger modal -->
  <button
    class="btn btn-primary"
    data-bs-target="#exampleModal"
    data-bs-toggle="modal"
    type="button"
  >
    Abrir Configuracion Reajuste
  </button>

  <!-- Modal -->
  <div
    id="exampleModal"
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    class="modal modal-lg fade"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 id="exampleModalLabel" class="modal-title fs-5">Reajuste</h1>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Cerrar</button>
          <button class="btn btn-primary" type="button">Guardar Cambios</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalReajuste'
}
</script>
<!--<style scoped>-->
<!--.modal {-->
<!--  z-index: 9999999;-->
<!--}-->
<!--</style>-->

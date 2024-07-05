<template>
  <div v-if="mostrarModalConfirmacion" class="modal fade show" style="display: block;" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmar Eliminación</h5>
          <button aria-label="Close" class="btn-close" type="button" @click="cerrarModalConfirmacion"></button>
        </div>
        <div class="modal-body">
          <p>¿Estás seguro de que deseas eliminar el registro de {{auth.persona.nombre}}"?</p>
        </div>
        <div class="modal-footer">
          <material-button color="success" class="btn btn-secondary" @click="cerrarModalConfirmacion">Cancelar
          </material-button>
          <material-button color="danger" class="btn btn-danger" @click="eliminarArchivo">Eliminar</material-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialButton from '@/components/MaterialButton.vue'

export default {
  name: 'ModalConfirmacion',
  components: { MaterialButton },
  props: {
    auth: {},
    cerrarModalConfirmacion: {},
    eliminarArchivo: {},
    mostrarModalConfirmacion: {}
  }
}
</script>
<style scoped>
.modal {
  z-index: 9999999;
}
</style>
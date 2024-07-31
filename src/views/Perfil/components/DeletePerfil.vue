<template>
  <div id="delete" class="card mt-4">
    <div class="card-header">
      <h5>Eliminar Cuenta</h5>
      <p class="text-sm mb-0">
        Si eliminas tu cuenta, perderás todos tus datos y no podrás recuperarlos. Por favor, asegúrate de que deseas
        eliminar tu cuenta.
      </p>
    </div>
    <div class="card-body d-sm-flex pt-0">
      <div class="d-flex align-items-center mb-sm-0 mb-4">
        <div>
          <material-switch id="deleteAccount" name="Delete Account" />
        </div>
        <div class="ms-2">
          <span class="text-dark font-weight-bold d-block text-sm"
          >Confirmar</span
          >
          <span
            class="text-xs d-block">Quiero borrar mi cuenta, estoy en conocimiento que esta acción es permanente</span>
        </div>
      </div>
      <material-button
        class="mb-0 ms-auto"
        color="secondary"
        name="button"
        type="button"
        variant="outline"
      >Desactivar
      </material-button
      >
      <material-button
        class="mb-0 ms-2"
        color="danger"
        name="button"
        type="button"
        variant="gradient"
      >Eliminar Cuenta
      </material-button
      >
    </div>
  </div>
</template>
<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialSwitch from '@/components/Material/MaterialSwitch.vue'

export default {
  name: 'delete-perfil',
  components: { MaterialButton, MaterialSwitch }
}
</script>
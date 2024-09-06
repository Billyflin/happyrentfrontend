<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h6>Eliminar propiedad</h6>
        <material-button
          data-bs-toggle="modal" data-bs-target="#deletePropiedadModal"
          color="danger"
          size="sm"
          variant="outline">
          Eliminar propiedad
        </material-button>
      </div>
    </div>
    <div class="modal fade" id="deletePropiedadModal" aria-labelledby="deletePropiedadModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="deletePropiedadModalLabel">Eliminar esta propiedad</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>¿Estás seguro de que deseas eliminar esta propiedad?</p>
            <div class="d-flex justify-content-between">
              <button @click="handleDeletePropiedad(propiedad.id)" data-bs-dismiss="modal" class="btn btn-danger">Eliminar</button>
              <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'
import { deletePropiedad } from '@/servicios/propiedadesService.js'
import { useNotificationsStore } from '@/store/notifications.js'
import { useRouter } from 'vue-router'

export default {
  name: 'EliminarPropiedad',
  components: { MaterialButton },
  props: {
    propiedad: Object,
  },
  setup() {
    const router = useRouter();
    const store4 = useNotificationsStore();

    const handleDeletePropiedad = async (propiedadId) => {
      try {
        // Notificar al usuario que la eliminación ha comenzado
        store4.createNotification('info', 'Eliminando', 'La eliminación de la propiedad ha comenzado.');

        // Llamar al servicio para eliminar la propiedad
        await deletePropiedad(propiedadId);

        // Notificar éxito
        store4.createNotification('success', 'Propiedad eliminada', 'La propiedad ha sido eliminada exitosamente.');


        await router.push('/Propiedades');
      } catch (error) {
        // Notificar error
        store4.createNotification('danger', 'Error al eliminar', `Hubo un problema al eliminar la propiedad: ${error.response.data}`);
        console.error('Error eliminando la propiedad:', error);
      }
    };

    return {
      handleDeletePropiedad,
    };
  },
}
</script>

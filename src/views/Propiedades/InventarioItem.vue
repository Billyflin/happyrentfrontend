<template>
  <tr>
    <td class="align-middle text-center">{{ item.nombre }}</td>
    <td class="align-middle text-center">{{ item.descripcion }}</td>
    <td class="align-middle text-center">
      <span :class="statusBadgeClass">{{ statusText }}</span>
    </td>
    <td class="align-items-center text-center">
      <button class="btn btn-outline-primary btn-sm mb-0" @click="$emit('open-photo-gallery', item)">
        <i class="bi bi-camera"></i> Ver fotos ({{ item.archivoes.length }})
      </button>
    </td>
    <td class="text-center align-middle">
      <button class="btn btn-outline-secondary btn-sm mb-0 " @click="$emit('edit-item', item)">
        <i class="bi bi-pencil-square"></i> Editar
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'InventarioItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusBadgeClass() {
      switch (this.item.estado) {
        case 'good':
          return 'badge bg-success';
        case 'damaged':
          return 'badge bg-warning';
        case 'missing':
          return 'badge bg-danger';
        default:
          return 'badge bg-secondary';
      }
    },
    statusText() {
      switch (this.item.estado) {
        case 'good':
          return 'Bueno';
        case 'damaged':
          return 'Dañado';
        case 'missing':
          return 'Faltante';
        default:
          return 'Desconocido';
      }
    }
  }
}
</script>

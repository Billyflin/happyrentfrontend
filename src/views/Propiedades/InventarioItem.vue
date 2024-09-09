<template>
  <tr>
    <td>{{ item.nombre }}</td>
    <td>{{ item.descripcion }}</td>
    <td>
      <span :class="statusBadgeClass">{{ statusText }}</span>
    </td>
    <td>
      <button class="btn btn-outline-primary btn-sm" @click="$emit('open-photo-gallery', item)">
        <i class="bi bi-camera"></i> Ver fotos ({{ item.archivoes.length }})
      </button>
    </td>
    <td>
      <button class="btn btn-outline-secondary btn-sm" @click="$emit('edit-item', item)">
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
      const statusClasses = {
        good: 'badge bg-success',
        damaged: 'badge bg-warning',
        missing: 'badge bg-danger'
      };
      return statusClasses[this.item.estado] || 'badge bg-secondary';
    },
    statusText() {
      const statusTexts = {
        good: 'Bueno',
        damaged: 'Dañado',
        missing: 'Faltante'
      };
      return statusTexts[this.item.estado] || 'Desconocido';
    }
  }
}
</script>

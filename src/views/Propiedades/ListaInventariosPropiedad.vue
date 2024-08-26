<template>
  <div class="card shadow-lg border-light">
    <div class="card-header">
      <h6 class="mb-0">Lista Inventario de la Propiedad</h6>
      {{inventarios}}
    </div>
    <div class="card-body">
      <p class="card-text">
        <ul>
          <li v-for="inventario in inventarios" :key="inventario.id">
            {{ inventario.descripcion }}
          </li>
        </ul>
      </p>
      <material-button
        class="btn btn-primary"
      > Ir a Inventario
      </material-button>
    </div>
  </div>
</template>
<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'

export default {
  name: 'ListaInventariosPropiedad',
  components: { MaterialButton },
  props: {
    inventarios: {}
  }
}
</script>
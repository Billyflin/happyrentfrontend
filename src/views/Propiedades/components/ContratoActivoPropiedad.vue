<template>
  <div v-if="arrendado" class="card shadow-sm border-light">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Contrato Activo</h5>
        <router-link to="">

        <material-button class="btn btn-primary" size="lg">
          Ir a Contrato
        </material-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'

export default {
  name: 'ContratoActivoPropiedad',
  components: { MaterialButton },
  props: {
    arrendado: Boolean,
    propiedadId: String
  }
}
</script>

<template>
  <div class="row align-items-center">
    <div class="col-9 mb-3">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center titulo-contrato">Clausulas del contrato</h1>
          <material-badge class="badge badge-warning mb-4"> Esta es solo una vista preliminar.</material-badge>
          <p class="text-center clase">El documento final tendra una apariencia levemente diferente pero el contenido
            de las clausulas será exactamente el mismo. Para editar el contenido de una clausula,
            puedes hacer click en editar y luego hacer click en el texto que quieres editar.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialBadge from '@/components/Material/MaterialBadge.vue'

export default {
  name: 'Titulo',
  components: { MaterialBadge }
}
</script>
<template>
  <div>
    <div v-if="direccion" class="card mb-3">
      <div class="card-header pb-1">
        <h6>Dirección de la Propiedad</h6>
      </div>
      <div class="card-body pt-0">
        <p class="mt-0 mb-0">
          <span class="text-dark text-bolder text-capitalize"
            >{{ direccion.calle }} {{ direccion.numero }}</span
          >,<br />
          {{ direccion.ciudad }}, <span class="text-success">{{ direccion.region }}</span
          >, {{ direccion.pais }}<br />
          <span v-if="direccion.detalle" class="text-sm">
            <strong>Detalle:</strong> {{ direccion.detalle }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaDireccionPropiedad',
  props: {
    direccion: {}
  }
}
</script>

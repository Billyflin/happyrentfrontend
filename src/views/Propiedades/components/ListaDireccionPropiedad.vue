<template>
  <div>
    <div class="card mb-3" v-if="direccion">
      <div class="card-header pb-1">
        <h6>Dirección de la Propiedad</h6>
      </div>
      <div class="card-body pt-0">
        <p class=" mt-0 mb-0">
          {{ direccion.calle }} {{ direccion.numero }},
          {{ direccion.ciudad }}, {{ direccion.region }}, {{ direccion.pais }}
          <span v-if="direccion.detalle">
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

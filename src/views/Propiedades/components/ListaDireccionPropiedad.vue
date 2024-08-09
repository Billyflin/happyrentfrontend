<template>
  <div>
    <div class="card" v-if="direccion">
      <div class="card-body">
        <h5>Dirección de la Propiedad</h5>
        <ul>
          <li><strong>Calle:</strong> {{ direccion.calle }}</li>
          <li><strong>Numero:</strong> {{ direccion.numero }}</li>
          <li><strong>Detalle:</strong>{{ direccion.detalle }}</li>
          <li><strong>Region:</strong>{{ direccion.region }}</li>
          <li><strong>Ciudad:</strong>{{ direccion.ciudad }}</li>
          <li><strong>Pais:</strong>{{ direccion.pais }}</li>
        </ul>
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
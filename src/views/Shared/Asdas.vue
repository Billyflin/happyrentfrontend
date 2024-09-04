
<template>
  <div class="card border col-md-5 mx-auto">
    <img :src="light" alt="light" class="p-2 card-img-top">
    <div class="card-body">
      <h5 class="card-title">Light Theme</h5>
      <p class="card-text">
        Activar el modo claro
      </p>
      <a href="/" class="btn btn-primary stretched-link">Boton de prueba</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'asdas',
  props: {
    light: {}
  }
}
</script>
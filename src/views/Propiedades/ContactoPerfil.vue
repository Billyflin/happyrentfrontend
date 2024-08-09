<template>
  <div class="card shadow-lg border-light">
    <div class="card-header mb-0">
      <h5 class="">Contacto</h5>
    </div>
    <div class="card-body pt-0">
      <dl class="row">
        <template v-if="propietario.email">
          <dt class="col-sm-4 mb-4">Email:</dt>
          <a class="col-sm-8" :href="`mailto:${propietario.email}`">{{ propietario.email }}</a>
        </template>
        <template v-else>
          <dt class="col-sm-4">Email:</dt>
          <dd class="col-sm-8">No hay email registrado</dd>
        </template>

        <template v-if="propietario.telefono">
          <dt class="col-sm-4">Teléfono:</dt>
          <a class="col-sm-8" :href="`tel:+569${propietario.telefono}`">+569 {{ propietario.telefono }}</a>
        </template>
        <template v-else>
          <dt class="col-sm-4">Teléfono:</dt>
          <dd class="col-sm-8">No hay teléfono registrado</dd>
        </template>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactoPerfil',
  props: {
    propietario: {}
  }
}
</script>
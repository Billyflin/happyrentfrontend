<template>
  <div class="card shadow-lg border-light">
    <div class="card-header pb-1 mb-0">
      <h6 class="">Contacto</h6>
    </div>
    <div class="card-body pt-0">
      <dl class="row text-sm">
        <template v-if="propietario.email">
          <dt class="col-sm-4 mb-3">Email:</dt>
          <a :href="`mailto:${propietario.email}`" class="col-sm-8">{{ propietario.email }}</a>
        </template>
        <template v-else>
          <dt class="col-sm-4">Email:</dt>
          <dd class="col-sm-8">No hay email registrado</dd>
        </template>

        <template v-if="propietario.telefono">
          <dt class="col-sm-4">Teléfono:</dt>
          <a :href="`tel:+569${propietario.telefono}`" class="col-sm-8"
            >+569 {{ propietario.telefono }}</a
          >
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

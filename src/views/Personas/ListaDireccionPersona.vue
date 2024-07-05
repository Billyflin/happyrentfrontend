<template>
  <div class="col-lg-3">
    <h5 class="mb-3">Dirección</h5>
    <ul class="list-group mb-3">
      <li class="list-group-item text-start"><strong>Calle:</strong> {{ auth.persona.direccion.calle }}</li>
      <li class="list-group-item text-start"><strong>Número:</strong> {{ auth.persona.direccion.numero }}
      </li>
      <li class="list-group-item text-start"><strong>Detalle:</strong> {{ auth.persona.direccion.detalle }}
      </li>
      <li class="list-group-item text-start"><strong>Región:</strong> {{ auth.persona.direccion.region }}
      </li>
      <li class="list-group-item text-start"><strong>Ciudad:</strong> {{ auth.persona.direccion.ciudad }}
      </li>
      <li class="list-group-item text-start"><strong>País:</strong> {{ auth.persona.direccion.pais }}</li>
      <li class="list-group-item text-start"><strong>Código Postal:</strong>
        {{ auth.persona.direccion.codigoPostal }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListaDireccionPersona',
  props: {
    auth: {}
  }
}
</script>
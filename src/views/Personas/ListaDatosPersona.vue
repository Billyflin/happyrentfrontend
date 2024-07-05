<template>
  <div class="col-lg-4">
    <h5 class="mb-3">Datos de Persona</h5>
    <ul class="list-group">
      <li class="list-group-item text-start"><strong>Nombre:</strong> {{ auth.persona.nombre }}</li>
      <li class="list-group-item text-start"><strong>Apellido Paterno:</strong>
        {{ auth.persona.apellidoPaterno }}
      </li>
      <li class="list-group-item text-start"><strong>Apellido Materno:</strong>
        {{ auth.persona.apellidoMaterno }}
      </li>
      <li class="list-group-item text-start"><strong>Tratamiento:</strong> {{ auth.persona.tratamiento }}
      </li>
      <li class="list-group-item text-start"><strong>Ocupación:</strong> {{ auth.persona.ocupacion }}</li>
      <li class="list-group-item text-start"><strong>Estado Civil:</strong> {{ auth.persona.estadoCivil }}
      </li>
      <li class="list-group-item text-start"><strong>Nacionalidad:</strong> {{ auth.persona.nacionalidad }}
      </li>
      <li class="list-group-item text-start"><strong>Fecha de Nacimiento:</strong>
        {{ auth.persona.fechaNacimiento }}
      </li>
      <li class="list-group-item text-start"><strong>Email:</strong> {{ auth.persona.email }}</li>
      <li class="list-group-item text-start"><strong>Teléfono:</strong> {{ auth.persona.telefono }}</li>
      <li class="list-group-item text-start"><strong>RUT:</strong> {{ auth.persona.rut }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListaDatosPersona',
  props: {
    auth: {}
  }
}
</script>
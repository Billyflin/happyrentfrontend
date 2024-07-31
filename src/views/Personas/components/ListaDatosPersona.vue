<template>
  <div class="col-lg-4">
    <h5 class="mb-3">Datos de Persona</h5>
    <ul class="list-group">
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Nombre:</strong>
        <span >{{ auth.persona.nombre }}</span>
<!--        <input v-else v-model="auth.persona.nombre" class="form-control editor-input w-60" />-->
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Apellido Paterno:</strong>
        <span >{{ auth.persona.apellidoPaterno }}</span>
<!--        <input v-else v-model="auth.persona.apellidoPaterno" class="form-control editor-input w-60" />-->
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Apellido Materno:</strong>
        <span>{{ auth.persona.apellidoMaterno }}</span>
<!--        <input v-else v-model="auth.persona.apellidoMaterno" class="form-control editor-input w-60" />-->
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">RUT:</strong>
        <span>{{ auth.persona.rut }}</span>
<!--        <input v-else v-model="auth.persona.rut" class="form-control editor-input w-60" />-->
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Tratamiento:</strong>
        <span v-if="!editMode">{{ auth.persona.tratamiento }}</span>
        <input v-else v-model="auth.persona.tratamiento" class="form-control editor-input w-60" />
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Ocupación:</strong>
        <span v-if="!editMode">{{ auth.persona.ocupacion }}</span>
        <input v-else v-model="auth.persona.ocupacion" class="form-control editor-input w-60" />
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Estado Civil:</strong>
        <span v-if="!editMode">{{ auth.persona.estadoCivil }}</span>
        <input v-else v-model="auth.persona.estadoCivil" class="form-control editor-input w-60" />
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Nacionalidad:</strong>
        <span v-if="!editMode">{{ auth.persona.nacionalidad }}</span>
        <input v-else v-model="auth.persona.nacionalidad" class="form-control editor-input w-60" />
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Fecha de Nacimiento:</strong>
        <span v-if="!editMode">{{ auth.persona.fechaNacimiento }}</span>
        <input v-else v-model="auth.persona.fechaNacimiento" class="form-control editor-input w-60" />
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Email:</strong>
        <span v-if="!editMode">{{ auth.persona.email }}</span>
        <input v-else v-model="auth.persona.email" class="form-control editor-input w-60" />
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong class="me-2">Teléfono:</strong>
        <span v-if="!editMode">{{ auth.persona.telefono }}</span>
        <input v-else v-model="auth.persona.telefono" class="form-control editor-input w-60" />
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListaDatosPersona',
  props: {
    auth: Object,
    editMode: Boolean
  }
}
</script>

<style scoped>
.editor-input {
  display: block;
  width: 100%;
  padding: 0.2rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #494949;
  appearance: none;
  background-color: #eaeaea;
  background-clip: padding-box;
  border: 1px solid #c1c5c8;
  border-radius: 0.375rem;
  transition: 0.2s ease;
}
</style>

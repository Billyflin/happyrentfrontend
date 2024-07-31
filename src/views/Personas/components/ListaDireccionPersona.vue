<template>
  <div class="col-lg-3">
    <h5 class="mb-3">Dirección</h5>
    <ul class="list-group mb-3">
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong>Calle:</strong>
        <span v-if="!editMode">{{ auth.persona.direccion.calle }}</span>
        <input v-else v-model="auth.persona.direccion.calle" class="form-control w-75 editor-input"/>
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong>Número:</strong>
        <span v-if="!editMode">{{ auth.persona.direccion.numero }}</span>
        <input v-else v-model="auth.persona.direccion.numero" class="form-control w-75 editor-input"/>
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong>Detalle:</strong>
        <span v-if="!editMode">{{ auth.persona.direccion.detalle }}</span>
        <input v-else v-model="auth.persona.direccion.detalle" class="form-control w-75 editor-input"/>
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong>Región:</strong>
        <span v-if="!editMode">{{ auth.persona.direccion.region }}</span>
        <input v-else v-model="auth.persona.direccion.region" class="form-control w-75 editor-input"/>
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong>Ciudad:</strong>
        <span v-if="!editMode">{{ auth.persona.direccion.ciudad }}</span>
        <input v-else v-model="auth.persona.direccion.ciudad" class="form-control w-75 editor-input"/>
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong>País:</strong>
        <span v-if="!editMode">{{ auth.persona.direccion.pais }}</span>
        <input v-else v-model="auth.persona.direccion.pais" class="form-control w-75 editor-input"/>
      </li>
      <li class="list-group-item text-start d-flex justify-content-between align-items-center">
        <strong>Código Postal:</strong>
        <span v-if="!editMode">{{ auth.persona.direccion.codigoPostal }}</span>
        <input v-else v-model="auth.persona.direccion.codigoPostal" class="form-control w-75 editor-input"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListaDireccionPersona',
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

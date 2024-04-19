<script>
export default {
  name: 'ResumenStep',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="multisteps-form__title">Resumen</div>
  <div class="multisteps-form__body">
    <div class="row">
      <div class="col-12" v-if="user.persona">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nombre</h6>
          <p>{{ user.persona.nombres }} {{ user.persona.apellidoPaterno }} {{ user.persona.apellidoMaterno }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Correo</h6>
          <p>{{ user.persona.email }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Telefono</h6>
          <p>{{ user.persona.telefono }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Ocupación</h6>
          <p>{{ user.persona.ocupacion }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Estado Civil</h6>
          <p>{{ user.persona.estadoCivil }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nacionalidad</h6>
          <p>{{ user.persona.nacionalidad }}</p>
        </div>
      </div>
    </div>
    <div class="row" v-if="user.empresa">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nombre Empresa</h6>
          <p>{{ user.empresa.nombre }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Rut Empresa</h6>
          <p>{{ user.empresa.rut }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Giro</h6>
          <p>{{ user.empresa.giro }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Dirección</h6>
          <p>{{ user.empresa.direccion.calle }} {{ user.empresa.direccion.numero }},
            {{ user.empresa.direccion.region }}</p>
        </div>
      </div>
      <div class="multisteps-form__title">Resumen Representante Legal</div>
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Telefono</h6>
          <p>{{ user.empresa.telefono }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Email</h6>
          <p>{{ user.empresa.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
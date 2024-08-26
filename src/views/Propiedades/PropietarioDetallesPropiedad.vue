<template>
  <div v-if="propietario" class="card shadow-lg border-light">
    <div class="card-header pb-1">
      <h6 class="mb-0">{{ title }}</h6>
    </div>
    <div class="card-body pt-0 text-sm">
      <h6 class="card-title">Información General</h6>
      <dl class="row">
        <template v-if="propietario.type">
          <dt class="col-sm-4">Tipo:</dt>
          <dd class="col-sm-8 text-capitalize">{{ propietario.type }}</dd>
        </template>

        <template v-if="propietario.nombre">
          <dt class="col-sm-4">Nombre:</dt>
          <dd class="col-sm-8">
            {{ propietario.nombre }} {{ propietario.apellidoPaterno }}
            {{ propietario.apellidoMaterno }}
          </dd>
        </template>
        <template v-if="propietario.rut">
          <dt class="col-sm-4">RUT:</dt>
          <dd class="col-sm-8">{{ propietario.rut }}</dd>
        </template>

        <template v-if="propietario.ocupacion">
          <dt class="col-sm-4">Ocupación:</dt>
          <dd class="col-sm-8">{{ propietario.ocupacion }}</dd>
        </template>

        <template v-if="propietario.estadoCivil">
          <dt class="col-sm-4">Estado Civil:</dt>
          <dd class="col-sm-8">{{ propietario.estadoCivil }}</dd>
        </template>

        <template v-if="propietario.nacionalidad">
          <dt class="col-sm-4">Nacionalidad:</dt>
          <dd class="col-sm-8">{{ propietario.nacionalidad }}</dd>
        </template>

        <template v-if="propietario.fechaNacimiento">
          <dt class="col-sm-4">Fecha de Nacimiento:</dt>
          <dd class="col-sm-8">{{ new Date(propietario.fechaNacimiento).toLocaleDateString() }}</dd>
        </template>

        <template v-if="propietario.razonSocial">
          <dt class="col-sm-4">Razón Social:</dt>
          <dd class="col-sm-8">{{ propietario.razonSocial }}</dd>
        </template>

        <template v-if="propietario.giro">
          <dt class="col-sm-4">Giro:</dt>
          <dd class="col-sm-8">{{ propietario.giro }}</dd>
        </template>
      </dl>

      <h6 v-if="propietario.razonSocial" class="card-title">Representante</h6>
      <dl v-if="propietario.razonSocial" class="row">
        <template v-if="propietario.representante">
          <dt class="col-sm-4">Nombre:</dt>
          <dd class="col-sm-8">
            {{ propietario.representante.tratamiento }} {{ propietario.representante.nombre }}
            {{ propietario.representante.apellidoPaterno }}
            {{ propietario.representante.apellidoMaterno }}
          </dd>

          <template v-if="propietario.representante.ocupacion">
            <dt class="col-sm-4">Ocupación:</dt>
            <dd class="col-sm-8">{{ propietario.representante.ocupacion }}</dd>
          </template>

          <template v-if="propietario.representante.estadoCivil">
            <dt class="col-sm-4">Estado Civil:</dt>
            <dd class="col-sm-8">{{ propietario.representante.estadoCivil }}</dd>
          </template>

          <template v-if="propietario.representante.nacionalidad">
            <dt class="col-sm-4">Nacionalidad:</dt>
            <dd class="col-sm-8">{{ propietario.representante.nacionalidad }}</dd>
          </template>

          <template v-if="propietario.representante.fechaNacimiento">
            <dt class="col-sm-4">Fecha de Nacimiento:</dt>
            <dd class="col-sm-8">
              {{ new Date(propietario.representante.fechaNacimiento).toLocaleDateString() }}
            </dd>
          </template>
        </template>
      </dl>

      <h6 class="card-title">Dirección</h6>
      <dl class="row">
        <template v-if="propietario.direccion">
          <dt class="col-sm-4">Calle:</dt>
          <dd class="col-sm-8">
            {{ propietario.direccion.calle }} {{ propietario.direccion.numero }}
            {{ propietario.direccion.detalle }}
          </dd>

          <dt class="col-sm-4">Ciudad:</dt>
          <dd class="col-sm-8">{{ propietario.direccion.ciudad }}</dd>

          <dt class="col-sm-4">Región:</dt>
          <dd class="col-sm-8">{{ propietario.direccion.region }}</dd>

          <dt class="col-sm-4">Código Postal:</dt>
          <dd class="col-sm-8">{{ propietario.direccion.codigoPostal }}</dd>
        </template>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropietarioDetallesPropiedad',
  props: {
    propietario: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: 'Detalles del Propietario'
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-4">
      <img
        v-if="imagenPortadaPreview"
        :src="imagenPortadaPreview"
        alt="portada"
        class="w-100 border-radius-lg mb-4 shadow-lg mx-auto"
      />
    </div>
    <div class="col-md-4">
      <p><strong>Dirección:</strong> {{ propiedad.direccion.calle }} {{ propiedad.direccion.numero }}</p>
      <p><strong>Comuna:</strong> {{ propiedad.direccion.ciudad }}</p>
      <p><strong>Región:</strong> {{ propiedad.direccion.region }}</p>
      <p><strong>País:</strong> {{ propiedad.direccion.pais }}</p>
      <p><strong>Tipo:</strong> {{ propiedad.type }}</p>
      <p><strong>Rol:</strong> {{ propiedad.rol }}</p>
    </div>
    <div class="col-md-4">
      <div v-if="propietarioExistente">
        <div v-if="propietarioExistente.type === 'persona'" class=" col ">

          <!--          mostrar datos del propietario seleccionado-->
          <div v-if="propietarioExistente.rut" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Rut</h6>
            <p>{{ propietarioExistente.rut }}</p>
          </div>
          <div v-if="propietarioExistente.type" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Tipo</h6>
            <p class="text-capitalize">{{ propietarioExistente.type }}</p>
          </div>
          <div v-if="propietarioExistente.nombre" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Nombre</h6>
            <p class="text-bolder">{{ propietarioExistente.nombre }}
              {{ propietarioExistente.apellidoPaterno }} {{ propietarioExistente.apellidoMaterno }}</p>
          </div>
          <div v-if="propietarioExistente.email" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Correo</h6>
            <p>{{ propietarioExistente.email }}</p>
          </div>
          <div v-if="propietarioExistente.telefono" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Telefono</h6>
            <p>{{ propietarioExistente.telefono }}</p>
          </div>
          <div v-if="propietarioExistente.ocupacion" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Ocupación</h6>
            <p class="text-capitalize">{{ propietarioExistente.ocupacion }}</p>
          </div>
          <div v-if="propietarioExistente.estadoCivil"
               class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Estado Civil</h6>
            <p class="text-capitalize">{{ propietarioExistente.estadoCivil }}</p>
          </div>
          <div v-if="propietarioExistente.nacionalidad"
               class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Nacionalidad</h6>
            <p class="text-capitalize">{{ propietarioExistente.nacionalidad }}</p>

          </div>
          <div v-if="propietarioExistente" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Dirección</h6>
            <p class="text-capitalize">{{ propietarioExistente.calle }},
              {{ propietarioExistente.numero }}, {{ propietarioExistente.detalle }},
              {{ propietarioExistente.ciudad }},
              {{ propietarioExistente.region }}, {{ propietarioExistente.pais }}
            </p>
          </div>
        </div>
        <div v-else-if="propietarioExistente.type === 'empresa'" class="col">
          <!--          mostrar datos de la empresa seleccionada-->
          <div v-if="propietarioExistente.rut" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Rut</h6>
            <p>{{ propietarioExistente.rut }}</p>
          </div>
          <div v-if="propietarioExistente.type" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Tipo</h6>
            <p class="text-capitalize">{{ propietarioExistente.type }}</p>
          </div>
          <div v-if="propietarioExistente.nombre" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Nombre</h6>
            <p class="text-capitalize text-bold">{{ propietarioExistente.nombre }}</p>
          </div>
          <div v-if="propietarioExistente.email" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Correo</h6>
            <p>{{ propietarioExistente.email }}</p>
          </div>
          <div v-if="propietarioExistente.telefono" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Telefono</h6>
            <p>{{ propietarioExistente.telefono }}</p>
          </div>
          <div v-if="propietarioExistente.giro" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Giro</h6>
            <p class="text-capitalize">{{ propietarioExistente.giro }}</p>
          </div>
          <div v-if="propietarioExistente.razonSocial"
               class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Razón Social</h6>
            <p class="text-capitalize">{{ propietarioExistente.razonSocial }}</p>
          </div>
          <div v-if="propietarioExistente" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Dirección</h6>
            <p class="text-capitalize">{{ propietarioExistente.calle }},
              {{ propietarioExistente.numero }}, {{ propietarioExistente.detalle }},
              {{ propietarioExistente.ciudad }} ,
              {{ propietarioExistente.region }}, {{ propietarioExistente.pais }}
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmDataAddPropiedad',
  props: {
    propiedad: Object,
    propietarioExistente: Object,
    imagenPortadaPreview: String
  }
}
</script>
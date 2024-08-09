<template>
  <div class="card shadow-lg border-light">
    <div class="card-header">
      <h5 class="mb-0">Detalles de la Propiedad</h5>
    </div>
    <div class="card-body pt-0">
      <dl class="row">
        <template v-if="propiedad.type">
          <dt class="col-sm-4">Tipo de propiedad:</dt>
          <dd class="col-sm-8 text-capitalize">{{ propiedad.type }}</dd>
        </template>

        <template v-if="propiedad.habitaciones !== null">
          <dt class="col-sm-4">N° Habitaciones:</dt>
          <dd class="col-sm-8">{{ propiedad.habitaciones }}</dd>
        </template>

        <template v-if="propiedad.banios !== null">
          <dt class="col-sm-4">N° Baños:</dt>
          <dd class="col-sm-8">{{ propiedad.banios }}</dd>
        </template>

        <template v-if="propiedad.estacionamientos !== null">
          <dt class="col-sm-4">N° Estacionamientos:</dt>
          <dd class="col-sm-8">{{ propiedad.estacionamientos }}</dd>
        </template>

        <template v-if="propiedad.amoblado !== null">
          <dt class="col-sm-4">Amoblado:</dt>
          <dd class="col-sm-8">{{ propiedad.amoblado ? 'Sí' : 'No' }}</dd>
        </template>

        <template v-if="propiedad.numeroDePisos !== null">
          <dt class="col-sm-4">N° Pisos:</dt>
          <dd class="col-sm-8">{{ propiedad.numeroDePisos }}</dd>
        </template>

        <template v-if="propiedad.piscina !== null">
          <dt class="col-sm-4">Piscina:</dt>
          <dd class="col-sm-8">{{ propiedad.piscina ? 'Sí' : 'No' }}</dd>
        </template>

        <template v-if="propiedad.jardines !== null">
          <dt class="col-sm-4">Jardines:</dt>
          <dd class="col-sm-8">{{ propiedad.jardines ? 'Sí' : 'No' }}</dd>
        </template>

        <template v-if="propiedad.patio !== null">
          <dt class="col-sm-4">Patio:</dt>
          <dd class="col-sm-8">{{ propiedad.patio ? 'Sí' : 'No' }}</dd>
        </template>

        <template v-if="propiedad.gastosComunes !== null">
          <dt class="col-sm-4">Gastos Comunes:</dt>
          <dd class="col-sm-8">{{ propiedad.gastosComunes ? 'Sí' : 'No' }}</dd>
        </template>

        <template v-if="propiedad.contribuciones !== null">
          <dt class="col-sm-4">Contribuciones:</dt>
          <dd class="col-sm-8">{{ propiedad.contribuciones ? 'Sí' : 'No' }}</dd>
        </template>

        <template v-if="propiedad.aseo !== null">
          <dt class="col-sm-4">Aseo:</dt>
          <dd class="col-sm-8">{{ propiedad.aseo ? 'Sí' : 'No' }}</dd>
        </template>

        <template v-if="propiedad.metrosCuadradosDeTerreno">
          <dt class="col-sm-4">Metros Cuadrados de Terreno:</dt>
          <dd class="col-sm-8">{{ propiedad.metrosCuadradosDeTerreno }}</dd>
        </template>

        <template v-if="propiedad.metrosCuadradosDeConstruccion">
          <dt class="col-sm-4">Metros Cuadrados de Construcción:</dt>
          <dd class="col-sm-8">{{ propiedad.metrosCuadradosDeConstruccion }}</dd>
        </template>

        <template v-if="propiedad.antiguedad !== null">
          <dt class="col-sm-4">Antigüedad:</dt>
          <dd class="col-sm-8">{{ propiedad.antiguedad }} años</dd>
        </template>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetallesDePropiedad',
  props: {
    propiedad: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

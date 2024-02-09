<template>
  <div class="card" data-animation="true">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a class="d-block blur-shadow-image">
        <img
          :src="'data:image/png;base64,' + img"
          alt="img-blur-shadow"
          class="img-fluid shadow border-radius-lg"
        />
      </a>
      <div
        class="colored-shadow"
        :style="`background-image: url('data:image/png;base64,' + img)`"
      ></div>
    </div>
    <div class="card-body text-center">
      <div class="d-flex mt-n6 mx-auto">
        <a
          class="btn btn-link text-primary ms-auto border-0"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Refresh"
        >
          <i class="material-icons text-lg">refresh</i>
        </a>
        <button
          class="btn btn-link text-info me-auto border-0"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Edit"
        >
            <i class="material-icons text-lg">edit</i>
        </button>
      </div>
      <h5 class="font-weight-normal mt-3">
        <a href="javascript:;">{{propiedad.direccion.calle +' '+ propiedad.direccion.numero}}</a>
      </h5>
      <p class="mb-0">
        {{propiedad.propietario.persona.nombreCompleto }}
      </p>
    </div>
    <hr class="dark horizontal my-0" />
    <div class="card-footer d-flex">
      <p class="font-weight-normal my-auto">{{propiedad.fechaCreacion }}</p>
      <i class="material-icons position-relative ms-auto text-lg me-1 my-auto"
      >place</i
      >
      <p class="text-sm my-auto">{{propiedad.direccion.ciudad + ', ' + propiedad.direccion.pais }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingCard',
  props: {
    img: {
      type: String,
      required: true
    },
   propiedad: {
      type: Object,
      required: true
    }
  }
}
</script>

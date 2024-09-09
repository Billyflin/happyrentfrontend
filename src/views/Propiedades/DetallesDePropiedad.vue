<template>
  <div class="card shadow-lg border-light">
    <div class="card-header pb-0">
      <h6>Detalles de la Propiedad</h6>
    </div>
    <div class="card-body pt-0">
      <div class="row" v-if="propiedad.rol">
        <template v-if="propiedad.rol">
          <div class="col-lg-4 col-sm-12 mb-3">
            <p class="text-sm text-dark mb-1">Rol de la Propiedad:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">tag</span>
              </dt>
              <dd class="text-sm text-dark text-bold text-capitalize mb-0">
                {{ propiedad.rol }}
              </dd>
            </div>
          </div>
        </template>



      </div>

      <div class="row">
        <template v-if="propiedad.type">
          <div class="col-lg-4 col-sm-12 mb-3">
            <p class="text-sm text-dark mb-1">Tipo de Propiedad:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">home</span>
              </dt>
              <dd class="text-sm text-dark text-bold text-capitalize mb-0">
                {{ propiedad.type }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.habitaciones">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">N° Habitaciones:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">king_bed</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.habitaciones }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.banios">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">N° Baños:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">bathtub</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.banios }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.estacionamientos">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">N° Estacionamientos:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">directions_car</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.estacionamientos }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.amoblado">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Amoblado:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">chair</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.amoblado ? 'Sí' : 'No' }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.numeroDePisos">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">N° Pisos:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">layers</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.numeroDePisos }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.piscina ">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Piscina:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">pool</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.piscina ? 'Sí' : 'No' }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.jardines">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Jardines:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">landscape</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.jardines ? 'Sí' : 'No' }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.patio">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Patio:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">deck</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.patio ? 'Sí' : 'No' }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.gastosComunes">
          <div class="col-lg-4 col-sm-12 col mb-3">
            <p class="text-sm text-dark mb-1">Gastos Comunes:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">account_balance_wallet</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.gastosComunes ? 'Sí' : 'No' }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.contribuciones">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Contribuciones:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">paid</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.contribuciones ? 'Sí' : 'No' }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.aseo ">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Aseo:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">cleaning_services</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.aseo ? 'Sí' : 'No' }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.metrosCuadradosDeTerreno ">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Metros Cuadrados de Terreno:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">background_grid_small</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.metrosCuadradosDeTerreno }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.metrosCuadradosDeConstruccion ">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Metros Cuadrados de Construcción:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">crop_square</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.metrosCuadradosDeConstruccion }}
              </dd>
            </div>
          </div>
        </template>

        <template v-if="propiedad.antiguedad ">
          <div class="col-lg-4 col-sm-12  mb-3">
            <p class="text-sm text-dark mb-1">Antigüedad:</p>
            <div class="d-flex align-items-center">
              <dt class="text-sm me-2">
                <span class="material-symbols-outlined text-dark align-middle">history</span>
              </dt>
              <dd class="text-sm text-dark text-bold mb-0">
                {{ propiedad.antiguedad }} años
              </dd>
            </div>
          </div>
        </template>

      </div>
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

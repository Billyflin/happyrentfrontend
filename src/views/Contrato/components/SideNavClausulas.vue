<template>
  <router-link class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
               to="/Propiedades">
    <span class="material-symbols-outlined mx-1"> arrow_back </span> Volver
  </router-link>
  <div class="card position-sticky top-1 mt-4">
    <ul class="nav flex-column bg-white border-radius-lg p-3">
      <li class="nav-item">
        <a :data-scroll="'#Comparecencia'" class="nav-link align-items-center text-dark d-flex" href="#Comparecencia">
          <i class="material-symbols-outlined text-xl me-2">contract_edit</i>
          <span class="text-xs">Comparecencia</span>
        </a>
      </li>

      <!-- Clausulas -->
      <li v-for="(clausula, i) in clausulas" :key="i" class="nav-item pt-2">
        <a :data-scroll="'#' + clausula.id" :href="'#' + clausula.id"
           class="nav-link nav-link align-items-center text-dark d-flex">
          <i class="material-symbols-outlined text-xl me-2">{{ iconos[i] }}</i>
          <span class="text-xs text-capitalize">{{ clausula.nombre }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default  {
  name: 'SideNav',
  data() {
    return {
      iconos: [
        'home', // Propiedad
        'attach_money', // Renta
        'autorenew', // Reajuste
        'shopping_cart', // Otros pagos
        'hourglass_empty', // Plazo
        'money_off', // Multa en caso de mora
        'visibility', // Visitas al inmueble
        'highlight_off', // Terminación anticipada del contrato
        'build', // Mejoras
        'settings', // Mantención del inmueble
        'report', // Robos y perjuicios
        'security', // Garantía de arriendo
        'flight_land', // Entrega y restitución del inmueble
        'gavel', // Arbitraje
        'group', // Codeudor solidario
        'local_atm', // Comisión
        'list', // Otras condiciones
        'place' // Domicilio
      ],
      clausulas: [
        { id: 'Clausula1', nombre: 'propiedad' },
        { id: 'Clausula2', nombre: 'renta' },
        { id: 'Clausula3', nombre: 'reajuste' },
        { id: 'Clausula4', nombre: 'otros pagos' },
        { id: 'Clausula5', nombre: 'plazo' },
        { id: 'Clausula6', nombre: 'multa en caso de mora' },
        { id: 'Clausula7', nombre: 'visitas al inmueble' },
        { id: 'Clausula8', nombre: 'terminación anticipada del contrato' },
        { id: 'Clausula9', nombre: 'mejoras' },
        { id: 'Clausula10', nombre: 'mantención del inmueble' },
        { id: 'Clausula11', nombre: 'robos y perjuicios' },
        { id: 'Clausula12', nombre: 'garantía de arriendo' },
        { id: 'Clausula13', nombre: 'entrega y restitución del inmueble' },
        { id: 'Clausula14', nombre: 'arbitraje' },
        { id: 'Clausula15', nombre: 'codeudor solidario' },
        { id: 'Clausula16', nombre: 'comisión' },
        { id: 'Clausula17', nombre: 'otras condiciones' },
        { id: 'Clausula18', nombre: 'domicilio' }
      ]

    }
  }
}
</script>

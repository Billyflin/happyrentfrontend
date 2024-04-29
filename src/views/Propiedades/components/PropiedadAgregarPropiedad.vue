<script setup>
import { ref, watchEffect } from 'vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'

const opcionsTipoPropiedad = [
  { value: 'bodega', label: 'Bodega' },
  { value: 'casa', label: 'Casa' },
  { value: 'departamento', label: 'Departamento' },
  { value: 'local', label: 'Local' },
  { value: 'terreno', label: 'Terreno', selected: true },
  { value: 'oficina', label: 'Oficina' },
  { value: 'estacionamiento', label: 'Estacionamiento' }
]

const tiposPropiedad = {
  casa: {
    numeroDePisos: null,
    numeroDeHabitaciones: null,
    numeroDeBanios: null,
    estacionamientos: null,
    piscina: null,
    jardines: null,
    patio: null,
    metrosCuadradosDeTerreno: null,
    metrosCuadradosDeConstruccion: null,
    antiguedad: null
  },
  terreno: {
    area: null,
    tipoTerreno: null,
    usoSuelo: null,
    topografia: null,
    servicios: null,
    formaTerreno: null,
    frente: null
  },
  departamento: {
    type: 'departamento',
    piso: null,
    banios: null,
    estacionamientos: null,
    habitaciones: null,
    bodegas: null,
    metrosCuadrados: null,
    descripcion: null
  },
  bodega: {
    type: 'bodega',
    piso: null,
    numero: null,
    descripcion: null
  },
  estacionamiento: {
    type: 'estacionamiento',
    piso: null,
    numero: null,
    descripcion: null
  },
  local: {
    type: 'local',
    piso: null,
    numero: null,
    descripcion: null
  },
  oficina: {
    type: 'oficina',
    piso: null,
    banios: null,
    cocinas: null,
    numeroDeOficinas: null,
    numeroDeComedores: null,
    numeroDeEstacionamientos: null,
    descripcion: null
  }
}

const propiedad = ref({
  type: 'terreno',
  // campos comunes a todas las propiedades
  direccion: {
    calle: 'string',
    numero: 0,
    comuna: 'string',
    region: 'sadasdasd',
    ciudad: 'string',
    pais: 'sdsadasd',
    codigoPostal: 'string'
  },
  imagenPortada: {
    contenido: 'string',
    nombre: 'string'
  },
  // inicialmente, asignamos los campos de 'terreno'
  ...tiposPropiedad.terreno
})

watchEffect(() => {
  // Primero, obtenemos las propiedades del tipo seleccionado
  const propiedadesTipo = tiposPropiedad[propiedad.value.type]

  // Luego, eliminamos las propiedades antiguas del objeto 'propiedad'
  for (const key in propiedad.value) {
    if (!(key in propiedadesTipo) && key !== 'type' && key !== 'direccion' && key !== 'imagenPortada') {
      delete propiedad.value[key]
    }
  }

  // Finalmente, agregamos las nuevas propiedades al objeto 'propiedad'
  for (const key in propiedadesTipo) {
    if (!(key in propiedad.value)) {
      propiedad.value[key] = propiedadesTipo[key]
    }
  }
})


const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0
  }
}
</script>


<template>
  <div id="Agregar Propiedad" class="card mt-4">
    <div class="card-header">
      <h4>Agregar Propiedad</h4>
    </div>
    <div class="card-body pt-0">
      <p>{{ propiedad }}</p>
      <div class="row">
        <div class="col-4 mb-4">
          <material-choices id="tipo_propiedad"
                            :options="opcionsTipoPropiedad"
                            v-model:value-choice="propiedad.type"
                            name="TipoPropiedad" label="Tipo Propiedad" :serach-enabled="false" />
        </div>
      </div>
      <div class="row" v-if="propiedad.type === 'casa'">
        <div class="col-3">
          <material-input
            id="numBanos"
            type="number"
            is-required
            variant="static"
            label="numero de pisos"
            placeholder="1"
            v-model="propiedad.numeroDePisos"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="numPiezas"
            type="number"
            is-required
            variant="static"
            label="numero de piezas"
            placeholder="1"
            v-model="propiedad.numeroDeHabitaciones"
            @input="validateInput"
          />
        </div>
      </div>
      <div class="row" v-if="propiedad.type === 'terreno'">
        <div class="col-3">
          <material-input
            id="area"
            type="number"
            is-required
            variant="static"
            label="Area"
            placeholder="1"
            v-model="propiedad.area"
            @input="validateInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>
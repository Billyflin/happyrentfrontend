<template>

  <div class="row m-md-1 " >
    <span class="badge badge-danger">Disclaimer, hay que hacer click en todos los componentes de seleccion, se arreglará en versiones posteriores</span>
  </div>
  <div class="row m-md-3" >
    <div class="col-4 mt-4">
      <material-input
          id="calleDirection"
          variant="static"
          label="Calle"
          v-model="direccion.calle"
          placeholder="Calle"
      />
    </div>
    <div class="col-1 mt-4">
      <material-input
          id="numeroDirection"
          type="number"
          variant="static"
          label="Número"
          v-model="direccion.numero"
          placeholder="n°"
      />
    </div>
    <div class="col-2 mt-4">
      <material-input
          id="postal"
          type="number"
          variant="static"
          v-model="direccion.codigoPostal"
          label="Postal"
          placeholder="Postal"
      />
    </div>
  </div>
 <div class="row mt-4 m-md-3">
    <ChoicesComponent class="col-3"
        ruta="/pais"
        nombre="nombreEsp"
        :default="defaultPais"
        @choice-changed="handleChoiceChanged"
    />
    <ChoicesComponent class="col-4 col-5"
        ruta="/region/"
        :id="numeroRegion"
        nombre="nombre"
        @choice-changed="handleRegionChanged"
    />
    <ChoicesComponent class="col-4"
        ruta="/ciudad/"
        :id="numeroCiudad"
        nombre="nombre"
        @choice-changed="handleCiudadChanged"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ChoicesComponent from './MaterialChoices.vue';
import MaterialInput from "@/components/MaterialInput.vue";

export default {
  components: {
    MaterialInput,
    ChoicesComponent
  },
  data() {
    return {
      direccion: {
        calle: '',
        numero: '',
        codigoPostal: '',
        pais:'',
        region: '',
        ciudad: '',
      },
      defaultPais:{
        "id": 38,
        "nombreEsp": "Chile",
        "nombreIng": "Chile",
        "alpha2": "CH ",
        "alpha3": "CHI",
        "codigoNumero": "+56"
      },
      numeroRegion: null,
      numeroCiudad: null,
      nombrePais: null,
      nombreRegion: null,
      nombreCiudad: null,
    }
  },
  methods: {
    handleChoiceChanged(newChoice) {
      console.log('El usuario seleccionó: ', newChoice)
      this.direccion.pais = newChoice.nombreEsp;
      this.numeroRegion = newChoice.id;
    },
    handleRegionChanged(newChoice) {
      console.log('El usuario seleccionó: ', newChoice)
      this.direccion.region = newChoice.nombre;
      this.numeroCiudad = newChoice.numero;
    },
    handleCiudadChanged(newChoice) {
      console.log('El usuario seleccionó: ', newChoice)
      this.direccion.ciudad = newChoice.nombre;
      this.$emit("update-direccion", this.direccion);
    }
  }
}
</script>

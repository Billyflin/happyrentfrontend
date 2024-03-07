<template>

  <div class="row">
    <div class="col-3 mt-4">
      <material-input
          id="calleDirectionArrendatario"
          variant="static"
          label="Calle"
          v-model="direccion.calle"
          placeholder="Calle"
      />
    </div>
    <div class="col-1 mt-4">
      <material-input
          id="numeroDirectionArrendatario"
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
          v-model="direccion.postal"
          label="Postal"
          placeholder="Postal"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-sm-2 col-2">
      <MaterialChoices
          id="choices-pais"
          name="choices-pais"
          label="Pais"
          :options="paisOptions"
          v-model:model-value="selectedPais"
          :disabled="true"
      />
    </div>
    <MaterialChoices
        id="choices-region"
        name="choices-region"
        label="Region"
        :options="regionOptions"
        v-model="selectedRegion"
    />
    <MaterialChoices
        id="choices-ciudad"
        name="choices-ciudad"
        label="Ciudad"
        :options="ciudadOptions"
        v-model="selectedCiudad"
    />

  </div>

</template>
<script setup>
import MaterialChoices from "@/components/MaterialChoices.vue";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import MaterialInput from "@/components/MaterialInput.vue";

const selectedCiudad = ref("");
const selectedRegion = ref("");
const selectedPais = ref("");
const paisOptions = ref([{
  value: "Chile",
  text: "Chile"
}])
const regionOptions = ref();
const ciudadOptions = ref();
const direccion = ref({
  calle: "",
  numero: "",
  postal: "",
});
const loginHandler = () => {
  console.log(selectedCiudad.value+selectedRegion.value+selectedPais.value)
};
//
watch(selectedRegion, (newVal) => {
  if (newVal) {
    console.log(newVal);
    getCiudades(newVal.value);
    console.log(newVal.value);
  }
});
const getRegiones = async (idPais) => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/region/${idPais}`);
  regionOptions.value = response.data.map(region => ({value: region.numero, text: region.nombre}));
};



onMounted(async () => {
  await getRegiones(38);
});


const getCiudades = async (idRegion) => {
  console.log(idRegion);
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/ciudad/${idRegion}`);
  console.log(response.data);
  ciudadOptions.value = response.data.map(ciudad => ({value: ciudad.nombre, text: ciudad.nombre}));
  console.log(response.data.map(ciudad => ({value: ciudad.nombre, text: ciudad.nombre})))
  console.log(ciudadOptions.value);
};
</script>

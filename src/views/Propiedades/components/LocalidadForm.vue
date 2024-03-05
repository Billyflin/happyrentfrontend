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
              v-model="selectedPais"
          />
        </div>
        <div class="col-sm-4 col-4">
          <MaterialChoices
              id="choices-region"
              name="choices-region"
              label="Region"
              :options="regionOptions"
              v-model="selectedRegion"
          />
        </div>
        <div class="col-sm-6 col-6">
          <MaterialChoices
              id="choices-ciudad"
              name="choices-ciudad"
              label="Ciudad"
              :options="ciudadOptions"
              v-model="selectedCiudad"
          />
        </div>

      </div>

</template>
<script setup>
import MaterialChoices from "@/components/MaterialChoices.vue";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import MaterialInput from "@/components/MaterialInput.vue";

const text = ref("");
const selectedCiudad = ref("");
const selectedPais = ref("");
const selectedRegion = ref("");
const paisOptions = ref([])
const regionOptions = ref([]);
const ciudadOptions = ref([]);
const direccion = ref({
  calle: "",
  numero: "",
  postal: "",
});


watch(selectedRegion, (newVal) => {
  if (newVal) {
    getCiudades(newVal);
  }
});

watch(selectedPais, (newVal) => {
  if (newVal) {
    getRegiones(newVal);
  }
});
const getCiudades = async (idRegion) => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/ciudad/${idRegion}`);
  ciudadOptions.value = response.data.map(ciudad => ({value: ciudad.nombre, text: ciudad.nombre}));

};
const getRegiones = async (idPais) => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/region/${idPais}`);
  regionOptions.value = response.data.map(region => ({value: region.numero, text: region.nombre}));
};


const getPaises = async () => {
  const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/pais`);
  paisOptions.value = response.data.map((pais) => ({value: pais.id, text: pais.nombreEsp}));
};


onMounted(async () => {
  await getPaises();
});

</script>
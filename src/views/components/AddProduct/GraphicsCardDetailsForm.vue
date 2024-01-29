<template>
  <div>
    <!-- Aquí va tu código para el nombre del producto, la marca, el precio y el stock -->
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="displayPorts"
              label="Puertos de pantalla"
              type="number"
              v-model="formStore.formData.displayPorts"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="fans"
              label="Ventiladores"
              type="number"
              v-model="formStore.formData.fans"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="hdmi"
              label="HDMI"
              type="number"
              v-model="formStore.formData.hdmi"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="length"
              label="Longitud"
              type="number"
              v-model="formStore.formData.length"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="memory"
              label="Memoria"
              type="number"
              v-model="formStore.formData.memory"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="power"
              label="Potencia"
              type="number"
              v-model="formStore.formData.power"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="speed"
              label="Velocidad"
              type="number"
              v-model="formStore.formData.speed"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="tdp"
              label="TDP"
              type="number"
              v-model="formStore.formData.tdp"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="vga"
          label="VGA"
          type="number"
          v-model="formStore.formData.vga"
          class="input-group-outline"
      />
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "@/store";
import MaterialInput from "@/components/MaterialInput.vue";

const formStore = useFormStore();
</script>

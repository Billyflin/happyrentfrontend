<template>
  <div>
    <!-- Aquí va tu código para el nombre del producto, la marca, el precio y el stock -->
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialCheckbox
              id="blockRGB"
              v-model="formStore.formData.blockRGB"
              class="input-group-outline"
          > Bloque RGB </MaterialCheckbox>
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="fanRPM"
              label="RPM del ventilador"
              type="number"
              v-model="formStore.formData.fanRPM"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="fanSize"
              label="Tamaño del ventilador"
              type="number"
              v-model="formStore.formData.fanSize"
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
    <div class="form-group mb-3">
      <MaterialInput
          id="noiseLevel"
          label="Nivel de ruido"
          type="number"
          v-model="formStore.formData.noiseLevel"
          class="input-group-outline"
      />
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "@/store";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
import MaterialInput from "@/components/MaterialInput.vue";

const formStore = useFormStore();
</script>

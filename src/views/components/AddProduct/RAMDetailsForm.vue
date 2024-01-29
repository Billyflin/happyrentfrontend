<template>
  <div>
    <!-- Aquí va tu código para el nombre del producto, la marca, el precio y el stock -->
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="casLatency"
              label="Latencia CAS"
              type="number"
              v-model="formStore.formData.casLatency"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="color"
              label="Color"
              type="text"
              v-model="formStore.formData.color"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="frequency"
              label="Frecuencia"
              type="number"
              v-model="formStore.formData.frequency"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialCheckbox
              id="heatSpreader"
              v-model="formStore.formData.heatSpreader"
              class="input-group-outline"
          > Disipador de calor </MaterialCheckbox>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="memoryType"
              label="Tipo de memoria"
              type="text"
              v-model="formStore.formData.memoryType"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="modules"
              label="Módulos"
              type="number"
              v-model="formStore.formData.modules"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="size"
              label="Tamaño"
              type="number"
              v-model="formStore.formData.size"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="voltage"
              label="Voltaje"
              type="number"
              v-model="formStore.formData.voltage"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "@/store";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
import MaterialInput from "@/components/MaterialInput.vue";

const formStore = useFormStore();
</script>

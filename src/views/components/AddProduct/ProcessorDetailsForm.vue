<template>
  <div>
    <!-- Aquí va tu código para el nombre del producto, la marca, el precio y el stock -->
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="cores"
              label="Núcleos"
              type="number"
              v-model="formStore.formData.cores"
              class="input-group-outline"
          />
        </div>
      </div>
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
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="l3Cache"
              label="Cache L3"
              type="number"
              v-model="formStore.formData.l3Cache"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="socket"
              label="Socket"
              type="text"
              v-model="formStore.formData.socket"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
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
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="threads"
              label="Hilos"
              type="number"
              v-model="formStore.formData.threads"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "@/store";
import MaterialInput from "@/components/MaterialInput.vue";

const formStore = useFormStore();
</script>

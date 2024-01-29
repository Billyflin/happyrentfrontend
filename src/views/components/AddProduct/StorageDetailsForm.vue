<template>
  <div>
    <!-- Aquí va tu código para el nombre del producto, la marca, el precio y el stock -->
    <div class="form-group mb-3">
      <MaterialInput
          id="capacity"
          label="Capacidad"
          type="number"
          v-model="formStore.formData.capacity"
          class="input-group-outline"
      />
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="formFactor"
          label="Factor de forma"
          type="text"
          v-model="formStore.formData.formFactor"
          class="input-group-outline"
      />
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="interfaceType"
          label="Tipo de interfaz"
          type="text"
          v-model="formStore.formData.interfaceType"
          class="input-group-outline"
      />
    </div>
    <div class="row">
      <div class="col text-center">
        <div class="form-group mb-3">
          <MaterialCheckbox
              id="m2"
              v-model="formStore.formData.m2"
              class="input-group-outline"
          > M.2 </MaterialCheckbox>
        </div>
      </div>
      <div class="col text-center">
        <div class="form-group mb-3">
          <MaterialCheckbox
              id="nvme"
              v-model="formStore.formData.nvme"
              class="input-group-outline"
          > NVMe </MaterialCheckbox>
        </div>
      </div>
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="rpm"
          label="RPM"
          type="number"
          v-model="formStore.formData.rpm"
          class="input-group-outline"
      />
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="size"
          label="Tamaño"
          type="number"
          v-model="formStore.formData.size"
          class="input-group-outline"
      />
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="type"
          label="Tipo"
          type="text"
          v-model="formStore.formData.type"
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

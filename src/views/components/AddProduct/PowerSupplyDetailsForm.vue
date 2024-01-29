<template>
  <div>
    <!-- Aquí va tu código para el nombre del producto, la marca, el precio y el stock -->
    <div class="form-group mb-3">
      <MaterialInput
          id="efficiency"
          label="Eficiencia"
          type="text"
          v-model="formStore.formData.efficiency"
          class="input-group-outline"
      />
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialCheckbox
              id="fanless"
              v-model="formStore.formData.fanless"
              class="input-group-outline"> Fan Less
          </MaterialCheckbox>
        </div>
        </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialCheckbox
              id="modular"
              v-model="formStore.formData.modular"
              class="input-group-outline"
          > Modular </MaterialCheckbox>
        </div>
      </div>
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
          id="power"
          label="Potencia"
          type="number"
          v-model="formStore.formData.product.power"
          class="input-group-outline"
      />
    </div>
  </div>
</template>

<script setup>
import {useFormStore} from "@/store";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
import MaterialInput from "@/components/MaterialInput.vue";

const formStore = useFormStore();
</script>

<template>
  <div class="multisteps-form__panel border-radius-xl bg-white" data-animation="FadeIn">
    <h5 class="font-weight-normal mb-0">Categoría seleccionada: {{
        formStore.categories[formStore.selectedCategory - 1].title
      }}</h5>
    <p class="mb-3 text-sm">información general del producto</p>
    <div class="form-group mb-3">
      <MaterialInput
          id="productName"
          label="Nombre del producto"
          type="text"
          v-model="formStore.formData.product.productName"
          class="input-group-outline"
      />
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="brand"
          label="Marca"
          type="text"
          v-model="formStore.formData.product.brand"
          class="input-group-outline"
      />
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="description"
          label="Descripción"
          type="text"
          v-model="formStore.formData.product.description"
          class="input-group-outline"
      />
    </div>

    <div class="form-group mb-3">
      <MaterialInput
          id="rating"
          label="Calificación"
          type="text"
          v-model="formStore.formData.product.rating"
          class="input-group-outline"
      />
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="price"
              label="Precio"
              type="number"
              v-model="formStore.formData.product.price"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="stock"
              label="Stock"
              type="number"
              class="input-group-outline"
              v-model="formStore.formData.product.stock"
          />
        </div>
      </div>
    </div>
    <CoolingDetailsForm v-if="formStore.selectedCategory === 1" />
    <GraphicsCardDetailsForm v-else-if="formStore.selectedCategory === 2" />
    <MotherboardDetailsForm v-else-if="formStore.selectedCategory === 3" />
    <PowerSupplyDetailsForm v-else-if="formStore.selectedCategory === 4" />
    <ProcessorDetailsForm v-else-if="formStore.selectedCategory === 5" />
    <RAMDetailsForm v-else-if="formStore.selectedCategory === 6" />
    <StorageDetailsForm v-else-if="formStore.selectedCategory === 7" />

    <div class="mt-4 button-row d-flex">
      <button
          class="mb-0 btn bg-gradient-light js-btn-prev"
          type="button"
          title="Prev"
          @click="formStore.prevStep();"
      >
        Prev
      </button>
      <button
          class="mb-0 btn bg-gradient-dark ms-auto js-btn-next"
          type="button"
          title="Next"
          @click="formStore.nextStep()"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script setup>
import CoolingDetailsForm from './CoolingDetailsForm.vue';
import MotherboardDetailsForm from './MotherboardDetailsForm.vue';
import PowerSupplyDetailsForm from './PowerSupplyDetailsForm.vue';
import ProcessorDetailsForm from './ProcessorDetailsForm.vue';
import RAMDetailsForm from './RAMDetailsForm.vue';
import GraphicsCardDetailsForm from './GraphicsCardDetailsForm.vue';
import StorageDetailsForm from "@/views/components/AddProduct/StorageDetailsForm.vue";
import {useFormStore} from "@/store";
import MaterialInput from "@/components/MaterialInput.vue";

const formStore = useFormStore();
</script>

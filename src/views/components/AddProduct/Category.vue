<template>
  <div
      class="pt-3 bg-white multisteps-form__panel border-radius-xl"
      data-animation="FadeIn"
  >
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Seleccione su Categoría</h5>
        <p>
          Por favor, elige la categoría del producto que quieres ingresar.
        </p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row justify-content-center">
        <div class="col-sm-3" v-for="(category, index) in formStore.categories" :key="index">
          <input :id="'btncheck' + index" type="radio" class="btn-check" v-model="formStore.selectedCategory"
                 :value="category.id" @change="updateCategory(category)"/>
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'btncheck' + index">
            <i class="material-icons">{{ category.icon }}</i>
          </label>
          <h6 class="text-center">{{ category.title }}</h6>
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button
            class="mb-0 btn bg-gradient-dark ms-auto js-btn-next"
            type="button"
            title="Next"
            @click="formStore.nextStep"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useFormStore } from "@/store";

const formStore = useFormStore();
const selectedCategory = ref(null);

const updateCategory = (category) => {
  // Cuando cambia la categoría seleccionada, restablecemos formData
  formStore.formData = {
    product: {
      category: {
        categoryId: category.id,
        categoryName: category.name
      }
    }
  };
};

watch(selectedCategory, (newVal) => {
  updateCategory(newVal);
});

</script>

<style scoped>
.btn-check:not(:checked) + label i {
  color: #4caf50; /* Color verde de Bootstrap 'success' */
}

/* Estilo del ícono cuando el botón está seleccionado */
.btn-check:checked + label i {
  color: #fff; /* Color blanco */
}
/* Estilo del botón cuando no está seleccionado */
.btn-check:not(:checked) + label {
  background-color: transparent; /* Color de fondo transparente */
  color: inherit; /* Color del texto heredado */
}

/* Estilo del botón cuando se pasa el mouse por encima */
.btn-check:not(:checked):hover + label {
  background-color: #ddd; /* Color de fondo gris claro */
  color: inherit; /* Color del texto heredado */
}

/* Estilo del botón cuando está seleccionado */
.btn-check:checked + label {
  background-color:  #4caf50 ; /* Color de fondo verde */
  color: white; /* Color del texto blanco */
}

</style>
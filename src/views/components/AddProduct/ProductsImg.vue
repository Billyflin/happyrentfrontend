<template>
  <div class="container" v-if="formStore.activeStep === 2">
    <h5 class="font-weight-bolder mb-0">Product Images</h5>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="col-12">
          <label class="form-control mb-0">Product images</label>
          <div ref="productImg" class="form-control border dropzone"></div>
        </div>
      </div>
    </div>
    <div class="mt-4 button-row d-flex">
      <button
          class="mb-0 btn bg-gradient-light js-btn-prev"
          type="button"
          title="Prev"
          @click="formStore.prevStep();"
      >
        Prev
      </button>
      <button class="mb-0 btn bg-gradient-success ms-auto js-btn-next"
              type="button"
              title="Guardar Producto" @click="updateProduct">Actualizar Producto
      </button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useFormStore} from "@/store";
import Dropzone from "dropzone";

const formStore = useFormStore();
let productImg = ref(null);

onMounted(() => {
  if (formStore.activeStep === 2) {
    let myDropzone = new Dropzone(productImg.value, { url: "/#", autoProcessQueue: false });
    myDropzone.on("addedfile", (file) => {
      var reader = new FileReader();
      reader.onload = function(event) {
        // event.target.result contains base64 encoded image
        var base64String = event.target.result;
        // Asegúrate de que formStore.formData.product.images es un array
        if (!Array.isArray(formStore.formData.product.images)) {
          formStore.formData.product.images = [];
        }
        // Agrega la nueva imagen al array existente
        formStore.formData.product.images.push({ imageData: base64String });
      };
      reader.readAsDataURL(file);
    });
  }
});


const updateProduct = () => {
  formStore.enviarFormulario()
};
</script>
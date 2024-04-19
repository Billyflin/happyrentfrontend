<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">¿Vives en una buena zona?</h5>
        <p>Te sugeriremos esta dirección en todas las funciones que ofrece la aplicación, nuestro objetivo es ahorrarte tiempo</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row mt-4 text-start">
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="this.$parent.nextStep">
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import LocalidadForm from "@/views/Propiedades/components/LocalidadForm.vue";

export default defineComponent({
  components: {LocalidadForm},
  methods: {
    reenviar(direccion) {
      this.$emit('update-direccion', direccion);
    }
  }
})
</script>
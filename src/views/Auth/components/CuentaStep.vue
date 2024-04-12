<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl js-active position-relative" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Seleccione su tipo de cuenta</h5>
        <p> Puede seleccionar el enfoque de su cuenta, la opción empresa puede ser activada o desactivada independiente si su cuenta es propietario o corredor</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-4 row">
        <div class="col-sm-3 ms-auto">
          <input :id="'perfilSelection_Corredor_'" type="radio" class="btn-check" name="profileSelection" value="ROLE_CORREDOR" v-model="selectedRole" @change="updateAuthority">
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'perfilSelection_Corredor_'">
            <i class="material-icons">brush</i>
          </label>
          <h6>Corredor</h6>
        </div>
        <div class="col-sm-3 me-auto">
          <input :id="'perfilSelection_Propietario_'" type="radio" class="btn-check" name="profileSelection" value="ROLE_PROPIETARIO" v-model="selectedRole" @change="updateAuthority">
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'perfilSelection_Propietario_' ">
            <i class="material-icons">integration_instructions</i>
          </label>
          <h6>Propietario</h6>
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="this.$emit('next:step')">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRole: '',
      authorityDtoSet: []
    }
  },
  emits: ['next:step', 'update:authority' ],
  methods: {
    updateAuthority() {
      this.authorityDtoSet = [];
      this.authorityDtoSet = [{
        authorityName: this.selectedRole
      }];
      this.$emit('update:authority', this.authorityDtoSet);
    }
  }
}
</script>
<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl js-active position-relative"
       data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Seleccione su tipo de cuenta</h5>
        <p> Puede seleccionar el enfoque de su cuenta, la opción empresa puede ser activada o desactivada independiente
          si su cuenta es propietario o corredor</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-4 row">
        <div class="col-sm-3 ms-auto">
          <input :id="'perfilSelection_Corredor_'" v-model="selectedRole" class="btn-check" name="profileSelection"
                 type="radio" value="ROLE_CORREDOR" @change="updateAuthority">
          <label :for="'perfilSelection_Corredor_'" class="btn btn-lg btn-outline-success border-2 px-6 py-5">
            <i class="material-icons">brush</i>
          </label>
          <h6>Corredor</h6>
        </div>
        <div class="col-sm-3 me-auto">
          <input :id="'perfilSelection_Propietario_'" v-model="selectedRole" class="btn-check" name="profileSelection"
                 type="radio" value="ROLE_PROPIETARIO" @change="updateAuthority">
          <label :for="'perfilSelection_Propietario_' " class="btn btn-lg btn-outline-success border-2 px-6 py-5">
            <i class="material-icons">integration_instructions</i>
          </label>
          <h6>Propietario</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRole: ''
    }
  },
  emits: ['next:step', 'update:authority'],
  methods: {
    updateAuthority() {
      this.$emit('update:authority', this.selectedRole)
      this.$emit('next:step')
    }
  }
}
</script>
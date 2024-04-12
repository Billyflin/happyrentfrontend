<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl js-active position-relative"
       data-animation="FadeIn">
    <div class="text-center row">
      <div  v-if=" $parent.$data.user.authority[0].authorityName === 'ROLE_PROPIETARIO'" class="mx-auto col-10">
        <h5 class="font-weight-normal">Empecemos con información básica</h5>
        <p>Dejanos saber de tí.</p>
      </div>
      <div v-if=" $parent.$data.user.authority[0].authorityName === 'ROLE_CORREDOR'" class="mx-auto col-10">
        <h5 class="font-weight-normal">Seleccione su tipo de cuenta</h5>
        <p> Puede seleccionar el enfoque de su cuenta, la opción empresa puede ser activada o desactivada independiente
          si su cuenta es propietario o corredor</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div v-if=" $parent.$data.user.authority[0].authorityName === 'ROLE_PROPIETARIO'">
        <h1>Propietario</h1>
      </div>
      <div v-if=" $parent.$data.user.authority[0].authorityName === 'ROLE_CORREDOR'">
        <h1>Corredora</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PerfilStep',
  data() {
    return {}
  }

}

</script>
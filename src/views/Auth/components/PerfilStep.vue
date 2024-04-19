<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl js-active position-relative"
       data-animation="FadeIn">
    <div class="text-center row">
      <div  v-if=" $parent.$data.user.authority[0].authorityName === 'ROLE_PROPIETARIO'" class="mx-auto col-10">
        <h5 class="font-weight-normal">Empecemos con información básica</h5>
        <p>Dejanos saber de tí.</p>
      </div>
      <div v-if=" $parent.$data.user.authority[0].authorityName === 'ROLE_CORREDOR'" class="mx-auto col-10">
        <h5 class="font-weight-normal">Empresa</h5>
      </div>

    </div>
    <div class="multisteps-form__content">
      <div v-if=" $parent.$data.user.authority[0].authorityName === 'ROLE_PROPIETARIO'">
        <PropietarioForm @update:persona="$emit('update:persona',$event)" />
      </div>
      <div v-if=" $parent.$data.user.authority[0].authorityName === 'ROLE_CORREDOR'">
        <CorredoraForm @update:empresa="$emit('update:empresa',$event)"/>
      </div>
    </div>
  </div>
</template>
<script>
import PropietarioForm from '@/views/Auth/components/PropietarioForm.vue'
import CorredoraForm from '@/views/Auth/components/CorredoraForm.vue'
import RepresentanteStep from '@/views/Auth/components/RepresentanteStep.vue'
export default {
  name: 'PerfilStep',
  components: { RepresentanteStep, CorredoraForm, PropietarioForm },
  data() {
    return {

    }
  }

}

</script>
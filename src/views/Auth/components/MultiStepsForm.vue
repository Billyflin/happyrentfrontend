<template>
  <div class="mb-5 multisteps-form">
    <div class="mx-auto my-5 col-12 col-lg-8">
      <div class="card">
        <div
          class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
        >
          <!--progress bar-->
          <MultiStepsFormProgress
            :active-step="activeStep"
            :steps="steps"
            @update:active-step="activeStep = $event"
          />

        </div>
        <div class="card-body">
          <!--single form panel-->
          <component
            :is="steps[activeStep].component"
            v-if="activeStep < steps.length"
            @update:authority="user.authority = $event;console.log(this.user)"
            @update:direccion="user.direccion = $event;console.log(this.user)"
            @next:step="nextStep"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultiStepsFormProgress from './MultiStepsFormProgress.vue'
import Cuenta from './Cuenta.vue'
import Perfil from './Perfil.vue'
import DatosBanca from './DatosBanca.vue'
// import other form panel components

export default {
  name: 'MultiStepsForm',
  components: {
    MultiStepsFormProgress,
    Cuenta,
    Perfil,
    DatosBanca
    // register other form panel components
  },
  data() {
    return {
      activeStep: 0,
      user: {
        authority: [
          {
            authorityName: 'ROLE_PROPIETARIO'
          }
        ]
      },
      steps: [
        { title: 'Cuenta', component: 'Cuenta' },
        { title: 'Perfil', component: 'Perfil' },
        { title: 'Datos Bancarios', component: 'DatosBanca' }
      ]
    }
  },
  methods: {
    nextStep() {
      this.activeStep++
    }
  }
}
</script>
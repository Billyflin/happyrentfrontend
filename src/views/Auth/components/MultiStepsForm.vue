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
            @update:user="user = $event;console.log(this.user)"
            @next:step="nextStep"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultiStepsFormProgress from './MultiStepsFormProgress.vue'
import CuentaStep from './CuentaStep.vue'
import PerfilStep from './PerfilStep.vue'
import DatosBancaStep from './DatosBancaStep.vue'
import RepresentanteStep from './RepresentanteStep.vue'

/**
 * import other form panel components
 */

export default {
  name: 'MultiStepsForm',
  components: {
    MultiStepsFormProgress,
    CuentaStep,
    PerfilStep,
    RepresentanteStep,
    DatosBancaStep
  },
  emits: ['update:user', 'update:active-step', 'next:step', 'update:authority', 'update:direccion'  ],
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
        { title: 'Cuenta', component: 'CuentaStep' },
        { title: 'Perfil', component: 'PerfilStep' },
        { title: 'Datos Bancarios', component: 'DatosBancaStep' }
      ]
    }
  },
  watch:{
    'user.authority': {
      deep: true,
      handler(newVal) {
        const representativeStep = { title: 'Representante', component: 'RepresentanteStep' };
        const index = this.steps.findIndex(step => step.title === 'Representante');

        if (newVal[0].authorityName === 'ROLE_CORREDOR' && index === -1) {
          this.steps.splice(2, 0, representativeStep);
        } else if (newVal[0].authorityName !== 'ROLE_CORREDOR' && index !== -1) {
          this.steps.splice(index, 1);
        }
      }
    }
  }
  ,
  methods: {
    nextStep() {
      this.activeStep++
    }
  }
}
</script>
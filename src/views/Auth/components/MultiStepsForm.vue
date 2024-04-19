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
            @update:persona="user.persona = $event;console.log($event);console.log(this.user)"
            @update:authority="user.authority = $event;console.log(this.user)"
            @update:direccion="user.direccion = $event;console.log(this.user)"
            @update:empresa="user.empresa = $event;console.log($event);console.log(this.user)"
            @update:representante="user.representante = $event;console.log($event);console.log(this.user)"
            @next:step="nextStep"
            :user="user"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PerfilStep from '@/views/Auth/components/PerfilStep.vue'
import MultiStepsFormProgress from '@/views/Auth/components/MultiStepsFormProgress.vue'
import CuentaStep from '@/views/Auth/components/CuentaStep.vue'
import RepresentanteStep from '@/views/Auth/components/RepresentanteStep.vue'
import ResumenStep from '@/views/Auth/components/ResumenStep.vue'
import DatosBancaStep from '@/views/Auth/components/DatosBancaStep.vue'

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
    DatosBancaStep,
    ResumenStep
  },
  emits: ['update:active-step', 'next:step', 'update:authority', 'update:direccion', 'update:persona', 'update:empresa', 'update:representante'],
  data() {
    return {
      activeStep: 0,
      user: {
        persona: '',
        empresa: '',
        representante: '',
        authority: [
          {
            authorityName: 'ROLE_PROPIETARIO'
          }
        ]
      },
      steps: [
        { title: 'Cuenta', component: 'CuentaStep' },
        { title: 'Perfil', component: 'PerfilStep' },
        { title: 'Datos Bancarios', component: 'DatosBancaStep' },
        { title: 'Resumen', component: 'ResumenStep' }
      ]
    }
  },
  watch: {
    'user.authority': {
      deep: true,
      handler(newVal) {
        const representativeStep = { title: 'Representante', component: 'RepresentanteStep' }
        const index = this.steps.findIndex(step => step.title === 'Representante')
        if (newVal[0].authorityName === 'ROLE_CORREDOR' && index === -1) {
          this.user.persona = ''
          this.steps.splice(2, 0, representativeStep)
        } else if (newVal[0].authorityName !== 'ROLE_CORREDOR' && index !== -1) {
          this.user.empresa = ''
          this.steps.splice(index, 1)
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
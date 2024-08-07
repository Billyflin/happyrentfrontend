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
            :perfil="perfil"
            @update:persona="perfil = $event;console.log($event);console.log(this.perfil)"
            @update:authority="formType = $event;console.log(this.perfil)"
            @update:direccion="perfil.direccion = $event;console.log(this.perfil)"
            @update:empresa="perfil = $event;console.log($event);console.log(this.perfil)"
            @update:representante="perfil.representante = $event;console.log($event);console.log(this.perfil)"
            @update:banco="perfil.banco = $event;console.log($event);console.log(this.perfil)"
            @next:step="nextStep"
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
  emits: ['update:active-step', 'next:step', 'update:authority', 'update:direccion', 'update:persona', 'update:empresa', 'update:representante','update:banco'],
  data() {
    return {
      activeStep: 0,
      formType: 'ROLE_PROPIETARIO',
      perfil: {
        type: 'persona'
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
    formType: {
      deep: true,
      handler(newVal) {
        const representativeStep = { title: 'Representante', component: 'RepresentanteStep' }
        const index = this.steps.findIndex(step => step.title === 'Representante')
        if (newVal === 'ROLE_CORREDOR' && index === -1) {
          delete this.perfil
          this.perfil = null
          this.steps.splice(2, 0, representativeStep)
        } else if (newVal !== 'ROLE_CORREDOR' && index !== -1) {
          this.perfil = null
          delete this.perfil
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
<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="multisteps-form mb-9">
          <div class="row">
            <div class="col-12 col-lg-8 mx-auto my-5"></div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-8 m-auto">
              <div class="card">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
                    <div class="multisteps-form__progress">
                      <button
                        class="multisteps-form__progress-btn"
                        type="button"
                        title="Perfil"
                        :class="activeStep >= 0 ? activeClass : ''"
                        @click="activeStep = 0"
                      >
                        <span>Perfil</span>
                      </button>
                      <button
                        class="multisteps-form__progress-btn"
                        type="button"
                        title="Empresa"
                        :class="activeStep >= 1 ? activeClass : ''"
                        @click="activeStep = 1"
                      >
                        Empresa
                      </button>
                      <button
                        class="multisteps-form__progress-btn"
                        type="button"
                        title="Banco"
                        :class="activeStep >= 2 ? activeClass : ''"
                        @click="activeStep = 2"
                      >
                        Banco
                      </button>
                      <button
                        class="multisteps-form__progress-btn"
                        type="button"
                        title="Plan"
                        :class="activeStep >= 3 ? activeClass : ''"
                        @click="activeStep = 3"
                      >
                        Plan
                      </button>
                      <button
                        class="multisteps-form__progress-btn"
                        type="button"
                        title="Preview"
                        :class="activeStep >= 3 ? activeClass : ''"
                        @click="activeStep = 3"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <form class="multisteps-form__form">
                    <!--single form panel-->
                    <Perfil :next-step="nextStep" :class="activeStep === 0 ? activeClass : ''" />
                    <!--single form panel-->
                    <Empresa :prev-step="prevStep" :next-step="nextStep" :class="activeStep === 1 ? activeClass : ''" />
                    <!--single form panel-->
                    <Banco :prev-step="prevStep" :next-step="nextStep" :class="activeStep === 2 ? activeClass : ''" />
                    <!--single form panel-->
                    <Plan :prev-step="prevStep" :next-step="nextStep" :class="activeStep === 3 ? activeClass : ''" />
                    <!--single form panel-->
                    <Preview :prev-step="prevStep" :next-step="nextStep" :class="activeStep === 4 ? activeClass : ''" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import Perfil from './components/FirstLogin/Perfil.vue'
import Empresa from './components/FirstLogin/Empresa.vue'
import Banco from './components/FirstLogin/Banco.vue'
import Plan from './components/FirstLogin/Plan.vue'
import Preview from './components/FirstLogin/PreSendFirstLogin.vue'

import {useAppStore} from '@/store/index.js' // Ajusta la ruta del almacén
const appStore = useAppStore()

const activeClass = ref('js-active position-relative')
const activeStep = ref(0)
const formSteps = ref(5)
const selectedOption = ref('')

const nextStep = (selectedOptionValue) => {
  selectedOption.value = selectedOptionValue
  if (activeStep.value < formSteps.value) {
    activeStep.value += 1
  } else {
    activeStep.value -= 1
  }
}
const prevStep = () => {
  if (activeStep.value > 0) {
    activeStep.value -= 1
  }
}
</script>

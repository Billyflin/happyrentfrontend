<template>
  <div class="py-4 container-fluid">
<!--    -->
    <div class="row mb-4">
      <div class="col-lg-2">
        <router-link to="/"
                     class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0">
  <span class="material-symbols-outlined mx-1">
    arrow_back
  </span>
          Volver
        </router-link>
      </div>
      </div>
<!--    -->
      <div class="row mt-4">
        <div class="text-center col-12">
          <div class="mb-5 multisteps-form">
            <!--progress bar-->
            <div class="row">
              <div class="mx-auto my-5 col-12 col-lg-8">
                <div class="card">
                  <div
                      class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
                  >
                    <div
                        class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
                    >
                      <div class="multisteps-form__progress">
                        <button
                            class="multisteps-form__progress-btn js-active"
                            type="button"
                            title="User Info"
                            :class="activeStep >= 0 ? activeClass : ''"
                            @click="activeStep = 0"
                        >
                          <span>Cuenta</span>
                        </button>
                        <button
                            class="multisteps-form__progress-btn"
                            type="button"
                            title="Address"
                            :class="activeStep >= 1 ? activeClass : ''"
                            @click="activeStep = 1"
                        >
                          <span>Perfil</span>
                        </button>
                        <button
                            class="multisteps-form__progress-btn"
                            type="button"
                            title="Order Info"
                            :class="activeStep >= 2 ? activeClass : ''"
                            @click="activeStep = 2"
                        >
                          <span>Dirección</span>
                        </button>
                        <button class="multisteps-form__progress-btn"
                                type="button" title="Order Info"
                                :class="activeStep >= 3 ? activeClass : ''"
                                @click="activeStep = 3">
                          <span>Banco</span>
                        </button>
                        <button class="multisteps-form__progress-btn"
                                type="button" title="Order Info"
                                :class="activeStep >= 4 ? activeClass : ''"
                                @click="activeStep = 4">
                          <span>Plan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <form class="multisteps-form__form">
                      <!--single form panel-->
                      <cuenta v-if="activeStep === 0"/>
                      <!--single form panel-->
                      <Perfil :class="activeStep === 1 ? activeClass : ''"/>
                      <!--single form panel-->
                      <app-address :class="activeStep === 2 ? activeClass : ''"/>
                      <!--single form panel-->
                      <bank-account :class="activeStep === 3 ? activeClass : ''"/>
                      <!--single form panel-->
                      <plan-selection :class="activeStep === 4 ? activeClass : ''"/>
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

<script>
import Cuenta from "./Cuenta.vue";
import Perfil from "./PerfilForm.vue";
import AppAddress from "./Dirreccion.vue";
import BankAccount from "./BankAccount.vue";
import {useAppStore} from '@/store/index.js'
import {onMounted, onUnmounted} from 'vue'
import PlanSelection from '@/views/Auth/components/PlanSelection.vue'

export default {
  name: "FormularioRegistro",
  components: {PlanSelection, Cuenta, Perfil, AppAddress, BankAccount},
  data() {
    return {
      activeClass: "js-active position-relative",
      activeStep: 0,
      formSteps: 5,
    };
  },
  setup() {
    const store = useAppStore()
    const {toggleEveryDisplay, toggleHideConfig} = store
    onMounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
    })
  },
  methods: {
    nextStep() {
      if (this.activeStep < this.formSteps) {
        this.activeStep += 1;
      } else {
        this.activeStep -= 1;
      }
    },
    prevStep() {
      if (this.activeStep > 0) {
        this.activeStep -= 1;
      }
    },
  },
};
</script>

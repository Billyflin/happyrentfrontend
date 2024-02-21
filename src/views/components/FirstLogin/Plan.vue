<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Planes</h5>
        <p>Give us more details about you. What do you enjoy doing in your spare time?</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div v-if="selectedOption === '1'" class="mt-4 row">
        <div class="col-sm-3 ms-auto">
          <input
            :id="'perfilSelection_1_' + uniqueId"
            type="radio"
            class="btn-check"
            name="planSelection"
            v-model="selectedPlan"
            value="Corredor1"
          />
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'perfilSelection_1_' + uniqueId">
            <i class="material-icons">brush</i>
          </label>
          <h6>Corredor1</h6>
        </div>
        <div class="col-sm-3">
          <input
            :id="'perfilSelection_2_' + uniqueId"
            type="radio"
            class="btn-check"
            name="planSelection"
            v-model="selectedPlan"
            value="Corredor2"
          />
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'perfilSelection_2_' + uniqueId">
            <i class="material-icons">integration_instructions</i>
          </label>
          <h6>Corredor2</h6>
        </div>
        <div class="col-sm-3 me-auto">
          <input
            :id="'perfilSelection_3_' + uniqueId"
            type="radio"
            class="btn-check"
            name="planSelection"
            v-model="selectedPlan"
            value="Corredor3"
          />
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'perfilSelection_3_' + uniqueId">
            <i class="material-icons">developer_mode</i>
          </label>
          <h6>Corredor3</h6>
        </div>
      </div>
      <div v-if="selectedOption === '2'" class="mt-4 row">
        <div class="col-sm-3 ms-auto">
          <input
            :id="'perfilSelection_1_' + uniqueId"
            type="radio"
            class="btn-check"
            name="planSelection"
            v-model="selectedPlan"
            value="Propietario1"
          />
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'perfilSelection_1_' + uniqueId">
            <i class="material-icons">brush</i>
          </label>
          <h6>Propietario1</h6>
        </div>
        <div class="col-sm-3">
          <input
            :id="'perfilSelection_2_' + uniqueId"
            type="radio"
            class="btn-check"
            name="planSelection"
            v-model="selectedPlan"
            value="Propietario2"
          />
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'perfilSelection_2_' + uniqueId">
            <i class="material-icons">integration_instructions</i>
          </label>
          <h6>Propietario2</h6>
        </div>
        <div class="col-sm-3 me-auto">
          <input
            :id="'perfilSelection_3_' + uniqueId"
            type="radio"
            class="btn-check"
            name="planSelection"
            v-model="selectedPlan"
            value="Propietario3"
          />
          <label class="btn btn-lg btn-outline-success border-2 px-6 py-5" :for="'perfilSelection_3_' + uniqueId">
            <i class="material-icons">developer_mode</i>
          </label>
          <h6>Propietario3</h6>
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-light js-btn-prev" type="button" title="Prev" @click="executePrevStep">
          Prev
        </button>
        <button
          class="mb-0 btn bg-gradient-dark ms-auto js-btn-next"
          type="button"
          title="Next"
          @click="executeNextStep"
          :disabled="!selectedPlan"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, watch} from 'vue'
import {firstloginStore} from '@/store'
import router from '@/router'

export default {
  props: {
    nextStep: Function,
    prevStep: Function,
  },

  setup(props) {
    const firstloginData = firstloginStore()
    const selectedPlan = ref('')
    const selectedOption = ref(firstloginData.perfil)

    watch(
      () => firstloginData.perfil,
      (newPerfil) => {
        selectedOption.value = newPerfil
      }
    )

    const executeNextStep = async () => {
      if (selectedPlan.value) {
        firstloginData.setPlan(selectedPlan.value)
        props.nextStep()
      }
    }
    const executePrevStep = () => {
      props.prevStep()
    }

    return {
      selectedOption,
      selectedPlan,
      executeNextStep,
      executePrevStep,
      uniqueId: Math.random().toString(36).substr(2, 9), // Genera un ID único
    }
  },
}
</script>

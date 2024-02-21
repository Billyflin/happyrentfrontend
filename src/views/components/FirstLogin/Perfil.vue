<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Seleccione su Perfil</h5>
        <p>Give us more details about you. What do you enjoy doing in your spare time?</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-4 row">
        <div class="col-sm-3 ms-auto">
          <input
            :id="'perfilSelection_Corredor_' + uniqueId"
            type="radio"
            class="btn-check"
            name="profileSelection"
            v-model="selectedPerfil"
            value="1"
          />
          <label
            class="btn btn-lg btn-outline-success border-2 px-6 py-5"
            :for="'perfilSelection_Corredor_' + uniqueId"
          >
            <i class="material-icons">brush</i>
          </label>
          <h6>Corredor</h6>
        </div>
        <div class="col-sm-3 me-auto">
          <input
            :id="'perfilSelection_Propietario_' + uniqueId"
            type="radio"
            class="btn-check"
            name="profileSelection"
            v-model="selectedPerfil"
            value="2"
          />
          <label
            class="btn btn-lg btn-outline-success border-2 px-6 py-5"
            :for="'perfilSelection_Propietario_' + uniqueId"
          >
            <i class="material-icons">integration_instructions</i>
          </label>
          <h6>Propietario</h6>
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button
          class="mb-0 btn bg-gradient-dark ms-auto js-btn-next"
          type="button"
          title="Next"
          @click="executeNextStep"
          :disabled="!selectedPerfil"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {firstloginStore, useUserStore} from '@/store'
export default {
  props: {
    nextStep: Function,
  },

  setup(props) {
    const selectedPerfil = ref('')
    const firstloginData = firstloginStore()
    const userStore = useUserStore()

    const executeNextStep = () => {
      if (selectedPerfil.value) {
        firstloginData.setIdUser(userStore.userState._id)
        firstloginData.setPerfil(selectedPerfil.value)
        props.nextStep()
      }
    }

    return {
      selectedPerfil,
      executeNextStep,
      uniqueId: Math.random().toString(36).substr(2, 9), // Genera un ID único
    }
  },
}
</script>

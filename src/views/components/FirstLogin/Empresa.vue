<template>
  <div class="multisteps-form__panel border-radius-xl bg-white" data-animation="FadeIn">
    <h5 class="font-weight-bolder mb-0">Crear Empresa</h5>
    <p class="mb-0 text-sm">Información requerida</p>
    <div class="mt-4 row text-sm">
      <div class="col-2 col-sm-2">
        <input
          :id="'typeSelectionEmpresa' + uniqueId"
          type="radio"
          class=""
          name="typeSelectionEmpresa"
          v-model="selectedOptionTipoEmpresa"
          value="1"
        />
        <label>
          <i class="">Juridica</i>
        </label>
      </div>
      <div class="col-2 col-sm-2 mt-3 mt-sm-0">
        <input
          :id="'typeSelectionEmpresa' + uniqueId"
          type="radio"
          class=""
          name="typeSelectionEmpresa"
          v-model="selectedOptionTipoEmpresa"
          value="2"
        />
        <label>
          <i class="">Natural</i>
        </label>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-4 row">
        <div class="col-12 col-sm-6">
          <MaterialInput id="rsocial" name="rsocial" label="Razón Social" variant="dynamic" v-model="state.rsocial" />
          <span v-if="v$.rsocial.$error"> {{ v$.rsocial.$errors[0].$message }} </span>
        </div>
        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
          <MaterialInput
            id="rutempresa"
            label="Rut"
            maxlength="10"
            variant="dynamic"
            v-model="state.rutempresa"
            @input="validateRutEmpresa"
          />
          <span v-if="v$.rutempresa.$error"> {{ v$.rutempresa.$errors[0].$message }} </span>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-6">
          <MaterialInput
            id="emailempresa"
            type="email"
            label="Email Address"
            variant="dynamic"
            v-model="state.emailempresa"
          />
          <span v-if="v$.emailempresa.$error"> {{ v$.emailempresa.$errors[0].$message }} </span>
        </div>
        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
          <MaterialInput id="giroempresa" label="Giro" variant="dynamic" v-model="state.giroempresa" />
          <span v-if="v$.giroempresa.$error"> {{ v$.giroempresa.$errors[0].$message }} </span>
        </div>
      </div>

      <div v-if="selectedOptionTipoEmpresa === '1'" class="mt-4 row">
        <h5 class="font-weight-bolder mb-0">Represenante Legal</h5>
        <div class="mt-4 row">
          <div class="col-12 col-sm-6">
            <MaterialInput
              id="nombrerepresentante"
              label="Nombre"
              variant="dynamic"
              :disabled="selectedOptionTipoEmpresa === '2'"
              v-model="state.nombrerepresentante"
            />
            <span v-if="v$.nombrerepresentante.$error"> {{ v$.nombrerepresentante.$errors[0].$message }} </span>
          </div>
          <div class="col-12 col-sm-6 mt-3 mt-sm-0">
            <MaterialInput
              id="rutrepresentante"
              label="Rut"
              variant="dynamic"
              maxlength="10"
              v-model="state.rutrepresentante"
              :disabled="selectedOptionTipoEmpresa === '2'"
              @input="validateRutEmpresa"
            />
            <span v-if="v$.rutrepresentante.$error"> {{ v$.rutrepresentante.$errors[0].$message }} </span>
          </div>
        </div>
        <div class="mt-4 row">
          <div class="col-12 col-sm-6">
            <MaterialInput
              id="lastname_parental"
              label="Apellido Paterno"
              variant="dynamic"
              :disabled="selectedOptionTipoEmpresa === '2'"
              v-model="state.lastname_parental"
            />
            <span v-if="v$.lastname_parental.$error"> {{ v$.lastname_parental.$errors[0].$message }} </span>
          </div>
          <div class="col-12 col-sm-6 mt-3 mt-sm-0">
            <MaterialInput
              id="lastname_maternal"
              label="Apellido Materno"
              variant="dynamic"
              v-model="state.lastname_maternal"
            />
            <span v-if="v$.lastname_maternal.$error"> {{ v$.lastname_maternal.$errors[0].$message }} </span>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12 col-sm-6 mt-3 mt-sm-0">
            <MaterialInput
              id="emailrepresentante"
              type="email"
              label="Email Address"
              variant="dynamic"
              :disabled="selectedOptionTipoEmpresa === '2'"
              v-model="state.emailrepresentante"
            />
            <span v-if="v$.emailrepresentante.$error"> {{ v$.emailrepresentante.$errors[0].$message }} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-light js-btn-prev" type="button" title="Prev" @click="executePrevStep">
          Prev
        </button>
        <button
          class="mb-0 btn bg-gradient-dark ms-auto js-btn-next"
          type="button"
          title="Next"
          @click="executeNextStep"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import {useVuelidate} from '@vuelidate/core'
import {email, required, minLength, maxLength, helpers} from '@vuelidate/validators'
import {errors} from '@/errorMessages.js'
import {firstloginStore} from '@/store'

export default {
  components: {
    MaterialInput,
    MaterialButton,
  },

  props: {
    nextStep: Function,
    prevStep: Function,
  },

  setup(props) {
    const firstloginData = firstloginStore()
    const {regex} = helpers
    const selectedOptionTipoEmpresa = ref('1')

    const createInitialState = () => {
      return {
        rsocial: '',
        rutempresa: '',
        emailempresa: '',
        giroempresa: '',
        nombrerepresentante: '',
        rutrepresentante: '',
        emailrepresentante: '',
        lastname_parental: '',
        lastname_maternal: '',
      }
    }
    const state = reactive(createInitialState())
    const rules = {
      rsocial: {
        required: helpers.withMessage(errors.required, required),
        minLength: helpers.withMessage(errors.minLength, minLength(6)),
      },
      rutempresa: {
        required: helpers.withMessage(errors.required, required),
        minLength: helpers.withMessage(errors.minLength, minLength(8)),
        maxLength: helpers.withMessage(errors.maxLength, maxLength(10)),
        regex: helpers.withMessage(errors.rutInvalido, regex(/^\d{7,8}-[\dk]$/i)),
        customValidation: helpers.withMessage(errors.rutInvalido, (value) => validarut(value)),
      },
      emailempresa: {
        required: helpers.withMessage(errors.required, required),
        email: helpers.withMessage(errors.email, email),
      },
      giroempresa: {required: helpers.withMessage(errors.required, required)},
      nombrerepresentante: {
        required: helpers.withMessage(errors.required, required),
        minLength: helpers.withMessage(errors.minLength, minLength(6)),
      },
      lastname_parental: {
        required: helpers.withMessage(errors.required, required),
        minLength: helpers.withMessage(errors.minLength, minLength(6)),
      },
      lastname_maternal: {
        required: helpers.withMessage(errors.required, required),
        minLength: helpers.withMessage(errors.minLength, minLength(6)),
      },

      rutrepresentante: {
        required: helpers.withMessage(errors.required, required),
        minLength: helpers.withMessage(errors.minLength, minLength(8)),
        maxLength: helpers.withMessage(errors.maxLength, maxLength(10)),
        regex: helpers.withMessage(errors.rutInvalido, regex(/^\d{7,8}-[\dk]$/i)),
        customValidation: helpers.withMessage(errors.rutInvalido, (value) => validarut(value)),
      },
      emailrepresentante: {
        required: helpers.withMessage(errors.required, required),
        email: helpers.withMessage(errors.email, email),
      },
    }

    const v$ = useVuelidate(rules, state)

    const validateRutEmpresa = () => {
      v$.value.rutempresa.$touch()
      v$.value.rutrepresentante.$touch()
    }

    const executeNextStep = () => {
      if (v$ && v$.value) {
        v$.value.$touch()
        firstloginData.setTipoEmpresa(selectedOptionTipoEmpresa)
        firstloginData.setRsocial(state.rsocial)
        firstloginData.setRutEmpresa(state.rutempresa)
        firstloginData.setEmailEmpresa(state.emailempresa)
        firstloginData.setGiro(state.giroempresa)
        if (
          selectedOptionTipoEmpresa.value === '2' &&
          !v$.value.rsocial.$error &&
          !v$.value.rutempresa.$error &&
          !v$.value.emailempresa.$error
        ) {
          props.nextStep()
        } else if (!v$.value.$pending && !v$.value.$error) {
          firstloginData.setNombreRepresentante(state.nombrerepresentante)
          firstloginData.setPaternoRepresentante(state.lastname_parental)
          firstloginData.setMaternoRepresentante(state.lastname_maternal)
          firstloginData.setRutRepresentante(state.rutrepresentante)
          firstloginData.setEmailRepresentante(state.emailrepresentante)
          props.nextStep()
        }
      }
    }

    const executePrevStep = () => {
      props.prevStep()
    }

    return {
      executeNextStep,
      executePrevStep,
      state,
      v$,
      selectedOptionTipoEmpresa,
      uniqueId: Math.random().toString(36).substr(2, 9), // Genera un ID único
      validateRutEmpresa,
    }
  },
}
</script>

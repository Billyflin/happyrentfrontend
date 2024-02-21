<template>
  <div class="multisteps-form__panel border-radius-xl bg-white" data-animation="FadeIn">
    <div class="mt-4 row">
      <div class="row mt-3">
        <div class="col-12 col-sm-6">
          <MaterialComboBox
            v-if="optionsDataCombined.value"
            label="Banco"
            :codeKey="'id'"
            :valueKey="'name'"
            variant="dynamic"
            :optionsData="optionsDataCombined.value"
            class=""
            :modelValue="bankSelect"
            @selectedChange="handleBancoChange"
          />
        </div>
        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
          <MaterialComboBox
            label="Tipo de cuenta"
            :codeKey="'typeAccount'"
            :valueKey="'typeValue'"
            variant="dynamic"
            :optionsData="[
              {typeAccount: 1, typeValue: 'Corriente'},
              {typeAccount: 2, typeValue: 'Vista'},
            ]"
            class=""
            v-model="tipoCuentaSelect"
            @selectedChange="handleTipoCuentaChange"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-6">
          <MaterialInput id="naccount" label="Número de cuenta" variant="dynamic" v-model="state.naccount" />
          <span v-if="v$.naccount.$error"> {{ v$.naccount.$errors[0].$message }} </span>
        </div>
        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
          <MaterialInput id="emailbanco" type="email" label="Email" variant="dynamic" v-model="state.emailbanco" />
          <span v-if="v$.emailbanco.$error"> {{ v$.emailbanco.$errors[0].$message }} </span>
        </div>
      </div>
      <div class="row mt-3">
        <div v-if="tipoEmpresaOption === '2'" class="col-12 col-sm-6">
          <MaterialInput
            id="rutcuenta"
            label="Rut de cuenta"
            variant="dynamic"
            v-model="state.rutcuenta"
            maxlength="10"
            @input="validateRut"
          />
          <span v-if="v$.rutcuenta.$error"> {{ v$.rutcuenta.$errors[0].$message }} </span>
        </div>
        <div v-if="tipoEmpresaOption === '1'" class="input-group input-group-dynamic null is-filled">
          <label class="form-label">Rut de cuenta</label>
          <input
            id="rutcuenta"
            type="text"
            class="form-control form-control-default"
            :value="valorRutEmpresa"
            disabled
            @input="validateRut"
          />
          <span v-if="v$.rutcuenta.$error"> {{ v$.rutcuenta.$errors[0].$message }} </span>
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
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue'
import MaterialInput from '@/components/MaterialInput.vue'

export default defineComponent({
  components: { MaterialInput }
})
</script>

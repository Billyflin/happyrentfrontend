<script setup>

import MaterialButton from '@/components/MaterialButton.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import { ref } from 'vue'

const isEmailDisabled = ref(false)
const isConfirmEmailDisabled = ref(false)

function blockearInputs() {
  isEmailDisabled.value = true
  isConfirmEmailDisabled.value = true
}

</script>

<template>
  <div id="Solicitar datos" class="card mt-5">
    <div class="card-header">
      <h5>Solicitar datos al arrendatario </h5>
      <p class="mb-0 text-sm">
        El arrendatario recibirá un correo con un link para completar los datos necesarios para el contrato.
        Estos pueden ser verificados por el arrendador cuando sean completados.
      </p>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4">
          <material-input
            id="email"
            type="email"
            variant="static"
            label="Email"
            placeholder="Email"
            :disabled="isEmailDisabled"
          />
        </div>
        <div class="col-4">
          <material-input
            id="confirmEmail"
            type="email"
            variant="static"
            label="Confimar Email"
            placeholder="Confirma Email"
            :disabled="isConfirmEmailDisabled"
          />
        </div>
        <div class="col-4">
          <MaterialButton class="mt-4" variant="gradient" color="primary" fullWidth @click="blockearInputs">Enviar
          </MaterialButton>
        </div>
      </div>
      <div v-if="isEmailDisabled" class="row mt-3">
        <span class="badge badge-success">Correo enviado</span>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup>

import MaterialButton from '@/components/MaterialButton.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import { ref } from 'vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'

const isEmailDisabled = ref(false)
const isConfirmEmailDisabled = ref(false)
const pedirDocumentos = ref(false)
const carnet = ref(false)
const contrato = ref(false)
const boletas = ref(false)

function blockearInputs() {
  isEmailDisabled.value = true
  isConfirmEmailDisabled.value = true
}

</script>

<template>
  <div id="SolicitarDatos" class="card mt-2">
    <div class="card-header">
      <h5>Solicitar datos al arrendatario </h5>
      <p class="mb-0 text-sm">
        El arrendatario recibirá un correo con un link para completar los datos necesarios para el contrato.
        Estos pueden ser verificados por el arrendador cuando sean completados.
      </p>
    </div>
    <div class="card-body pt-0">
      <material-switch id="pedirDocumentos" v-model:checked="pedirDocumentos" name="documentos">Pedir documentos?
      </material-switch>
      <div v-if="pedirDocumentos" class="row mt-4">
        <p> Que documentos quieres pedir?</p>
        <div class="col-4">
          <h6>Carnet de identidad</h6>
          <material-switch id="carnet" v-model:checked="carnet" name="carnet">Pedir Carnet</material-switch>
        </div>
        <div class="col-4">
          <h6>Contrato de trabajo</h6>
          <material-switch id="contrato" v-model:checked="contrato" name="contrato">Pedir Contrato</material-switch>
        </div>
        <div class="col-4">
          <h6>Liquidaciones de sueldo</h6>
          <material-switch id="boletas" v-model:checked="boletas" name="boletas">Pedir Boletas</material-switch>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <h6 class="mb-0">Email</h6>
          <material-input
            id="email"
            :disabled="isEmailDisabled"
            placeholder="Email"
            type="email"
            variant="static"
          />
        </div>
        <div class="col-4">
          <h6 class="mb-0">Confirmar Email</h6>
          <material-input
            id="confirmEmail"
            :disabled="isConfirmEmailDisabled"
            placeholder="Confirma Email"
            type="email"
            variant="static"
          />
        </div>
        <div class="col-4">
          <!--          <MaterialButton class="mt-4" variant="gradient" color="primary" fullWidth @click="blockearInputs">Enviar</MaterialButton>-->
          <MaterialButton class="mt-4" color="happDark" fullWidth variant="gradient" @click="blockearInputs">Enviar
          </MaterialButton>
        </div>
      </div>
      <div v-if="isEmailDisabled" class="row mt-3">
        <span class="badge badge-success">Correo enviado</span>
      </div>
    </div>
  </div>
</template>




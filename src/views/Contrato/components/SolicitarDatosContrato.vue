<script setup>

import MaterialButton from '@/components/MaterialButton.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import { computed, ref } from 'vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import axios from 'axios'

const email = ref('')
const emailConfirm = ref('')
const emailMismatch = computed(() => email.value !== emailConfirm.value)
const sending = ref(false)
const pedirDocumentos = ref(false)
const carnet = ref(false)
const liquidaciones = ref(false)
const certificadoAFP = ref(false)
const certificadoDicom = ref(false)
const carpetaTributaria = ref(false)
const contratoTrabajo = ref(false)
const enviado = ref(false)
const error = ref('')

const submitForm = async () => {
  if (emailMismatch.value || sending.value) return
  sending.value = true
  try {
    await axios.post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/auth/perfil-temporal`,
      {
        email:email.value,
        carnet: carnet.value,
        liquidaciones: liquidaciones.value,
        certificadoAFP: certificadoAFP.value,
        certificadoDicom: certificadoDicom.value,
        carpetaTributaria: carpetaTributaria.value,
      },

    ).then(() => {
        enviado.value = true

      }
    ).catch(() => {
        error.value = 'Hubo un error al cambiar la contraseña. Por favor, inténtalo de nuevo más tarde.'
      }
    ).finally(() => {
        sending.value = false
      }
    )

  } catch (err) {
  }
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
      <material-switch id="pedirDocumentos" :disabled="sending||enviado" v-model:checked="pedirDocumentos"
                       name="documentos">Pedir documentos?
      </material-switch>
      <div v-if="pedirDocumentos" class="row mt-4">
        <p> Que documentos quieres pedir?</p>
        <div class="col-4">
          <h6>Cédula de identidad</h6>
          <material-switch id="carnet" :disabled="sending||enviado" v-model:checked="carnet" name="carnet">Pedir
            Cedula
          </material-switch>
        </div>
        <div class="col-4">
          <h6>Liquidaciones de sueldo</h6>
          <material-switch id="liquidaciones" :disabled="sending||enviado" v-model:checked="liquidaciones" name="liquidaciones">Pedir
            Liquidaciones
          </material-switch>
        </div>
        <div class="col-4">
          <h6>Certificado AFP</h6>
          <material-switch id="certificadoAFP" :disabled="sending||enviado" v-model:checked="certificadoAFP" name="cerficadoAFP">Pedir
            Certificado AFP
          </material-switch>
        </div>
        <div class="col-4 mt-2">
          <h6>Certificado dicom platinum</h6>
          <material-switch id="certificadoDicom" :disabled="sending||enviado" v-model:checked="certificadoDicom" name="cerficadoDicom">Pedir
            Certificado Dicom
          </material-switch>
        </div>
        <div class="col-4 mt-2">
          <h6>Carpeta tributaria 2 últimos años</h6>
          <material-switch id="carpetaTributaria" :disabled="sending||enviado" v-model:checked="carpetaTributaria" name="carpetaTributaria">Pedir
            Carpeta Tributaria
          </material-switch>
        </div>
        <div class="col-4 mt-2">
          <h6>Contrato de trabajo</h6>
          <material-switch id="contratoTrabajo" :disabled="sending||enviado" v-model:checked="contratoTrabajo" name="contratoTrabajo">Pedir
            Contrato de Trabajo
          </material-switch>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <h6 class="mb-0">Email</h6>
          <material-input
            id="email"
            :disabled="sending||enviado"
            v-model="email"
            placeholder="Email"
            type="email"
            variant="static"
          />
        </div>
        <div class="col-4">
          <h6 class="mb-0">Confirmar Email</h6>
          <material-input
            id="confirmEmail"
            v-model="emailConfirm"
            :disabled="sending||enviado"
            placeholder="Confirma Email"
            type="email"
            variant="static"
          />
        </div>
        <div class="col-4">
          <!--          <MaterialButton class="mt-4" variant="gradient" color="primary" fullWidth @click="blockearInputs">Enviar</MaterialButton>-->
          <MaterialButton :disabled="sending||enviado" class="mt-4" color="happDark" fullWidth variant="gradient"
                          @click="submitForm">Enviar
          </MaterialButton>
        </div>
      </div>
      <div v-if="enviado" class="row mt-3">
        <span class="badge badge-success">Correo enviado</span>
      </div>
    </div>
  </div>
</template>




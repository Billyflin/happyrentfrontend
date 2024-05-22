<script>
import axios from 'axios'
import { useAuthStore } from '@/store/index.js'
import router from '@/router/index.js'

export default {
  name: 'ResumenStep',
  props: {
    perfil: {
      type: Object,
      required: true
    }
  },
  methods: {
    enviarFormulario() {
      console.log(this.perfil)
      const store = useAuthStore()
      axios.post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/auth/perfil`, this.perfil)
        .then((response) => {
          console.log('Usuario registrado')
          console.log(response.data)
          store.getCurrentUser().then(() => {
              router.push({ name: 'Propiedades' })
            }
          )
        })
    }
  },
  emits: ['update:active-step', 'next:step']
}
</script>

<template>
  <div class="multisteps-form__title">Resumen</div>
  <div class="multisteps-form__body">
    <div v-if="perfil.type === 'persona'" class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Nombre</h6>
          <p>{{ perfil.nombre }} {{ perfil.apellidoPaterno }} {{ perfil.apellidoMaterno }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Correo</h6>
          <p>{{ perfil.email }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Telefono</h6>
          <p>{{ perfil.telefono }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Ocupación</h6>
          <p>{{ perfil.ocupacion }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Estado Civil</h6>
          <p>{{ perfil.estadoCivil }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Nacionalidad</h6>
          <p>{{ perfil.nacionalidad }}</p>
        </div>
        <div v-if="perfil.direccion" class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Dirección</h6>
          <p>{{ perfil.direccion.calle }} {{ perfil.direccion.numero }}, {{ perfil.direccion.ciudad }},
            {{ perfil.direccion.region }}</p>
        </div>
      </div>
    </div>
    <div v-if="perfil.type ==='empresa'" class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Nombre Empresa</h6>
          <p>{{ perfil.nombre }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Rut Empresa</h6>
          <p>{{ perfil.rut }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Correo</h6>
          <p>{{ perfil.email }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Giro</h6>
          <p>{{ perfil.giro }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Razon social</h6>
          <p>{{ perfil.razonSocial }}</p>
        </div>
        <div v-if="perfil.direccion" class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Dirección</h6>
          <p>{{ perfil.direccion.calle }} {{ perfil.direccion.numero }},
            {{ perfil.direccion.region }}</p>
        </div>
      </div>
      <div v-if="perfil.representante" class="multisteps-form__title mt-4">Resumen Representante
        Legal
      </div>
      <div v-if="perfil.representante" class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal text-capitalize">Nombre</h6>
          <p>{{ perfil.representante.nombre }}
            {{ perfil.representante.apellidoPaterno }}
            {{ perfil.representante.apellidoMaterno }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal ">Rut</h6>
          <p v-if="perfil.representante.rut">
            {{ perfil.representante.rut }}</p>
        </div>
        <div v-if="perfil.representante.ocupacion"
             class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 v-if="perfil.representante.ocupacion" class="font-weight-normal">
            Ocupación</h6>
          <p>{{ perfil.representante.ocupacion }}</p>
        </div>
        <div v-if="perfil.representante.estadoCivil"
             class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Estado Civil</h6>
          <p>{{ perfil.representante.estadoCivil }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Nacionalidad</h6>
          <p v-if="perfil.representante.nacionalidad">
            {{ perfil.representante.nacionalidad }}</p>
          <p v-else class="alert-danger">vuelve al formulario</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Email</h6>
          <p v-if="perfil.representante.email ">
            {{ perfil.representante.email }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Telefono</h6>
          <p v-if="perfil.representante.telefono">
            {{ perfil.representante.telefono }}</p>
        </div>
        <div v-if="perfil.representante.direccion"
             class="d-flex justify-content-between align-items-center text-capitalize">
          <h6 class="font-weight-normal">Dirección</h6>
          <p>{{ perfil.representante.direccion.calle }}
            {{ perfil.representante.direccion.numero }},
            {{ perfil.representante.direccion.region }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="perfil" class="button-row d-flex">
    <button class="btn bg-gradient-primary w-100 text-white" @click="enviarFormulario">Terminar Registro</button>
  </div>

</template>
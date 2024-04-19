<script>
import axios from 'axios'
import { useAuthStore } from '@/store/index.js'
import router from '@/router/index.js'

export default {
  name: 'ResumenStep',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    enviarFormulario() {
      console.log(this.user)
      this.user.authorityDtoSet.push({ authorityName: 'ROLE_USER' })
      const store = useAuthStore()
      axios.put('http://localhost:8080/api/completeUser', this.user)
        .then((response) => {
          console.log('Usuario registrado')
          console.log(response.data)
          store.userInfo.authorityDtoSet = response.data.authorityDtoSet
          store.userInfo.persona = response.data.persona
          router.push({ name: 'Propiedades' })
        })
    }
  },
  emits: ['update:active-step', 'next:step']
}
</script>

<template>
  <div class="multisteps-form__title">Resumen</div>
  <div class="multisteps-form__body">
    <div class="row">
      <div class="col-12" v-if="user.persona">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nombre</h6>
          <p>{{ user.persona.nombres }} {{ user.persona.apellidoPaterno }} {{ user.persona.apellidoMaterno }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Correo</h6>
          <p>{{ user.persona.email }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Telefono</h6>
          <p>{{ user.persona.telefono }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Ocupación</h6>
          <p>{{ user.persona.ocupacion }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Estado Civil</h6>
          <p>{{ user.persona.estadoCivil }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nacionalidad</h6>
          <p>{{ user.persona.nacionalidad }}</p>
        </div>
      </div>
    </div>
    <div class="row" v-if="user.empresa">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nombre Empresa</h6>
          <p>{{ user.empresa.nombre }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Rut Empresa</h6>
          <p>{{ user.empresa.rut }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Giro</h6>
          <p>{{ user.empresa.giro }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center" v-if="user.empresa.direccion">
          <h6 class="font-weight-normal">Dirección</h6>
          <p>{{ user.empresa.direccion.calle }} {{ user.empresa.direccion.numero }},
            {{ user.empresa.direccion.region }}</p>
        </div>
      </div>
      <div class="multisteps-form__title">Resumen Representante Legal</div>
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center" v-if="user.empresa.representante">
          <h6 class="font-weight-normal">Nombre</h6>
          <p>{{ user.empresa.representante.nombres }} {{ user.empresa.representante.apellidoPaterno }}
            {{ user.empresa.representante.apellidoMaterno }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Rut</h6>
          <p  v-if="user.empresa.representante.rut">{{ user.empresa.representante.rut }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center" v-if="user.empresa.representante.ocupacion">
          <h6 class="font-weight-normal">Ocupación</h6>
          <p>{{ user.empresa.representante.ocupacion }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center" v-if="user.empresa.representante.estadoCivil">
          <h6 class="font-weight-normal">Estado Civil</h6>
          <p>{{ user.empresa.representante.estadoCivil }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nacionalidad</h6>
          <p v-if="user.empresa.representante.nacionalidad">{{ user.empresa.representante.nacionalidad }}</p>
          <p v-else class="alert-danger">vuelve al formulario</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Email</h6>
          <p v-if="user.empresa.representante.email ">{{ user.empresa.representante.email }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Telefono</h6>
          <p v-if="user.empresa.representante.telefono">{{ user.empresa.representante.telefono }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="button-row d-flex" v-if="user.empresa || user.persona">
    <button class="btn bg-gradient-primary w-100 text-white" @click="enviarFormulario">Terminar Registro</button>
  </div>

</template>
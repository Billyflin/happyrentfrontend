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
      if (!this.user.authorityDtoSet.includes('ROLE_USER')) {
        this.user.authorityDtoSet.push({ authorityName: 'ROLE_USER' })
      }
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
    <div class="row" v-if="user.persona">
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
    <div class="row" v-if="user.corredora.empresa">
      {{ user }}
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nombre Empresa</h6>
          <p>{{ user.corredora.empresa.nombre }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Rut Empresa</h6>
          <p>{{ user.corredora.empresa.rut }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Giro</h6>
          <p>{{ user.corredora.empresa.giro }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center" v-if="user.corredora.empresa.direccion">
          <h6 class="font-weight-normal">Dirección</h6>
          <p>{{ user.corredora.empresa.direccion.calle }} {{ user.corredora.empresa.direccion.numero }},
            {{ user.corredora.empresa.direccion.region }}</p>
        </div>
      </div>
      <div class="multisteps-form__title" v-if="user.corredora.empresa.representanteLegal.persona">Resumen Representante
        Legal
      </div>
      <div class="col-12" v-if="user.corredora.empresa.representanteLegal.persona">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nombre</h6>
          <p>{{ user.corredora.empresa.representanteLegal.persona.nombres }}
            {{ user.corredora.empresa.representanteLegal.persona.apellidoPaterno }}
            {{ user.corredora.empresa.representanteLegal.persona.apellidoMaterno }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Rut</h6>
          <p v-if="user.corredora.empresa.representanteLegal.persona.rut">
            {{ user.corredora.empresa.representanteLegal.persona.rut }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center"
             v-if="user.corredora.empresa.representanteLegal.persona.ocupacion">
          <h6 class="font-weight-normal" v-if="user.corredora.empresa.representanteLegal.persona.ocupacion">
            Ocupación</h6>
          <p>{{ user.corredora.empresa.representanteLegal.persona.ocupacion }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center"
             v-if="user.corredora.empresa.representanteLegal.persona.estadoCivil">
          <h6 class="font-weight-normal">Estado Civil</h6>
          <p>{{ user.corredora.empresa.representanteLegal.persona.estadoCivil }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Nacionalidad</h6>
          <p v-if="user.corredora.empresa.representanteLegal.persona.nacionalidad">
            {{ user.corredora.empresa.representanteLegal.persona.nacionalidad }}</p>
          <p v-else class="alert-danger">vuelve al formulario</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Email</h6>
          <p v-if="user.corredora.empresa.representanteLegal.persona.email ">
            {{ user.corredora.empresa.representanteLegal.persona.email }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="font-weight-normal">Telefono</h6>
          <p v-if="user.corredora.empresa.representanteLegal.persona.telefono">
            {{ user.corredora.empresa.representanteLegal.persona.telefono }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center" v-if="user.corredora.empresa.direccion">
          <h6 class="font-weight-normal">Dirección</h6>
          <p>{{ user.corredora.empresa.representanteLegal.persona.direccion.calle }}
            {{ user.corredora.empresa.representanteLegal.persona.direccion.numero }},
            {{ user.corredora.empresa.representanteLegal.persona.direccion.region }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="button-row d-flex" v-if="user.corredora.empresa || user.persona">
    <button class="btn bg-gradient-primary w-100 text-white" @click="enviarFormulario">Terminar Registro</button>
  </div>

</template>
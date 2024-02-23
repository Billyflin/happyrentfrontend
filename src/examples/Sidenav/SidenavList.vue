<template>
  <div class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item" v-if="authStore.isLoggedIn && authStore.isAdmin">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="dashboard"
          navText="Dashboard"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">dashboard</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="MisContratos"
                          navText="Mis Contratos">
          <template v-slot:icon>
            <span class="material-symbols-outlined  opacity-10 fs-5">contract</span>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="Propiedades"
                          navText="Propiedades">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="correoVerificado"
                          navText="CorreoVerificado">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="principalPlanes"
                          navText="LandingPage">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="formularioRegistro"
                          navText="FirstLogin">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="registroExitoso"
                          navText="Registro Exitoso">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="error"
                          navText="Error">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="notasdqwedasd"
                          navText="No encontrado">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>


      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder text-white ms-2">ACCOUNT PAGES</h6>
      </li>
      <li class="nav-item" v-if="authStore.isLoggedIn">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="profile" navText="Perfil">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">person</i>
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="" navText="Log out"
                          @click="authStore.userSignOut()">
          <template v-slot:icon>
            <i class="material-symbols-outlined opacity-10 fs-5">logout</i>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store'
import SidenavCollapse from './SidenavCollapse.vue'

const authStore = useAuthStore()
defineProps({
  cardBg: String
})
</script>

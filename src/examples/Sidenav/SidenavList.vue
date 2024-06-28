<template>
  <div id="sidenav-collapse-main" class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100">
    <ul class="navbar-nav">
      <li v-if="authStore.isLoggedIn && authStore.userInfo.authorities.some(item => (item.authority === 'ROLE_CORREDOR'|| 'ROLE_PROPIETARIO'))||authStore.isAdmin"
          class="nav-item">
        <sidenav-collapse
          :aria-controls="''"
          collapseRef="dashboard"
          navText="Dashboard"
          url="#"
          v-bind:collapse="false"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">dashboard</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          :aria-controls="''"
          collapseRef="Indicadores"
          navText="Indicadores"
          url="#"
          v-bind:collapse="false"
        >
          <template v-slot:icon>
            <span class="material-symbols-outlined  opacity-10 fs-5">account_balance</span>
          </template>
        </sidenav-collapse>
      </li>


      <li class="nav-item">
        <sidenav-collapse :aria-controls="''" collapseRef="MisContratos" navText="Mis Contratos" url="#"
                          v-bind:collapse="false">
          <template v-slot:icon>
            <span class="material-symbols-outlined  opacity-10 fs-5">contract</span>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse :aria-controls="''" collapseRef="Personas" navText="Personas" url="#"
                          v-bind:collapse="false">
          <template v-slot:icon>
            <span class="material-symbols-outlined  opacity-10 fs-5">groups</span>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse v-if="authStore.isLoggedIn && authStore.userInfo.authorities.some(item => item.authority === 'ROLE_CORREDOR')||authStore.isAdmin" :aria-controls="''" collapseRef="Solicitudes" navText="Solicitar Datos"
                          url="#"
                          v-bind:collapse="false">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">forward_to_inbox</i>
          </template>
        </sidenav-collapse>

      </li>
      <li class="nav-item">
        <sidenav-collapse :aria-controls="''" collapseRef="Propiedades" navText="Propiedades" url="#"
                          v-bind:collapse="false">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse v-if="authStore.isLoggedIn && authStore.userInfo.authorities.some(item => item.authority === 'ROLE_CORREDOR')||authStore.isAdmin" :aria-controls="''" collapseRef="Corredora" navText="Corredora"
                          url="#"
                          v-bind:collapse="false">
          <template v-slot:icon>
            <span class="material-symbols-outlined opacity-10 fs-5">apartment</span>
          </template>
        </sidenav-collapse>
      </li>
      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="principalPlanes"-->
      <!--                          navText="LandingPage">-->
      <!--          <template v-slot:icon>-->
      <!--            <i class="material-icons-round opacity-10 fs-5">house</i>-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="formularioRegistro"-->
      <!--                          navText="FirstLogin">-->
      <!--          <template v-slot:icon>-->
      <!--            <i class="material-icons-round opacity-10 fs-5">house</i>-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="formularioInvitado"-->
      <!--                          navText="Formulario invitado">-->
      <!--          <template v-slot:icon>-->
      <!--            <i class="material-icons-round opacity-10 fs-5">house</i>-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->


      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder text-white ms-2">CUENTA</h6>
      </li>
      <li v-if="authStore.isLoggedIn" class="nav-item">
        <sidenav-collapse :aria-controls="''" collapseRef="profile" navText="Perfil" url="#" v-bind:collapse="false">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">person</i>
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse v-if="authStore.isLoggedIn" :aria-controls="''" collapseRef="" navText="Cerrar Sesión" url="#"
                          v-bind:collapse="false"
                          @click="authStore.userSignOut()">
          <template v-slot:icon>
            <i class="material-symbols-outlined opacity-10 fs-5" style="color: #f44335 !important;">logout</i>
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

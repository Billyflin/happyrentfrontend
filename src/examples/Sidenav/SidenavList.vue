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
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="products"
                          navText="Productos">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">house</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="authStore.isLoggedIn">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="cart" navText="Carrito">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill"
                   viewBox="0 0 16 16">
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="authStore.isLoggedIn && authStore.isAdmin">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="tables" navText="Tables">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">table_view</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="contact" navText="Contact">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">table_view</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="authStore.isLoggedIn">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="billing" navText="Pago">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">receipt_long</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="authStore.isLoggedIn">
        <sidenav-collapse url="#" :aria-controls="''" v-bind:collapse="false" collapseRef="addProduct"
                          navText="Agregar producto">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">add_circle_outline</i>
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

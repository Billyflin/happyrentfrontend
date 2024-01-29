
<template>
  <sidenav :custom_class="color" :class="['fixed-start']" v-if="showSidenav" />
  <main class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden">
    <navbar
      :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :color="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="showNavbar"
    />
    <router-view />
    <app-footer v-show="showFooter" />
    <configurator :toggle="toggleConfigurator" :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']" />
  </main>
</template>

<script setup>
import {onBeforeMount} from 'vue'
import {storeToRefs} from 'pinia'
import Sidenav from './examples/Sidenav/index.vue'
import Configurator from '@/examples/Configurator.vue'
import Navbar from '@/examples/Navbars/Navbar.vue'
import AppFooter from '@/examples/Footer.vue'
import {useAppStore, useAuthStore} from '@/store/index.js'

const store = useAppStore()
const {
  color,
  isAbsolute,
  isNavFixed,
  navbarFixed,
  absolute,
  showSidenav,
  showNavbar,
  showFooter,
  showConfig,
  hideConfigButton,
} = storeToRefs(store)

const {navbarMinimize, toggleConfigurator} = store

const authStore = useAuthStore();

onBeforeMount(async() => {
  await authStore.getCurrentUser();
});


onBeforeMount(() => {
  store.isTransparent = 'bg-transparent'
  const sidenav = document.getElementsByClassName('g-sidenav-show')[0]

  if (window.innerWidth > 1200) {
    sidenav.classList.add('g-sidenav-pinned')
  }
})
</script>

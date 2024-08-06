<template>
  <sidenav v-if="showSidenav" :class="['fixed-start']" :custom_class="color" />
  <main class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden">
    <navbar
      v-if="showNavbar"
      :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :color="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
    />
    <router-view />
    <app-footer v-show="showFooter" />
    <configurator :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']" :toggle="toggleConfigurator" />
    <notifications />
  </main>
</template>
<script setup>
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/appStore.js'
import { useAuthStore } from '@/store/authStore.js'
import Sidenav from '@/components/Sidenav/index.vue'
import Configurator from '@/components/Configurator.vue'
import AppFooter from '@/components/Footer.vue'
import Navbar from '@/components/Navbars/Navbar.vue'
import Notifications from '@/views/Shared/Notifications.vue'

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
  hideConfigButton
} = storeToRefs(store)

const { navbarMinimize, toggleConfigurator } = store

const authStore = useAuthStore()

onBeforeMount(async () => {
  await authStore.fetchCurrentUser()
})


onBeforeMount(() => {
  store.isTransparent = 'bg-transparent'
  const sidenav = document.getElementsByClassName('g-sidenav-show')[0]

  if (window.innerWidth > 1200) {
    sidenav.classList.add('g-sidenav-pinned')
  }
})
</script>

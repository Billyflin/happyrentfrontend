<template>
  <aside
    id="sidenav-main"
    :class="`${sidebarType}`"
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 ms-3 fixed-start"
  >
    <div class="sidenav-header">
      <i
        id="iconSidenav"
        aria-hidden="true"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
      ></i>
      <a class="m-0 navbar-brand" href="/">
        <img
          :src="sidebarType === 'bg-white' || (sidebarType === 'bg-transparent' && !isDarkMode) ? logoDark : logo"
          alt="main_logo"
          class="navbar-brand-img h-100"
        />
        <!--        <span class="ms-2 font-weight-bold text-white">HappyRent</span>-->
      </a>
    </div>
    <hr class="horizontal light mt-0 mb-2" />
    <sidenav-list />
  </aside>
</template>

<script setup>
import SidenavList from './SidenavList.vue'
import logo from '@/assets/LogoHappBlanco.svg'
import logoDark from '@/assets/LogoHapp.svg'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/index.js'

const store = useAppStore()
const { sidebarType, isDarkMode } = storeToRefs(store)
</script>

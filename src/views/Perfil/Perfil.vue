<template>
  <div class="container-fluid mt-4">
    <div class="row mb-5">
      <div class="col-lg-2">
        <side-nav />
      </div>
      <div class="col-lg-10 mt-lg-0 mt-4">
        <side-nav-item />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import setNavPills from '@/assets/js/nav-pills.js'
import setTooltip from '@/assets/js/tooltip.js'
import SideNav from '@/views/Perfil/components/SideNav.vue'
import SideNavItem from '@/views/Perfil/components/SideNavItem.vue'


onMounted(() => {
  setNavPills()
  setTooltip()
})

onBeforeUnmount(() => {
})
</script>

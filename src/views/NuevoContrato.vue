<template>

  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
<!--        <nav-pill />-->
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-lg-2">
        <side-nav />
      </div>
      <div class="col-lg-10 mt-lg-0 mt-4">
        <side-nav-item />
      </div>
    </div>
  </div>
</template>

<script>
// import NavPill from "./components/NavPill.vue";
import SideNav from "./components/NuevoContrato/SideNav.vue";
import SideNavItem from "./components/NuevoContrato/SideNavItem.vue";
import {useAppStore} from '@/store/index.js'
export default {
  name: "Settings",
  components: {
    // NavPill,
    SideNav,
    SideNavItem,

  },
  mounted() {
    const store=useAppStore()
    store.showSidenav = false

  }
};
</script>

<template>
  <div class="fixed-plugin">
    <a class="px-3 py-2 fixed-plugin-button text-dark position-fixed" @click="props.toggle">
      <i class="material-icons py-2">settings</i>
      <!-- <i class="material-icons py-2">vertical_align_top</i> -->
    </a>
    <div class="shadow-lg card">
      <div class="pt-3 pb-0 bg-transparent card-header">
        <div class="float-start">
          <h5 class="mt-3 mb-0">Tema</h5>
        </div>
        <div class="mt-4 float-end" @click="props.toggle">
          <button class="p-0 btn btn-link text-dark fixed-plugin-close-button">
            <i class="material-icons">clear</i>
          </button>
        </div>
        <!-- End Toggle Button -->
      </div>
      <hr class="my-1 horizontal dark" />
      <div class="pt-0 card-body pt-sm-3">
        <!-- Sidebar Backgrounds -->
<!--        <div>-->
<!--          <h6 class="mb-0">Sidebar Colors</h6>-->
<!--        </div>-->
<!--        <a href="#" class="switch-trigger background-color">-->
<!--          <div class="my-2 badge-colors text-start">-->
<!--            <span class="badge filter bg-gradient-primary" data-color="primary" @click="sidebarColor('primary')"></span>-->
<!--            <span class="badge filter bg-gradient-happyLight" data-color="happLight" @click="sidebarColor('happLight')"></span>-->
<!--          </div>-->
<!--        </a>-->
        <!-- Sidenav Type -->
        <div class="mt-3">
          <h6 class="mb-0">Tema</h6>
        </div>
        <div class="d-flex">
          <button
            id="btn-dark"
            ref="btnDark"
            class="px-3 mb-2 btn bg-gradient-dark"
            :class="{active: sidebarType === 'bg-gradient-dark'}"
            @click="sidebar('bg-gradient-dark');sidebarColor('primary')"
          >
            Dark
          </button>
          <button
            id="btn-transparent"
            ref="btnTransparent"
            class="px-3 mb-2 btn bg-gradient-dark ms-2"
            :class="{active: sidebarType === 'bg-transparent', disabled: isBtnDisabled}"
            @click="sidebar('bg-transparent');sidebarColor('happLight')"
          >
            Transparent
          </button>
          <button
            id="btn-white"
            ref="btnWhite"
            class="px-3 mb-2 btn bg-gradient-dark ms-2"
            :class="{active: sidebarType === 'bg-white', disabled: isBtnDisabled}"
            @click="sidebar('bg-white');sidebarColor('happLight')"
          >
            White
          </button>
        </div>
        <p class="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>

        <!-- Navbar Fixed -->
        <hr class="horizontal dark my-3" />
        <div class="mt-2 d-flex">
          <h6 class="mb-0">Light / Dark</h6>
          <div class="form-check form-switch ps-0 ms-auto my-auto">
            <input
              class="form-check-input mt-1 ms-auto"
              type="checkbox"
              :checked="store.isDarkMode"
              @click="darkMode"
            />
          </div>
        </div>
        <hr class="horizontal dark my-sm-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref, onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'
import {storeToRefs} from 'pinia'
import {useAppStore} from '@/store/index.js'
import {activateDarkMode, deactivateDarkMode} from '@/assets/js/dark-mode'

const props = defineProps(['toggle'])
const route = useRoute()
const store = useAppStore()
let {isNavFixed} = storeToRefs(store)
const {setColor} = store

function sidebarColor(color = 'success') {
  document.querySelector('#sidenav-main').setAttribute('data-color', color)
  setColor(color)
}

function sidebar(type) {
  store.sidebarType = type
}

function setNavbarFixed() {
  if (route.name !== 'Profile') {
    isNavFixed = !isNavFixed
  }
}

function darkMode() {
  if (store.isDarkMode) {
    store.isDarkMode = false
    deactivateDarkMode()
    sidebar('bg-white');sidebarColor('happLight')

  } else {
    store.isDarkMode = true
    activateDarkMode()
    sidebar('bg-gradient-dark');sidebarColor('primary')
  }
}

const btnTransparent = ref(null)
const isBtnDisabled = ref(false)
const btnWhite = ref(null)

function sidenavTypeOnResize() {
  isBtnDisabled.value = window.innerWidth < 1200
}

const sidebarType = computed(() => {
  return store.sidebarType
})

onBeforeMount(() => {
  setNavbarFixed()
  window.addEventListener('resize', sidenavTypeOnResize)
  window.addEventListener('load', sidenavTypeOnResize)
})
</script>

<style scoped>
.bg-gradient-dark {
  border: 1px solid transparent !important;
}
.fixed-plugin-button {
  bottom: 220px !important;
}
</style>

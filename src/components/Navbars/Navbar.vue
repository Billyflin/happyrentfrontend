<template>
  <nav
    id="navbarBlur"
    :class="isAbsolute ? 'mt-4' : 'mt-0'"
    class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
    data-scroll="true"
    v-bind="$attrs"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :color="color" :currentPage="currentRouteName" />
      <div id="navbar" class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4">
        <div class="pe-md-3 d-flex align-items-center ms-md-auto">
          <!--          <material-input id="search" label="Search here" />-->
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <router-link
              :class="color ? color : 'text-body'"
              :to="{name: 'Profile'}"
              class="px-0 nav-link font-weight-bold lh-1"
            >
              <i class="material-icons me-sm-1"> account_circle </i>
            </router-link>
          </li>
          <li class="nav-item d-xxl-none ps-3 d-flex align-items-center">
            <a id="iconNavbarSidenav" class="p-0 nav-link text-body lh-1" href="#" @click="toggleSidebar">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li class="px-3 nav-item d-flex align-items-center">
            <a :class="color ? color : 'text-body'" class="p-0 nav-link lh-1" @click="toggleConfigurator">
              <i class="material-icons fixed-plugin-button-nav cursor-pointer"> settings </i>
            </a>
          </li>
          <li class="nav-item dropdown d-flex align-items-center pe-2">
            <a
              id="dropdownMenuButton"
              :class="[color ? color : 'text-body', showMenu ? 'show' : '']"
              aria-expanded="false"
              class="p-0 nav-link lh-1"
              data-bs-toggle="dropdown"
              href="#"
              @click="showMenu = !showMenu"
            >
              <i class="material-icons cursor-pointer"> notifications </i>
            </a>
            <ul
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
              class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4"
            >
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img alt="user image" class="avatar avatar-sm me-3" src="../../assets/img/Billyflin.jpg" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">New message</span> from Happ Rent
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img
                        alt="logo spotify"
                        class="avatar avatar-sm bg-gradient-dark me-3"
                        src="../../assets/img/small-logos/logo-spotify.svg"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">New album</span> by Travis Scott
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        1 day
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:">
                  <div class="py-1 d-flex">
                    <div class="my-auto avatar avatar-sm bg-gradient-secondary me-3">
                      <svg
                        height="12px"
                        viewBox="0 0 43 36"
                        width="12px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>credit-card</title>
                        <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                          <g fill="#FFFFFF" fill-rule="nonzero" transform="translate(-2169.000000, -745.000000)">
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(453.000000, 454.000000)">
                                <path
                                  class="color-background"
                                  d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                  opacity="0.593633743"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">Payment successfully completed</h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        2 days
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Breadcrumbs from '../Breadcrumbs.vue'
import { useAppStore } from '@/store/appStore.js'

const props = defineProps(['minNav', 'color'])
const store = useAppStore()
const { isAbsolute } = storeToRefs(store)
const { toggleConfigurator, navbarMinimize } = store

const route = useRoute()
let showMenu = ref(null)

onBeforeMount(() => {
  props.minNav
})

function toggleSidebar() {
  navbarMinimize()
}

const currentRouteName = computed(() => {
  return route.name
})
</script>
<template>
  <nav
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
    class="top-0 navbar navbar-expand-lg position-absolute z-index-3"
  >
    <div class="container px-0">
      <router-link
        :class="isBlur ? 'text-dark' : 'text-white'"
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        to="/dashboard"
        v-bind="$attrs"
      >
        HappyRent
      </router-link>
      <button
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler shadow-none ms-2"
        data-bs-target="#navigation"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div id="navigation" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link
              aria-current="page"
              class="nav-link d-flex align-items-center me-2 active"
              to="/products"
            >
              <i
                :class="isBlur ? 'text-dark' : 'text-white'"
                aria-hidden="true"
                class="material-icons-round opacity-6 me-1"
                >house</i
              >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/sign-up">
              <i
                :class="isBlur ? 'text-dark' : 'text-white'"
                aria-hidden="true"
                class="fas fa-user-circle opacity-6 me-1"
              ></i>
              Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/sign-in">
              <i
                :class="isBlur ? 'text-dark' : 'text-white'"
                aria-hidden="true"
                class="fas fa-key opacity-6 me-1"
              ></i>
              Sign In
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  btnBackground: String,
  isBlur: String,
  darkMode: {
    type: Boolean,
    default: false
  }
})

computed(() => {
  return {
    'text-dark': props.darkMode
  }
})
</script>

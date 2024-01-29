<template>
<nav
    class="top-0 navbar navbar-expand-lg position-absolute z-index-3"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
>
<div class="container px-0">
  <router-link
      class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
      to="/dashboard"
      v-bind="$attrs"
      :class="isBlur ? 'text-dark' : 'text-white'"
  >
        HappyRent
      </router-link>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navigation">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center me-2 active" aria-current="page" to="/products">
              <i

                class="material-icons-round opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              >house</i>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/sign-up">
              <i
                class="fas fa-user-circle opacity-6 me-1"
                aria-hidden="true"
                :class="isBlur ? 'text-dark' : 'text-white'"
              ></i>
              Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/sign-in">
              <i class="fas fa-key opacity-6 me-1" aria-hidden="true" :class="isBlur ? 'text-dark' : 'text-white'"></i>
              Sign In
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  btnBackground: String,
  isBlur: String,
  darkMode: {
    type: Boolean,
    default: false,
  },
})

computed(() => {
  return {
    'text-dark': props.darkMode,
  }
})
</script>

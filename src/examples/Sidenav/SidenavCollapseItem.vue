<template>
  <li class="nav-item">
    <a
      :href="`#${refer}`"
      aria-expanded="false"
      class="nav-link text-white"
      data-bs-toggle="collapse"
      @click="isExpanded = !isExpanded"
    >
      <span class="sidenav-mini-icon"> {{ miniIcon }} </span>
      <span class="sidenav-normal me-3 ms-2 ps-1"> {{ text }} <b class="caret"></b></span>
    </a>
    <div :class="isExpanded ? 'collapse show' : 'collapse'">
      <ul class="nav nav-sm flex-column">
        <slot name="nav-child-item" />
      </ul>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'

let isExpanded = ref(false)

defineProps({
  refer: {
    type: String,
    required: true
  },
  miniIcon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

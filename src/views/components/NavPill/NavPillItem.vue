<template>
  <li class="nav-item">
    <a class="nav-link mb-0 px-0 py-1 active active" data-bs-toggle="tab" :href="link" role="tab" aria-selected="true"
      >{{ tab }}
    </a>
  </li>
</template>

<script setup>
defineProps({
  ariaSelected: {
    type: Boolean,
    default: false,
  },
  tab: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>

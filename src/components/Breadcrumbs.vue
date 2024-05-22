<template>
  <nav aria-label="breadcrumb">
    <ol class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb me-sm-6">
      <li :class="color" class="text-sm breadcrumb-item">
        <a :class="color" class="opacity-8" href="#">Pages</a>
      </li>
      <li :class="color" aria-current="page" class="text-sm breadcrumb-item active">
        {{ currentPage }}
      </li>
    </ol>
    <h6 :class="color" class="mb-0 font-weight-bolder">
      {{ currentPage }}
    </h6>
  </nav>
</template>

<script setup>
defineProps({
  currentPage: {
    type: String,
    required: ''
  },
  color: {
    type: String,
    default: 'text-dark'
  }
})
</script>

<template>
  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">{{ date }}</h6>
      <span class="text-xs">{{ id }}</span>
    </div>
    <div class="d-flex align-items-center text-sm">
      {{ amount }}
      <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
        <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
        PDF
      </button>
    </div>
  </li>
</template>

<script setup>
defineProps({
  date: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
})
</script>

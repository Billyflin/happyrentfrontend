<template>
  <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex align-items-center">
      <material-button
        :color="color"
        variant="outline"
        size="sm"
        class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
      >
        <i class="fas" :class="icon" aria-hidden="true"></i>
      </material-button>
      <div class="d-flex flex-column">
        <h6 class="mb-1 text-dark text-sm">{{ trader }}</h6>
        <span class="text-xs">{{ date }}</span>
      </div>
    </div>
    <div class="d-flex align-items-center text-gradient text-sm font-weight-bold" :class="`text-${color}`">
      {{ transactionAmount }}
    </div>
  </li>
</template>

<script setup>
import MaterialButton from '@/components/MaterialButton.vue'
defineProps({
  color: {
    type: String,
    default: 'dark',
  },
  icon: {
    type: String,
  },
  trader: {
    type: String,
    default: 'Laulou',
  },
  date: {
    type: String,
    default: '5 July 2021, at 12:30 PM',
  },
  transactionAmount: {
    type: String,
    default: 'Pending',
  },
})
</script>

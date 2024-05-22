<script setup>
import { defineProps } from 'vue'

defineProps({
  category: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="card p-0 position-relative mt-n4 mx-3 z-index-2">
        <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
          <h6 class="text-white text-capitalize ps-3">{{ category }}</h6>
        </div>
      </div>
      <div class="card-body row">
      </div>
    </div>
  </div>
</template>
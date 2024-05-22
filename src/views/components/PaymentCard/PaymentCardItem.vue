<template>
  <div class="col-md-6 mb-md-0 mb-4">
    <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
      <img :src="src" alt="logo" class="w-10 me-3 mb-0" />
      <h6 class="mb-0">{{ paymentCardNumber }}</h6>
      <i
        aria-hidden="true"
        aria-label="Edit Card"
        class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
        data-bs-original-title="Edit Card"
        data-bs-placement="top"
        data-bs-toggle="tooltip"
        title
      ></i>
      <span class="sr-only">Edit Card</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  paymentCardNumber: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="col-md-6 mb-md-0 mb-4">
    <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
      <img class="w-10 me-3 mb-0" :src="src" alt="logo" />
      <h6 class="mb-0">{{ paymentCardNumber }}</h6>
      <i
        class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title
        aria-hidden="true"
        data-bs-original-title="Edit Card"
        aria-label="Edit Card"
      ></i>
      <span class="sr-only">Edit Card</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  paymentCardNumber: {
    type: String,
    required: true,
  },
})
</script>

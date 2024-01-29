<template>
  <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg" :class="{'mt-3': !isFisrt}">
    <div class="d-flex flex-column">
      <h6 class="mb-3 text-sm">{{ name }}</h6>
      <span class="mb-2 text-xs">
        Company Name:
        <span class="text-dark font-weight-bold ms-sm-2">{{ companyName }}</span>
      </span>
      <span class="mb-2 text-xs">
        Email Address:
        <span class="text-dark ms-sm-2 font-weight-bold">{{ emailAddress }}</span>
      </span>
      <span class="text-xs">
        VAT Number:
        <span class="text-dark ms-sm-2 font-weight-bold">{{ VATNumber }}</span>
      </span>
    </div>
    <div class="ms-auto text-end">
      <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
      </a>
      <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
        <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
      </a>
    </div>
  </li>
</template>

<script setup>
defineProps({
  isFisrt: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: 'Laulou',
  },
  companyName: {
    type: String,
    default: 'No company',
  },
  emailAddress: {
    type: String,
    default: 'No email',
  },
  VATNumber: {
    type: String,
    default: 'No VAT',
  },
})
</script>

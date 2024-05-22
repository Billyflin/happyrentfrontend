<template>
  <li class="px-0 mb-2 border-0 list-group-item d-flex align-items-center">
    <material-avatar :img="avatar" alt="kal" border-radius="lg" class="me-3" shadow="regular" />
    <div class="d-flex align-items-start flex-column justify-content-center">
      <h6 class="mb-0 text-sm">{{ name }}</h6>
      <p class="mb-0 text-xs">{{ info }}.</p>
    </div>
    <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" href="javascript:">Responder</a>
  </li>
</template>

<script setup>
import MaterialAvatar from '@/components/MaterialAvatar.vue'

defineProps({
  avatar: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  info: {
    type: String,
    default: ''
  }
})
</script>

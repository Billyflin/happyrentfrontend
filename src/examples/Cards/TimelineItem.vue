<template>
  <div class="mb-3 timeline-block">
    <span :class="`bg-${color}`" class="timeline-step p-3">
      <i :class="icon.color" class="material-icons opacity-10">{{ icon.component }}</i>
    </span>
    <div class="timeline-content">
      <h6 :class="$parent.darkMode ? 'text-white' : 'text-dark'" class="mb-0 text-sm font-weight-bold">
        {{ title }}
      </h6>
      <p class="mt-1 mb-0 text-xs text-secondary font-weight-normal">
        {{ dateTime }}
      </p>
      <p v-if="description" :class="$parent.darkMode ? 'text-white' : 'text-dark'" class="mt-3 mb-2 text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    component: String,
    color: String,
    default: () => {
    }
  },
  title: {
    type: String,
    default: ''
  },
  dateTime: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div :class="darkMode ? 'bg-gradient-dark' : ''" class="card">
    <div :class="darkMode ? 'bg-transparent' : ''" class="pb-0 card-header">
      <h6 :class="darkMode ? 'text-white' : ''">{{ title }}</h6>
      <!--  eslint-disable-next-line vue/no-v-html -->
      <p class="text-sm" v-html="description"></p>
    </div>
    <div class="p-3 card-body">
      <div :data-timeline-axis-style="darkMode ? 'dashed' : 'dotted'" class="timeline timeline-one-side">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  darkMode: {
    type: Boolean,
    default: false
  }
})
</script>

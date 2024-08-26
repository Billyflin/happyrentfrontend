<template>
  <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
    <div class="multisteps-form__progress">
      <button
        v-for="(step, index) in steps"
        :key="index"
        :class="{ 'js-active': activeStep >= index }"
        class="multisteps-form__progress-btn"
        @click="$emit('update:active-step', index)"
      >
        <span>{{ step.title }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiStepsFormProgress',
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      required: true
    }
  }
}
</script>

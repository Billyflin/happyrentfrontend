<template>
  <div class="progress">
    <div
        class="progress-bar"
        :class="getClasses(color, variant)"
        :style="{ width: modelValue + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "MaterialProgress",
  props: {
    color: {
      type: String,
      default: "success",
    },
    variant: {
      type: String,
      default: "fill",
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getClasses: (color, variant) => {
      let colorValue;

      if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
      } else {
        colorValue = `bg-${color}`;
      }

      return `${colorValue}`;
    },
  },
  watch: {
    modelValue(newVal) {
      this.$emit('update:modelValue', newVal);
    },
  },
};
</script>

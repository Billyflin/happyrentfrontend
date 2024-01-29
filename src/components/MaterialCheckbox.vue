<template>
  <div class="form-check p-0">
    <input
        :id="id"
        class="form-check-input"
        type="checkbox"
        :name="name"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="id" class="custom-control-label">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "MaterialCheckbox",
  props: {
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    modelValue: Boolean,
  },
};
</script>

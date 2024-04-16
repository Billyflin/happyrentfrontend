<template>
  <div
    class="input-group"
    :class="`input-group-${variant} ${status}`"
  >
    <label :class="variant === 'static' ? '' : 'form-label'">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      class="form-control"
      :class="classes"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :required="isRequired"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import setMaterialInput from "@/assets/js/material-input.js";

export default {
  name: "MaterialInput",
  props: {
    modelValue: {
      type:  [Number, String],
      default: "",
    },
    variant: {
      type: String,
      default: "outline",
    },
    label: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "default",
    },
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    setMaterialInput();
  },
  computed: {
    classes() {
      return this.size ? `form-control-${this.size}` : null;
    },
    status() {
      if (this.success) {
        return "is-valid";
      } else if (this.error) {
        return "is-invalid";
      } else {
        return null;
      }
    },
  },
};
</script>

<template>
  <div class="form-check form-switch d-flex">
    <input
      :id="id"
      class="form-check-input"
      :class="$attrs.class"
      type="checkbox"
      :name="name"
      :checked="checked"
      @change="updateValue"
    />
    <label class="form-check-label ms-3" :class="labelClass" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "MaterialSwitch",
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    labelClass: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('update:checked', event.target.checked);
      this.$emit('update:modelValue', event.target.checked);
    }
  }
};
</script>

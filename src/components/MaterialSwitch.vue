<template>
  <div class="form-check form-switch d-flex">
    <input
      :id="id"
      :checked="checked"
      :class="$attrs.class"
      :name="name"
      class="form-check-input"
      type="checkbox"
      @change="updateValue"
    />
    <label :class="labelClass" :for="id" class="form-check-label ms-3">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'MaterialSwitch',
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:checked', event.target.checked)
      this.$emit('update:modelValue', event.target.checked)
    }
  }
}
</script>

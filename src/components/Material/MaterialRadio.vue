<template>
  <div class="form-check">
    <input :id="id" :checked="checked" :name="name" class="form-check-input" type="radio" />
    <label :for="id" class="custom-control-label">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'MaterialRadio',
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
    }
  }
}
</script>

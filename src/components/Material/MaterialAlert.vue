<template>
  <div :class="getClasses(color, dismissible)" class="alert text-white" role="alert">
    <span class="alert-icon">
      <i :class="getIcon(icon)" />
    </span>
    <span class="alert-text">
      {{ icon && '&nbsp;' }}
      <slot />
    </span>
    <button
      v-if="dismissible"
      aria-label="Close"
      class="btn-close d-flex justify-content-center align-items-center"
      data-bs-dismiss="alert"
      type="button"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MaterialAlert',
  props: {
    color: {
      type: String,
      default: 'success'
    },
    icon: {
      type: String,
      default: ''
    },
    dismissible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getClasses: (color, dismissible) => {
      let colorValue, dismissibleValue

      colorValue = color ? `alert-${color}` : null

      dismissibleValue = dismissible ? 'alert-dismissible fade show' : null

      return `${colorValue} ${dismissibleValue}`
    },
    getIcon: (icon) => (icon ? icon : null)
  }
}
</script>

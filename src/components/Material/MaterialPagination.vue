<template>
  <ul :class="getClasses(color, size)" class="pagination">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'MaterialPagination',
  props: {
    color: {
      type: String,
      default: 'success'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  methods: {
    getClasses: (color, size) => {
      let colorValue, sizeValue

      colorValue = color ? `pagination-${color}` : null
      sizeValue = size ? `pagination-${size}` : null

      return `${colorValue} ${sizeValue}`
    }
  }
}
</script>

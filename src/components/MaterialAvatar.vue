<template>
  <div :class="getSize(size)" class="avatar">
    <img
      :alt="alt"
      :class="[getClasses(shadow, circular, borderRadius)]"
      :src="img"
    />
  </div>
</template>

<script>
export default {
  name: 'MaterialAvatar',
  props: {
    img: {
      type: [String, Object],
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    shadow: {
      type: String,
      default: ''
    },
    borderRadius: {
      type: String,
      default: ''
    },
    circular: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getSize: (size) => (size ? `avatar-${size}` : null),
    getClasses: (shadow, circular, borderRadius) => {
      let shadowValue, circularValue, borderRadiusValue

      if (shadow) {
        shadowValue = shadow === 'regular' ? 'shadow' : `shadow-${shadow}`
      } else {
        shadowValue = null
      }

      circularValue = circular ? 'rounded-circle' : null

      borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null

      return `${shadowValue} ${circularValue} ${borderRadiusValue}`
    }
  }
}
</script>

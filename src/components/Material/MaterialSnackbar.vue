<template>
  <div :class="getColor(color)" class="toast fade show p-2 mt-2">
    <div class="toast-header bg-transparent border-0">
      <i :class="getIcon(icon.color)" class="material-icons me-2">{{
          icon.component
        }}</i>
      <span :class="getTextColor(color)" class="me-auto font-weight-bold">
        {{ title }}
      </span>
      <small :class="getTextColor(color)">{{ date }}</small>
      <i
        :class="getTextColor(color)"
        class="fas fa-times text-md ms-3 cursor-pointer"
        @click="closeHandler"
      />
    </div>
    <hr :class="getHrColor(color)" class="horizontal dark m-0" />
    <div :class="getTextColor(color)" class="toast-body">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'MaterialSnackbar',
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      component: String,
      color: String,
      default: () => {
      }
    },
    color: {
      type: String,
      default: 'success'
    },

    closeHandler: {
      type: Function,
      default: () => {
      }
    }
  },
  methods: {
    getColor: (color) => {
      let colorValue

      if (color === 'white') {
        colorValue = 'bg-white'
      } else {
        colorValue = `bg-gradient-${color}`
      }

      return colorValue
    },
    getIcon: (iconColor) => (iconColor ? `text-${iconColor}` : null),
    getTextColor: (color) => (color === 'white' ? 'text-dark' : 'text-white'),
    getHrColor: (color) => (color === 'white' ? 'dark' : 'light')
  }
}
</script>

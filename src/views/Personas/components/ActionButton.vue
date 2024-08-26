<template>
  <button @click="handleClick" class="btn btn-primary btn-sm d-flex align-items-center justify-content-center">
    <span class="material-symbols-outlined mr-3" style="font-size: 16px; margin-right: 10px;">{{ icon }}</span>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: String,
    icon: String,
    onClick: Function,
  },
  methods: {
    handleClick() {
      this.onClick();
    }
  }
}
</script>

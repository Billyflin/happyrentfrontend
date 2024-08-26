<template>
  <div class="input-group mb-3">
    <button
      class="btn btn-outline-secondary dropdown-toggle"
      data-bs-toggle="dropdown"
      type="button"
    >
      {{ modelValue }}
    </button>
    <ul class="dropdown-menu border border-radius-lg">
      <li v-for="item in items" :key="item">
        <a class="dropdown-item" href="#" @click="selectItem(item)">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MaterialDropdownCuentas',
  props: {
    modelValue: {
      type: String,
      default: 'Pesos'
    },
    items: {
      type: Array,
      default: () => ['UF', 'Dolar', 'Pesos']
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('update:modelValue', item)
    }
  }
}
</script>

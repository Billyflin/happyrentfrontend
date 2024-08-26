<template>
  <div class="input-group mb-3">
    <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
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
  name: 'MaterialDropdown',
  props: {
    modelValue: {
      type: [String,Number],
      default: 'Pesos'
    },
    items: {
      type: Array,
      default: () => ['UF', 'Dólares', 'Pesos']
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('update:modelValue', item);
    }
  }
};
</script>

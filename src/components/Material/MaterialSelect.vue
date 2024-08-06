<template>
  <div class="col mb-3 input-group-static input-group">
    <label :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="form-control-default form-control" :aria-label="label">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>


<script>
export default {
  name: 'MaterialSelect',
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue(newVal) {
      this.$emit('update:modelValue', newVal);
    }
  },
  mounted() {
    if (!this.modelValue && this.options.length > 0) {
      this.$emit('update:modelValue', this.options[0].value);
    }
  }
};
</script>
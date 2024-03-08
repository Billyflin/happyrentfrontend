<template>
  <div>
    <label class="form-label" :for="id">{{ label }}</label>
    <select ref="choicesElement" :name="name" :id="id" :multiple="isMultiple" @change="emitValue">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import Choices from 'choices.js';

export default {
  name: 'MaterialChoices',
  emits: ['change', 'update:modelValue'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [String, Number, Object],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.choices = new Choices(this.$refs.choicesElement, {
      allowHTML: true,
    });
  },
  watch: {
    disabled(value) {
      if (value) {
        this.choices.disable();
      } else {
        this.choices.enable();
      }
    },
    options(value) {
      console.log(value);
      this.choices.setChoices(value, 'value', 'text', true);
      const selectedValue = this.choices.getValue();
      this.$emit('update:modelValue', selectedValue);
    }
  },
  beforeDestroy() {
    this.choices.destroy();
  },
  methods: {
    emitValue() {
      const selectedValue = this.choices.getValue();
      this.$emit('update:modelValue', selectedValue);
    }
  }
}
</script>
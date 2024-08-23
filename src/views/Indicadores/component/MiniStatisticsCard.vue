<template>
  <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
    <div :class="directionReverse ? reverseDirection : ''" class="card mb-2">
      <div class="card-header p-3 pt-2">
        <div
          :class="`bg-gradient-${icon.background} shadow-${icon.background}`"
          class="icon icon-lg icon-shape shadow text-white text-center border-radius-xl mt-n4 position-absolute d-flex align-items-center justify-content-center"
          style="font-family: 'Roboto', sans-serif; font-size: larger"
        >
          {{ title }}
        </div>
        <div class="pt-1 text-end">
          <p class="text-sm mb-0 text-capitalize">{{ title }}</p>
          <h4 class="mb-0">{{ lastValue }}</h4>
        </div>
      </div>
      <div class="card-footer p-3 text-end">
        <p class="text-sm mb-0" v-html="footerText"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  icon: {
    type: Object,
    required: true,
    default: () => ({
      color: 'text-white',
      background: 'success'
    })
  },
  directionReverse: {
    type: Boolean,
    default: false
  }
})

// Clase para cambiar la dirección de los iconos
const reverseDirection = 'flex-row-reverse justify-content-between'

// Computed para obtener el último valor y el penúltimo valor
const lastValue = computed(() => {
  return props.data[0].valor // El último valor (primero en la lista después de ordenar)
})

const secondLastValue = computed(() => {
  return props.data[1].valor // El penúltimo valor (segundo en la lista después de ordenar)
})

// Computed para calcular el cambio entre los dos últimos valores
const change = computed(() => {
  return lastValue.value - secondLastValue.value
})

// Computed para calcular el porcentaje de cambio entre los dos últimos valores
const changePercentage = computed(() => {
  let percentageChange = (change.value / secondLastValue.value) * 100
  return percentageChange.toFixed(2) // Redondea a 2 decimales
})

// Computed para generar el texto del footer basado en el cambio
const footerText = computed(() => {
  if (props.title === 'IPC') {
    return `<span class='${change.value >= 0 ? 'text-success' : 'text-danger'} text-sm font-weight-bolder'> ${change.value.toFixed(1)} </span> ${change.value >= 0 ? 'más' : 'menos'} que el mes pasado`
  } else {
    return `<span class='${change.value >= 0 ? 'text-success' : 'text-danger'} text-sm font-weight-bolder'> ${changePercentage.value}% </span> ${change.value >= 0 ? 'más' : 'menos'} que ayer`
  }
})
</script>

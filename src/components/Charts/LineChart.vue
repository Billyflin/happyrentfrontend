<template>
  <div class="chart">
    <div :id="id" :style="{width: '100%', height: height + 'px'}" class="chart-canvas"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  id: {
    type: String,
    default: 'line-chart'
  },
  height: {
    type: [Number, String],
    default: '170'
  },
  roundedTo: {
    type: Number,
    default: 0
  },
  data: {
    type: Array,
    required: true
  }
})

let echart

const createChart = () => {
  const chartDom = document.getElementById(props.id)
  if (!chartDom) return
  echart = echarts.init(chartDom)

  // Mapea los datos para el eje X y el eje Y
  const xAxisData = props.data.map(obs => new Date(obs.date).toLocaleDateString())

  let lastValidValue = 0
  const chartData = props.data.map(obs => {
    const value = parseFloat(obs.valor)
    if (isNaN(value)) {
      return lastValidValue
    } else {
      lastValidValue = value
      return value
    }
  })

  const yAxisMaxValue = (props.roundedTo !== 0) ? Math.round(Math.max(...chartData) + props.roundedTo) : Math.max(...chartData)
  const yAxisMinValue = (props.roundedTo !== 0) ? Math.round(Math.min(...chartData) - props.roundedTo) : Math.min(...chartData)

  const option = {
    grid: {
      left: '10',
      right: '20',
      bottom: '8%',
      top: '12%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: {
        color: '#fff'
      },
      borderWidth: 0,
      axisPointer: {
        type: 'none'
      }
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      boundaryGap: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#f8f9fa',
        margin: 20,
        padding: 2,
        fontSize: 14,
        fontWeight: 300,
        fontFamily: 'Roboto',
        lineHeight: 2
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255, 255, 255, .2)',
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'value',
      splitNumber: 3,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#fff',
        padding: 0,
        fontSize: 14,
        fontWeight: 300,
        fontFamily: 'Roboto',
        lineHeight: 2
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, .4)',
          type: 'dashed'
        }
      },
      min: yAxisMinValue,
      max: yAxisMaxValue
    },
    series: [
      {
        name: 'valor',
        data: chartData,
        type: 'line',
        barMaxWidth: 6,
        symbolSize: 10,
        itemStyle: {
          color: 'rgba(255, 255, 255)',
          opacity: 0.8
        },
        lineStyle: {
          color: 'rgba(255, 255, 255)',
          opacity: 0.8,
          width: 4
        },
        areaStyle: {
          color: 'transparent'
        },
        emphasis: {
          scale: 0.8
        }
      }
    ]
  }

  option && echart.setOption(option)
}

onMounted(() => {
  createChart()

  window.addEventListener('resize', () => {
    if (echart) {
      setTimeout(echart.resize, 200)
    }
  })
})

// Reactivar la creación del gráfico si cambian los datos
watch(() => props.data, (newData, oldData) => {
  if (echart && newData !== oldData) {
    createChart()
  }
}, { deep: true })
</script>

<style scoped>
.chart-canvas {
  width: 100%;
}
</style>

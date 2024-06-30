<template>
  <div class="chart">
    <div :id="id" :style="{ width: '100%', height: height + 'px' }" class="chart-canvas"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  id: {
    type: String,
    default: 'radar-chart'
  },
  height: {
    type: [Number, String],
    default: '400'
  },
  data: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  const chartDom = document.getElementById(props.id)
  const echart = echarts.init(chartDom)
  window.addEventListener('resize', () => setTimeout(echart.resize, 200))

  const option = {
    tooltip: {},
    radar: {
      indicator: props.data.indicator,
      shape: 'circle',
      splitNumber: 5,
      name: {
        textStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },
    series: [{
      name: props.data.name,
      type: 'radar',
      data: props.data.series
    }]
  }

  echart.setOption(option)
})
</script>

<style scoped>
.chart-canvas {
  width: 100%;
}
</style>

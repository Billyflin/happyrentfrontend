<template>
  <div class="chart">
    <div :id="id" :style="{ width: '100%', height: height + 'px' }" class="chart-canvas"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  id: {
    type: String,
    default: 'bar-chart-dashboard'
  },
  height: {
    type: [Number, String],
    default: '300'
  },
  chart: {
    type: Object,
    required: true
  }
})

let echart

const themeColors = [
  '#63b3ed', // blue
  '#596cff', // indigo
  '#6f42c1', // purple
  '#d63384', // pink
  '#f56565', // red
  '#e91e63', // rose
  '#fd7e14', // orange
  '#ffe533', // yellow
  '#81e6d9', // green
  '#20c997', // teal
  '#0dcaf0', // cyan
  '#13505B', // primary
  '#6f6f67', // secondary
  '#1a73e8', // info
  '#4caf50', // success
  '#bedc4b', // happLight
  '#135652', // happDark
  '#fb8c00', // warning
  '#f44335' // danger
]

// Crear una lista ponderada de colores para aumentar la probabilidad de primary y happLight
const weightedColors = [
  '#13505B', '#13505B', '#13505B','#13505B','#13505B','#13505B', // primary más probable
  '#bedc4b', '#bedc4b', '#bedc4b','#bedc4b','#bedc4b','#bedc4b', // happLight más probable
  ...themeColors
]

let lastColor = '';
let secondLastColor = '';
const getRandomColor = () => {
  let color;
  let colorIndex;

  do {
    colorIndex = Math.floor(Math.random() * weightedColors.length);
    color = weightedColors[colorIndex];
  } while (
  (color === lastColor )
  );


  secondLastColor = lastColor;
  lastColor = color;

  return color;
};

const renderChart = () => {
  if (!props.chart.datasets || !Array.isArray(props.chart.datasets.data)) {
    console.error('Invalid data format for BarChartDashboard')
    return
  }

  const chartDom = document.getElementById(props.id)
  echart = echarts.init(chartDom)
  window.addEventListener('resize', () => setTimeout(echart.resize, 200))

  const xAxislDatas = props.chart.xAxislDatas
  const data = props.chart.datasets.data
  const label = props.chart.datasets.label

  const option = {
    grid: {
      left: '8',
      right: '8',
      bottom: '2%',
      top: '4%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
      },
      borderWidth: 0,
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: xAxislDatas,
      axisLine: {
        show: true,
        lineStyle: {
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        padding: 10,
        fontSize: 14,
        fontWeight: 300,
        fontFamily: 'Roboto',
        lineHeight: 2
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'value',
      splitNumber: 3,
      axisLine: {
        show: true,
        lineStyle: {
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        padding: 5,
        fontSize: 14,
        fontWeight: 300,
        fontFamily: 'Roboto',
        lineHeight: 2
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      },
      min: 0,
      max: Math.max(...data) < 100 ? Math.max(...data) + 10 : Math.ceil(Math.max(...data) / 100) * 100
    },
    series: [
      {
        name: label,
        data: data,
        type: 'bar',
        barMaxWidth: 30,
        itemStyle: {
          borderWidth: 0,
          borderRadius: 4,
          color: function(params) {
            return getRandomColor()
          }
        }
      }
    ]
  }

  echart.setOption(option)
}

onMounted(() => {
  renderChart()
})

watch(() => props.chart, () => {
  renderChart()
}, { deep: true })
</script>

<style scoped>
.chart-canvas {
  width: 100%;
}
</style>

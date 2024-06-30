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
    default: 'line-chart'
  },
  height: {
    type: [Number, String],
    default: '170'
  },
  yAxisMin: {
    type: Number,
    default: 0
  },
  yAxisMax: {
    type: Number,
    default: null
  },
  data: {
    type: [Array, Object],
    required: true
  }
})

let echart;

const renderChart = () => {
  let xAxislDatas = [];
  let chartData = [];

  if (Array.isArray(props.data)) {
    // Si los datos son un array, procesarlos directamente
    xAxislDatas = props.data.map(obs => obs.indexDateString);
    chartData = props.data.map(obs => parseFloat(obs.value));
  } else if (typeof props.data === 'object') {
    // Si los datos son un objeto, asumir que están en el formato adecuado
    if (props.data.xAxislDatas && props.data.datasets && Array.isArray(props.data.datasets.data)) {
      xAxislDatas = props.data.xAxislDatas;
      chartData = props.data.datasets.data;
    } else {
      console.error("Invalid data format for LineChart");
      return;
    }
  } else {
    console.error("Invalid data type for LineChart");
    return;
  }

  const chartDom = document.getElementById(props.id);
  echart = echarts.init(chartDom);
  window.addEventListener('resize', () => setTimeout(echart.resize, 200));

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
      data: xAxislDatas,
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
      min: props.yAxisMin,
      max: props.yAxisMax !== null ? props.yAxisMax : Math.max(...chartData) < 100 ? Math.max(...chartData) + 10 : (Math.ceil(Math.max(...chartData) / 100) + 1) * 100
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

  echart.setOption(option);
}

onMounted(() => {
  renderChart();
})

watch(() => props.data, () => {
  renderChart();
}, { deep: true });
</script>

<style scoped>
.chart-canvas {
  width: 100%;
}
</style>



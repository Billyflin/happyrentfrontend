<template>
  <div class="chart">
    <canvas :id="id" :height="height" class="chart-canvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'PieChart',
  props: {
    id: {
      type: String,
      default: 'chart-pie'
    },
    height: {
      type: [String, Number],
      default: '200'
    },
    chart: {
      type: Object,
      required: true
    },
    isBooleanChart: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.renderChart()
  },
  watch: {
    chart: {
      handler() {
        this.renderChart()
      },
      deep: true
    }
  },
  methods: {
    renderChart() {
      const pieChart = document.getElementById(this.id).getContext('2d')

      // Destroy any existing chart instance
      const existingChart = Chart.getChart(this.id)
      if (existingChart) {
        existingChart.destroy()
      }

      // Define the theme colors
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
        '#fb8c00', // warning
        '#f44335' // danger
      ]

      // Crear una lista ponderada de colores para aumentar la probabilidad de primary y happLight
      const weightedColors = [
        '#13505B',
        '#13505B',
        '#13505B', // primary más probable
        '#bedc4b',
        '#bedc4b',
        '#bedc4b', // happLight más probable
        ...themeColors
      ]

      let lastColor = ''
      const getRandomColor = () => {
        let color
        let colorIndex

        do {
          colorIndex = Math.floor(Math.random() * weightedColors.length)
          color = weightedColors[colorIndex]
        } while (color === lastColor)

        lastColor = color

        return color
      }
      // Set colors based on isBooleanChart prop
      let backgroundColors
      if (this.isBooleanChart) {
        backgroundColors = this.chart.labels.map((label) =>
          label.toLowerCase() === 'activo' ||
          label.toLowerCase() === 'sí' ||
          label.toLowerCase() === 'arrendado'
            ? '#4caf50'
            : '#f44335'
        )
      } else {
        backgroundColors = this.chart.labels.map(() => getRandomColor())
      }

      new Chart(pieChart, {
        type: 'pie',
        data: {
          labels: this.chart.labels,
          datasets: [
            {
              label: this.chart.datasets.label,
              data: this.chart.datasets.data,
              backgroundColor: backgroundColors
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.chart-canvas {
  width: 100%;
}
</style>

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
        '#135652', // happDark
        '#fb8c00', // warning
        '#f44335' // danger
      ]

      // Function to shuffle array
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]
        }
        return array
      }

      // Set colors based on isBooleanChart prop
      let backgroundColors
      if (this.isBooleanChart) {
        backgroundColors = this.chart.labels.map(label =>
          label.toLowerCase() === 'activo' || label.toLowerCase() === 'sí' || label.toLowerCase() === 'arrendado' ? '#4caf50' : '#f44335'
        )
      } else {
        const shuffledColors = shuffleArray([...themeColors])
        backgroundColors = shuffledColors.slice(0, this.chart.datasets.data.length)
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

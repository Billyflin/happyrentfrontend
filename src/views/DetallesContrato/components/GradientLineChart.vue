<template>
  <div class="chart">
    <canvas :id="id" :height="height" class="chart-canvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'GradientLineChart',
  props: {
    id: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '300'
    },
    chart: {
      type: Object,
      required: true
    }
  },
  computed: {
    gradient() {
      const ctx = document.getElementById(this.id).getContext('2d')
      const gradient = ctx.createLinearGradient(0, 230, 0, 50)

      gradient.addColorStop(1, 'rgba(203,12,159,0.2)')
      gradient.addColorStop(0.2, 'rgba(72,72,176,0.0)')
      gradient.addColorStop(0, 'rgba(203,12,159,0)')

      return gradient
    }
  },
  mounted() {
    const ctx = document.getElementById(this.id).getContext('2d')

    // Destruir el gráfico existente para evitar duplicados
    const existingChart = Chart.getChart(this.id)
    if (existingChart) {
      existingChart.destroy()
    }

    // Crear el nuevo gráfico
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.chart.labels,
        datasets: this.chart.datasets.map((dataset, index) => ({
          ...dataset,
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 0,
          borderColor: index === 0 ? '#e91e63' : '#3A416F',
          backgroundColor: this.gradient,
          fill: true,
          maxBarThickness: 6
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf',
              font: {
                size: 11,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2
              }
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 20,
              font: {
                size: 11,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2
              }
            }
          }
        }
      }
    })
  }
}
</script>

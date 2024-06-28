<template>
  <div class="chart">
    <canvas :id="id" :height="height" class="chart-canvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

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
    }
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    chart: {
      handler() {
        this.renderChart();
      },
      deep: true
    }
  },
  methods: {
    renderChart() {
      const pieChart = document.getElementById(this.id).getContext('2d');

      // Destroy any existing chart instance
      const existingChart = Chart.getChart(this.id);
      if (existingChart) {
        existingChart.destroy();
      }

      // Function to generate random color
      const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

      // Generate random colors for each data point
      const backgroundColors = this.chart.datasets.data.map(() => getRandomColor());

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
      });
    }
  }
};
</script>

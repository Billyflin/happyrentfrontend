<template>
  <div class="card z-index-2 mt-4">
    <div class="card-header p-3 pt-2">
      <div
        class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 me-3 float-start"
      >
        <i class="material-icons opacity-10">show_chart</i>
      </div>
      <div class="d-block d-md-flex">
        <div class="me-auto">
          <h6 class="mb-0">Grafico de reajuste</h6>
        </div>
        <!--                <span-->
        <!--                  class="badge badge-lg badge-dot me-4 d-inline-block text-start"-->
        <!--                >-->
        <!--                <i class="bg-success"></i>-->
        <!--                <span class="text-dark">Pagos Recibidos</span>-->
        <!--              </span>-->
        <span class="badge badge-lg badge-dot me-4 d-inline-block text-start">
          <i class="bg-dark"></i>
          <span class="text-dark">Renta</span>
        </span>
      </div>
    </div>
    <div class="p-3 card-body">
      <gradient-line-chart
        id="chart-line"
        :chart="{
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Renta',
              data: [300000, 300000, 300000, 300000, 300000, 300000, 305100, 305100, 305100]
            }
          ]
        }"
        title="Line chart with gradient"
      />
    </div>
  </div>
</template>
<script>
import GradientLineChart from '@/views/DetallesContrato/components/GradientLineChart.vue'

export default {
  name: 'GraficoReajuste',
  components: { GradientLineChart }
}
</script>

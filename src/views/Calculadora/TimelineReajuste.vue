<template>
  <div v-if="monthlyAdjustments.length > 0">
    <h4>Reajustes Mensuales:</h4>
    <div class="list-group">
      <div
        v-for="(adjustment, index) in monthlyAdjustments"
        :key="index"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto text-sm">
          <div class="fw-bold text-dark">{{ adjustment.month }}</div>
          Valor Inicial: {{ adjustment.initialPrice.toFixed(2) }} CLP<br>
          IPC: {{ adjustment.ipcValue }}%<br>
          Reajuste: {{ adjustment.adjustmentValue.toFixed(2) }} CLP<br>
          Valor Ajustado: {{ adjustment.adjustedPrice.toFixed(2) }} CLP
        </div>
        <span class="badge bg-primary rounded-pill">mes {{ index + 1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineReajuste',
  props: {
    monthlyAdjustments: {
      type: Array,
      required: true
    }
  }
}
</script>

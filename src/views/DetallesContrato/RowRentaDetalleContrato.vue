<template>

  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <h6 class="text-muted font-weight-normal mb-0">Renta</h6>
          <h2 class="mb-0">{{ formatCurrency(renta, moneda) }} {{ getCurrencyCode(moneda) }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatCurrency, getCurrencyCode } from '@/views/NuevoContrato/utils.js'

export default {
  name: 'RowRentaDetalleContrato',
  methods: { getCurrencyCode, formatCurrency },
  props: {
    renta: {},
    moneda: {}
  }
}
</script>
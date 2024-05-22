<template>
  <div class="card mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Invoices</h6>
        </div>
        <div class="col-6 text-end">
          <material-button color="primary" size="sm" variant="outline">View All</material-button>
        </div>
      </div>
    </div>
    <div class="card-body p-3 mb-0">
      <ul class="list-group">
        <invoice-card-item v-for="{id, date, amount} of InvoiceData" :id="id" :key="id" :amount="amount" :date="date" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import InvoiceCardItem from './InvoiceCardItem.vue'
import { data } from './InvoiceData.json'
import MaterialButton from '@/components/MaterialButton.vue'

const InvoiceData = data
</script>

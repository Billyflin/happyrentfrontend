<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">Your Transaction's</h6>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <i class="far fa-calendar-alt me-2" aria-hidden="true"></i>
          <small>23 - 30 March 2020</small>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
      <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
      <ul class="list-group">
        <TransactionCardItem
          v-for="{color, icon, trader, date, transactionAmount} of Newest"
          :key="trader"
          :color="color"
          :icon="icon"
          :trader="trader"
          :date="date"
          :transactionAmount="transactionAmount"
        />
      </ul>
      <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">Yesterday</h6>
      <ul class="list-group">
        <TransactionCardItem
          v-for="{color, icon, trader, date, transactionAmount} of Old"
          :key="trader"
          :color="color"
          :icon="icon"
          :trader="trader"
          :date="date"
          :transactionAmount="transactionAmount"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import TransactionCardItem from './TransactionCardItem.vue'
import TransactionData from './TransactionData.json'

const TransactionCardData = TransactionData.data

const Newest = TransactionCardData.filter((item) => item.newest)
const Old = TransactionCardData.filter((item) => !item.newest)
</script>

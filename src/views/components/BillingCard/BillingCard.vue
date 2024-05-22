<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Billing Information</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <billing-card-item
          v-for="{name, companyName, emailAddres, VATNumber, index} of BillingData"
          :key="index"
          :VATNumber="VATNumber"
          :companyName="companyName"
          :emailAddress="emailAddres"
          :isFirst="index === 0"
          :name="name"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import BillingCardItem from './BillingCardItem.vue'
import { data } from './BillingData.json'

const BillingData = data
</script>

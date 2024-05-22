<template>
  <div class="card mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Payment Method</h6>
        </div>
        <div class="col-6 text-end">
          <material-button color="dark" variant="gradient">
            <i class="fas fa-plus me-2"></i>
            Add New Card
          </material-button>
        </div>
      </div>
    </div>
    <div class="card-body p-3">
      <div class="row">
        <payment-card-item
          v-for="{paymentCardNumber, img, index} of paymentData"
          :key="paymentCardNumber"
          :class="{'mb-md-0 mb-4': index === 0}"
          :paymentCardNumber="paymentCardNumber"
          :src="img"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import MaterialButton from '@/components/MaterialButton.vue'
import PaymentCardItem from './PaymentCardItem.vue'
import { data } from './PaymentData.json'

const paymentData = data
</script>

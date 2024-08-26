<template>
  <div class="card bg-transparent shadow-xl">
    <div
      :style="{
        backgroundImage: 'url(\'src/assets/img/curved14.jpg\')',
      }"
      class="overflow-hidden position-relative border-radius-xl"
    >
      <span :class="`bg-gradient-${card.background}`" class="mask"></span>
      <div class="card-body position-relative z-index-1 p-3">
        <i aria-hidden="true" class="fas fa-wifi text-white p-2"></i>
        <h5 class="text-white mt-4 mb-5 pb-2">
          {{ card.number }}
        </h5>
        <div class="d-flex">
          <div class="d-flex">
            <div class="me-4">
              <p class="text-white text-sm opacity-8 mb-0">
                {{ card.holderText }}
              </p>
              <h6 class="text-white mb-0">{{ card.holderName }}</h6>
            </div>
            <div>
              <p class="text-white text-sm opacity-8 mb-0">
                {{ card.expiryText }}
              </p>
              <h6 class="text-white mb-0">{{ card.expiryDate }}</h6>
            </div>
          </div>
          <div class="w-20 d-flex align-items-end justify-content-end ms-auto">
            <material-avatar :img="img1" alt="logo" class="w-60 mt-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MaterialAvatar from '@/components/Material/MaterialAvatar.vue'
import img1 from '../../assets/img/logos/mastercard.png'

defineProps({
  card: {
    type: Object,
    number: String,
    holderName: String,
    expiryDate: String,
    holderText: String,
    expiryText: String,
    background: String,
    default: () => ({
      number: '4562   1122   4594   7852',
      holderName: 'Jack Peterson',
      expiryDate: '11/22',
      holderText: 'Card Holder',
      expiryText: 'Expires',
      background: 'dark'
    })
  }
})
</script>

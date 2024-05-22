<template>
  <div class="col-md-3 card-group">
    <div class="card mb-3" style="height: 95%;">
      <div class="card-header p-0 mx-4 mt-3 position-relative z-index-1">
        <div :style="{ height: '200px' }" class="image-container">
          <img :src="'data:image/jpeg;base64,' + product.images[0].imageDataBase64" alt=""
               class="img-fluid border-radius-lg" style="object-fit: cover; width: 100%; height: 100%;">
        </div>
      </div>
      <div class="card-body" style="height: auto;">
        <h4 class="card-title">{{ product.productName }}</h4>
        <p class="card-text">{{ product.brand }}</p>
        <div class="mx-auto text-center">
          <h5 class="text-primary mb-0">${{ product.price }}</h5>
        </div>
        <router-link :to="{ name: 'ProductDetails', params: { id: product.productId } }"
                     class="text-primary icon-move-right">Ver más
          <i aria-hidden="true" class="fas fa-arrow-right text-xs ms-1"></i>
        </router-link>


      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

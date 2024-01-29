<template>
  <div class="col-md-3 card-group">
    <div class="card mb-3" style="height: 95%;">
      <div class="card-header p-0 mx-4 mt-3 position-relative z-index-1">
        <div class="image-container" :style="{ height: '200px' }">
          <img :src="'data:image/jpeg;base64,' + product.images[0].imageDataBase64" class="img-fluid border-radius-lg" style="object-fit: cover; width: 100%; height: 100%;" alt="">
        </div>
      </div>
      <div class="card-body" style="height: auto;">
        <h4 class="card-title">{{ product.productName }}</h4>
        <p class="card-text">{{ product.brand }}</p>
        <div class="mx-auto text-center">
          <h5 class="text-primary mb-0">${{ product.price }}</h5>
        </div>
        <router-link class="text-primary icon-move-right" :to="{ name: 'ProductDetails', params: { id: product.productId } }">Ver más
          <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
        </router-link>


      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

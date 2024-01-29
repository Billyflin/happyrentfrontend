<script setup>
import {defineProps} from 'vue'

defineProps({
  id: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
  capacity: {
    type: Number,
  },
  read_speed: {
    type: Number,
  },
  write_speed: {
    type: Number,
  },
  interface: {
    type: String,
  },
})
</script>

<template>
  <div class="col-md-3 card-group">
    <div class="card mb-3" style="height: 95%;">
      <div class="card-header p-0 mx-4 mt-3 position-relative z-index-1">
        <div class="image-container" :style="{ height: '200px' }">
          <img :src="image" class="img-fluid border-radius-lg" :style="imageStyle" alt="">
        </div>
      </div>
      <div class="card-body" style="height: auto;">
        <h4 class="card-title">{{ name }}</h4>
        <p class="card-text">{{ brand }} / gen {{gen}} / cores {{cores}} / {{threads}} hilos / socket {{socket}} / speed {{speed}}ghz</p>
        <div class="mx-auto text-center">
          <h5 class="text-primary mb-0">${{ price }}</h5>
        </div>
        <router-link class="text-primary icon-move-right" :to="{ path: `Products/${id}`}">Ver más
          <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; 
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; 
}
</style>

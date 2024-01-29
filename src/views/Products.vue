<template>
  <div class="container-fluid py-4">
    <div class="row" v-for="(groupedProducts, category) in groupedByCategory" :key="category">
      <div class="col-12">
        <div class="card p-0 position-relative mt-n4 mx-3 z-index-2">
          <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 class="text-white text-capitalize ps-3">{{ category }}</h6>
          </div>
        </div>
        <div class="card-body row">
          <ProductCard
              v-for="product in groupedProducts"
              :key="product.productId"
              :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import ProductCard from "@/views/components/ProductCard/ProductCard.vue";
import {ref, onMounted} from 'vue';
import {useAuthStore} from "@/store";

const products = ref([]);
const groupedByCategory = ref({});

const auth = useAuthStore()
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/products'    );
    products.value = response.data;

    // Mezcla los productos
    products.value.sort(() => Math.random() - 0.5);

    const groups = products.value.reduce((groups, product) => {
      const key = product.category.categoryName;
      if (!groups[key]) {
        groups[key] = [];
      }
      // Limita a 8 productos por categoría
      if (groups[key].length < 8) {
        groups[key].push(product);
      }
      return groups;
    }, {});

    // Convierte el objeto en un array, lo mezcla y lo convierte de nuevo en un objeto
    const entries = Object.entries(groups);
    entries.sort(() => Math.random() - 0.5);
    groupedByCategory.value = Object.fromEntries(entries);

  } catch (error) {
    console.error(error);
  }
});


</script>

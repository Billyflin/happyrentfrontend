<template>
<!--  <div class="py-4 container-fluid">-->
<!--    <div class="row">-->
<!--      <div class="col-12">-->
<!--        <div class="card">-->
<!--          <div class="card-body">-->
<!--            <h6 class="mb-3">Producto</h6>-->
<!--            <div class="row">-->
<!--              <div class="col-xl-5 col-lg-6 text-center mt-2">-->
<!--                <div id="imageCarousel" class="carousel slide" data-ride="carousel">-->
<!--                  <ol class="carousel-indicators">-->
<!--                    <li v-for="(image, index) in productDetails.product.images" :data-target="'#imageCarousel'" :data-slide-to="index" :class="{ active: index === 0 }"></li>-->
<!--                  </ol>-->
<!--                  <div class="carousel-inner">-->
<!--                    <div v-for="(image, index) in productDetails.product.images" class="carousel-item" :class="{ active: index === 0 }">-->
<!--                      <img :src="'data:image/jpeg;base64,' + image.imageDataBase64" class="d-block w-100 border-radius-lg mx-auto" :alt="'Imagen ' + (index + 1)">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <a class="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">-->
<!--                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--                    <span class="sr-only">Anterior</span>-->
<!--                  </a>-->
<!--                  <a class="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">-->
<!--                    <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--                    <span class="sr-only">Siguiente</span>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mx-auto col-lg-6 align-items-center">-->
<!--                <h4 class="mb-3">{{ productDetails.product.productName }}</h4>-->
<!--                <label class="mt-4">Especificaciones:</label>-->
<!--                <ul>-->
<!--                  <li v-if="productDetails.chipset"><strong>Chipset:</strong> {{ productDetails.chipset }}</li>-->
<!--                  <li v-if="productDetails.formFactor"><strong>Form Factor:</strong> {{ productDetails.formFactor }}</li>-->
<!--                  &lt;!&ndash; Agrega aquí más especificaciones para cada categoría &ndash;&gt;-->
<!--                </ul>-->
<!--                <br />-->
<!--                <h5>${{ productDetails.product.price }}</h5>-->
<!--                <span class="badge badge-primary">In Stock</span>-->
<!--                <br />-->
<!--                <div class="mt-4 row">-->
<!--                  <div class="col-lg-5">-->
<!--                    <button class="btn btn-primary d-block mt-3" type="button" name="button">-->
<!--                      Agregar al carrito-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre del producto</th>
        <th scope="col">Marca</th>
        <th scope="col">Precio</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in products" :key="product.productId">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ product.productName }}</td>
        <td>{{ product.brand }}</td>
        <td>${{ product.price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
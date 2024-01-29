<template>
  <div class="py-4 container-fluid" v-if="productDetails.product">
    <div class="row">
      <div>
        <router-link to="/Products">
          <button type="button" class="btn btn-lg mb-3 rounded-circle p-3 icon-move-left"
                  style="width: 60px; height: 60px; transition: background-color 0.3s;" @mouseover="hover = true"
                  @mouseleave="hover = false" :class="{ 'btn-primary': hover, 'btn-light': !hover }">
            <i class="fas fa-arrow-left"></i> <!-- Ícono con color fijo -->
          </button>
        </router-link>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="mb-4">Detalles del Producto</h5>
            <div class="row">
              <div class="col-xl-5 col-lg-6 text-center">
                <!-- Imágenes aquí -->
                <div v-for="(image, index) in productDetails.product.images" :key="image.imageId">
                  <img v-if="index === activeImage" :src="'data:image/png;base64,' + image.imageData"
                       class="img-fluid w-100 h-auto"/>
                </div>
                <div class="d-flex justify-content-center mt-3">
                  <button class="btn btn-primary me-2" @click="prevImage">Anterior</button>
                  <button class="btn btn-primary" @click="nextImage">Siguiente</button>
                </div>
              </div>

              <div class="mx-auto col-lg-5">
                <h2 class="mt-4 mt-lg-0">{{ productDetails.product.productName }}</h2>
                <div class="rating">
                  <i class="material-icons text-lg" v-for="n in productDetails.product.rating" :key="n">grade</i>
                </div>
                <br/>
                <span v-if="productDetails.product.stock > 0" class="badge badge-success">En Stock</span>
                <span v-else class="badge badge-danger">Sin Stock</span>
                <h6 class="mt-3 mb-0">Precio</h6>
                <h5>${{ productDetails.product.price }}</h5>
                <label class="mt-4">Especificaciones:</label>

                <ul>
                  <!-- Agrega aquí las especificaciones para cada categoría -->
                  <li v-if="productDetails.chipset"><strong>Chipset:</strong> {{ productDetails.chipset }}</li>
                  <li v-if="productDetails.formFactor"><strong>Form Factor:</strong> {{ productDetails.formFactor }}
                  </li>
                  <li v-if="productDetails.memorySlots"><strong>Memory Slots:</strong> {{ productDetails.memorySlots }}
                  </li>
                  <li v-if="productDetails.memoryType"><strong>Memory Type:</strong> {{ productDetails.memoryType }}
                  </li>
                  <li v-if="productDetails.m2Slots"><strong>M.2 Slots:</strong> {{ productDetails.m2Slots }}</li>
                  <li v-if="productDetails.pciEx16Slots"><strong>PCIe x16 Slots:</strong> {{
                      productDetails.pciEx16Slots
                    }}
                  </li>
                  <li v-if="productDetails.pciEx1Slots"><strong>PCIe x1 Slots:</strong> {{ productDetails.pciEx1Slots }}
                  </li>
                  <li v-if="productDetails.sata3Ports"><strong>SATA III Ports:</strong> {{ productDetails.sata3Ports }}
                  </li>
                  <li v-if="productDetails.socket"><strong>Socket:</strong> {{ productDetails.socket }}</li>
                  <li v-if="productDetails.usb2Ports"><strong>USB 2.0 Ports:</strong> {{ productDetails.usb2Ports }}
                  </li>
                  <li v-if="productDetails.usb3Ports"><strong>USB 3.0 Ports:</strong> {{ productDetails.usb3Ports }}
                  </li>
                  <li v-if="productDetails.blockRGB"><strong>RGB Block:</strong> {{ productDetails.blockRGB }}</li>
                  <li v-if="productDetails.fanRPM"><strong>Fan RPM:</strong> {{ productDetails.fanRPM }}</li>
                  <li v-if="productDetails.fanSize"><strong>Fan Size:</strong> {{ productDetails.fanSize }}</li>
                  <li v-if="productDetails.fans"><strong>Fans:</strong> {{ productDetails.fans }}</li>
                  <li v-if="productDetails.noiseLevel"><strong>Noise Level:</strong> {{ productDetails.noiseLevel }}
                  </li>
                  <li v-if="productDetails.efficiency"><strong>Efficiency:</strong> {{ productDetails.efficiency }}</li>
                  <li v-if="productDetails.fanless"><strong>Fanless:</strong> {{ productDetails.fanless }}</li>
                  <li v-if="productDetails.modular"><strong>Modular:</strong> {{ productDetails.modular }}</li>
                  <li v-if="productDetails.power"><strong>Power:</strong> {{ productDetails.power }}</li>
                  <li v-if="productDetails.cores"><strong>Cores:</strong> {{ productDetails.cores }}</li>
                  <li v-if="productDetails.frequency"><strong>Frequency:</strong> {{ productDetails.frequency }}</li>
                  <li v-if="productDetails.l3Cache"><strong>L3 Cache:</strong> {{ productDetails.l3Cache }}</li>
                  <li v-if="productDetails.tdp"><strong>TDP:</strong> {{ productDetails.tdp }}</li>
                  <li v-if="productDetails.threads"><strong>Threads:</strong> {{ productDetails.threads }}</li>
                  <li v-if="productDetails.casLatency"><strong>CAS Latency:</strong> {{ productDetails.casLatency }}
                  </li>
                  <li v-if="productDetails.color"><strong>Color:</strong> {{ productDetails.color }}</li>
                  <li v-if="productDetails.heatSpreader"><strong>Heat Spreader:</strong> {{
                      productDetails.heatSpreader
                    }}
                  </li>
                  <li v-if="productDetails.modules"><strong>Modules:</strong> {{ productDetails.modules }}</li>
                  <li v-if="productDetails.size"><strong>Size:</strong> {{ productDetails.size }}</li>
                  <li v-if="productDetails.voltage"><strong>Voltage:</strong> {{ productDetails.voltage }}</li>
                  <li v-if="productDetails.displayPorts"><strong>Display Ports:</strong> {{
                      productDetails.displayPorts
                    }}
                  </li>
                  <li v-if="productDetails.hdmi"><strong>HDMI:</strong> {{ productDetails.hdmi }}</li>
                  <li v-if="productDetails.length"><strong>Length:</strong> {{ productDetails.length }}</li>
                  <li v-if="productDetails.memory"><strong>Memory:</strong> {{ productDetails.memory }}</li>
                  <li v-if="productDetails.speed"><strong>Speed:</strong> {{ productDetails.speed }}</li>
                  <li v-if="productDetails.vga"><strong>VGA:</strong> {{ productDetails.vga }}</li>
                </ul>

                <div class="mt-4 row">
                  <div class="col-lg-5">
                    <!-- Botón que activa el modal -->
                    <button
                        class="mb-0 btn bg-gradient-success mt-lg-auto w-100"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal"
                        :disabled="productDetails.product.stock === 0"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalLabel">Agregar al carrito</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Información del producto -->
          <h6>Nombre del producto: {{ productDetails.product.productName }}</h6>
          <p>Marca: {{ productDetails.product.brand }}</p>
          <p>Precio: ${{ productDetails.product.price }}</p>
          <p>Categoría: {{ productDetails.product.category.categoryName }}</p>
          <p>Stock: {{ productDetails.product.stock > 0 ? 'En Stock' : 'Sin Stock' }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" @click="cartStore.addToCart(productDetails.product)">Agregar</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import {useCartStore} from "@/store";
import axios from 'axios';
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';

const hover = ref(false);
const cartStore = useCartStore();
const route = useRoute();
const productDetails = ref({});
const activeImage = ref(0);

const nextImage = () => {
  if (activeImage.value < productDetails.value.product.images.length - 1) {
    activeImage.value++;
  } else {
    activeImage.value = 0;
  }
};
const prevImage = () => {
  if (activeImage.value > 0) {
    activeImage.value--;
  } else {
    activeImage.value = productDetails.value.product.images.length - 1;
  }
};
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/products/${route.params.id}`);
    const product = response.data;
    let category = product.category.categoryName;
    // Elimina los espacios en blanco del inicio y del final y reemplaza los espacios en blanco intermedios por %20
    category = category.toLowerCase().trim().split(' ').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
    const detailsResponse = await axios.get(`http://localhost:8080/${category}Details/${route.params.id}`);
    productDetails.value = detailsResponse.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
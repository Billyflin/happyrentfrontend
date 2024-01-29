<script setup>

import MaterialButton from "@/components/MaterialButton.vue";
import {useCartStore} from "@/store";

const cart = useCartStore();

</script>

<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="col-12">
            <h5 class="ms-3 mt-3">Carrito</h5>
            <div class="table table-responsive">
              <table class="table mb-0 align-items-center">
                <thead>
                <tr>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Producto
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Cantidad
                  </th>
                  <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Precio
                  </th>
                  <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Total
                  </th>
                  <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Borrar
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="cart.items.length === 0">
                  <td colspan="5" class="text-center" style="padding: 50px 0; vertical-align: middle;">No hay artículos en el carrito.</td>
                </tr>
                <tr v-for="(item, index) in cart.items" :key="index">
                  <td>
                    <div class="px-2 py-1 d-flex">
                      <div>
                        <img
                            :src="'data:image/png;base64,' + item.images[0].imageData"
                            class="avatar avatar-md me-3"
                            alt="table image"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ item.productName }}</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <select
                        id="choices-quantity"
                        class="form-control"
                        name="choices-quantity"
                        v-model="item.quantity"
                    >
                      <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                    </select>
                  </td>
                  <td class="text-center align-middle">
                    <p class="mb-0 text-sm text-secondary">${{ item.price }}</p>
                  </td>
                  <td class="text-center align-middle">
                    <p class="mb-0 text-sm text-secondary">${{ item.price * item.quantity }}</p>
                  </td>
                  <td class="text-center align-middle">
                    <a
                        href="javascript:"
                        class="text-danger font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        @click="cart.removeFromCart(item)"
                    >
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-11 text-md-end mt-md-1 mb-3">
            <div v-if="cart.items.length > 0">
              <material-button
                  color="primary"
                  variant="gradient"
                  class="mb-0"
                  type="button"
                  name="button"
              >
                Pagar!
              </material-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.delete-icon {
  width: 20px;
  height: 25px;
}


</style>
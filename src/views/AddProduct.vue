<!--<template>-->
<!--  <div class="container-fluid py-4">-->
<!--    <div class="row">-->
<!--      <div class="col-12">-->
<!--        <div class="multisteps-form mb-9">-->
<!--          <div class="row">-->
<!--            <div class="col-12 col-lg-8 mx-auto my-5"></div>-->
<!--          </div>-->
<!--          <div class="row">-->
<!--            <div class="col-12 col-lg-8 m-auto">-->
<!--              <div class="card">-->
<!--                <div-->
<!--                    class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"-->
<!--                >-->
<!--                  <div-->
<!--                      class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"-->
<!--                  >-->
<!--                    <div class="multisteps-form__progress">-->
<!--                      <button-->
<!--                          class="multisteps-form__progress-btn"-->
<!--                          type="button"-->
<!--                          title="User Info"-->
<!--                          :class="formStore.activeStep >= 0 ? 'js-active' : ''"-->
<!--                      >-->
<!--                                    <span>-->
<!--                                      Categoria-->
<!--                                    </span>-->
<!--                      </button>-->
<!--                      <button-->
<!--                          class="multisteps-form__progress-btn"-->
<!--                          type="button"-->
<!--                          title="Address"-->
<!--                          :class="formStore.activeStep >= 1 ? 'js-active' : ''"-->
<!--                      >-->
<!--                        <span>Datos del Producto</span>-->
<!--                      </button>-->
<!--                      <button-->
<!--                          class="multisteps-form__progress-btn"-->
<!--                          type="button"-->
<!--                          title="Socials"-->
<!--                          :class="formStore.activeStep >= 2 ? 'js-active' : ''"-->
<!--                      >-->
<!--                        <span>Imagenes</span>-->
<!--                      </button>-->

<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="card-body">-->
<!--                  <form class="multisteps-form__form">-->
<!--                    &lt;!&ndash;single form panel&ndash;&gt;-->
<!--                    <Category :next-step="formStore.nextStep" :class="formStore.activeClass(0)"/>-->
<!--                    &lt;!&ndash;single form panel&ndash;&gt;-->
<!--                    <DatosDelProducto  v-if="formStore.activeStep === 1" :prev-step="formStore.prevStep" :next-step="formStore.nextStep"-->
<!--                             :class="formStore.activeClass(1)"/>-->
<!--                    &lt;!&ndash;single form panel&ndash;&gt;-->
<!--                    <ProductsImg v-if="formStore.activeStep === 2" :prev-step="formStore.prevStep" :next-step="formStore.nextStep" :class="formStore.activeClass(2)"/>-->
<!--                  </form>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--// import DatosDelProducto from "./components/AddProduct/ProductData.vue";-->
<!--// import ProductsImg from "./components/AddProduct/ProductsImg.vue";-->
<!--// import Category from "./components/AddProduct/Category.vue";-->
<!--// import {useFormStore} from "@/store";-->
<!--//-->
<!--// const formStore = useFormStore()-->

<!--</script>-->

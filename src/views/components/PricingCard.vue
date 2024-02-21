<template>
  <div class="col-lg-4 mb-lg-0 mb-4">
    <div class="card shadow-lg" :class="`bg-gradient-${color}`">
      <span
        class="badge rounded-pill w-30 mt-n2 mx-auto"
        :class="[`bg-${badge.color}`, darkMode ? 'text-white' : 'text-dark']"
        >{{ badge.label }}</span
      >
      <div class="card-header text-center pt-4 pb-3 bg-transparent">
        <h1
          class="font-weight-bold mt-2"
          :class="darkMode ? 'text-white' : 'text-dark'"
        >
          <small class="text-lg align-top">{{ price.currency }}</small>
          <!--  eslint-disable-next-line prettier/prettier -->
          {{price.value}}
          <!--  eslint-disable-next-line prettier/prettier -->
          <small class="text-lg">/{{price.charged}}</small>
        </h1>
      </div>
      <div
        class="card-body text-lg-start text-center pt-0"
        :class="darkMode ? 'text-white' : 'text-dark'"
      >
        <div
          v-for="({ label, includes }, index) of specifications"
          :key="index"
          class="p-2 d-flex justify-content-lg-start justify-content-center"
        >
          <i class="material-icons my-auto">{{
            includes === true ? "done" : "remove"
          }}</i>
          <span class="ps-3">{{ label }}</span>
        </div>
        <a
          :href="action.route"
          class="mt-3 mb-0 btn btn-icon d-lg-block"
          :class="`bg-gradient-${action.color}`"
        >
          {{ action.label }}
          <i class="fas fa-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingCard",
  props: {
    color: {
      type: String,
      default: "",
    },
    badge: {
      type: Object,
      color: String,
      label: String,
      required: true,
    },
    price: {
      type: Object,
      currency: String,
      value: String,
      charged: String,
      required: true,
    },
    specifications: {
      type: Array,
      label: String,
      includes: Boolean,
      required: true,
    },
    action: {
      type: Object,
      route: String,
      label: String,
      color: String,
      default: () => ({
        route: "/",
        label: "Join",
        color: "success",
      }),
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

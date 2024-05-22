<template>
  <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
    <div class="card card-blog card-plain">
      <div class="card-header p-0 mt-n4 mx-3">
        <a class="shadow-xl d-block border-radius-xl">
          <img :src="image" alt="img-blur-shadow" class="shadow img-fluid border-radius-xl" />
        </a>
      </div>
      <div class="p-3 card-body">
        <p class="mb-0 text-sm text-gradient text-dark">{{ label }}</p>
        <a href="javascript:;">
          <h5>{{ title }}</h5>
        </a>
        <p class="mb-4 text-sm">
          {{ description }}
        </p>
        <div class="d-flex align-items-center justify-content-between">
          <button :class="`btn-outline-${action.color}`" class="mb-0 btn btn-sm" type="button">
            {{ action.label }}
          </button>
          <div class="mt-2 avatar-group">
            <a
              v-for="({image: authorImage, name}, index) of authors"
              :key="index"
              :title="name"
              class="avatar avatar-xs rounded-circle"
              data-bs-placement="bottom"
              data-bs-toggle="tooltip"
              href="javascript:;"
            >
              <img :alt="authorImage" :src="authorImage" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'Default Project Card'
  },
  description: {
    type: String,
    default: ''
  },
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => {
    }
  },
  authors: {
    type: Array,
    image: String,
    name: String,
    default: () => []
  }
})
</script>

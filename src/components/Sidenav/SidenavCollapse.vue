<template>
  <router-link
    :aria-controls="collapseRef"
    :aria-expanded="isExpanded"
    :class="getRoute() === collapseRef ? `active bg-gradient-${color}` : ''"
    :data-bs-toggle="collapse ? 'collapse' : ''"
    :to="`/${collapseRef}`"
    class="nav-link"
    v-bind="$attrs"
    @click="isExpanded = !isExpanded"
  >
    <div class="text-center d-flex align-items-center justify-content-center me-2">
      <slot name="icon"></slot>
    </div>
    <span :style="textColor" class="nav-link-text ms-1">{{ navText }}</span>
  </router-link>
  <div :class="isExpanded ? 'collapse show' : 'collapse'">
    <slot name="list"></slot>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/appStore.js'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const store = useAppStore()

let isExpanded = ref(false)

const props = defineProps({
  collapseRef: {
    type: String,
    required: true
  },
  navText: {
    type: String,
    required: true
  },
  collapse: {
    type: Boolean,
    default: true
  }
})

function getRoute() {
  const routeArr = route.path.split('/')
  return routeArr[1]
}

const textColor = computed(() => {
  return props.navText === 'Cerrar Sesión' ? 'color: #f44335 !important;' : ''
})

const color = computed(() => {
  return store.color
})
</script>

<template>
  <router-link
    :data-bs-toggle="collapse ? 'collapse' : ''"
    :to="`/${collapseRef}`"
    :aria-controls="collapseRef"
    :aria-expanded="isExpanded"
    class="nav-link"
    :class="getRoute() === collapseRef ? `active bg-gradient-${color}` : ''"
    v-bind="$attrs"
    @click="isExpanded = !isExpanded"
  >
    <div class="text-center d-flex align-items-center justify-content-center me-2">
      <slot name="icon"></slot>
    </div>
    <span class="nav-link-text ms-1">{{ navText }}</span>
  </router-link>
  <div :class="isExpanded ? 'collapse show' : 'collapse'">
    <slot name="list"></slot>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useRoute} from 'vue-router'
import {useAppStore} from '@/store/index.js'

const route = useRoute()
const store = useAppStore()

let isExpanded = ref(false)

defineProps({
  collapseRef: {
    type: String,
    required: true,
  },
  navText: {
    type: String,
    required: true,
  },
  collapse: {
    type: Boolean,
    default: true,
  },
})

function getRoute() {
  const routeArr = route.path.split('/')
  return routeArr[1]
}

const color = computed(() => {
  return store.color
})
</script>

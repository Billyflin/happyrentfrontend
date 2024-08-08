<template>
  <div class="position-relative"
       style="height: 50px;overflow: hidden;margin-top: -50px;z-index:2;position: relative;">
    <div class="position-absolute w-100 top-0" style="z-index: 1;">
      <svg class="waves waves-sm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="card-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g class="moving-waves" v-if="!store.isDarkMode">
          <use xlink:href="#card-wave" x="48" y="-1" fill="rgba(255,255,255,0.30"></use>
          <use xlink:href="#card-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
          <use xlink:href="#card-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
          <use xlink:href="#card-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
          <use xlink:href="#card-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
          <use xlink:href="#card-wave" x="48" y="16" fill="rgba(255,255,255,0.99)"></use>
        </g>
        <g class="moving-waves" v-else>
          <use xlink:href="#card-wave" x="48" y="-1" fill="rgba(44, 62, 105,0.30)"></use>
          <use xlink:href="#card-wave" x="48" y="3" fill="rgba(44, 62, 105,0.55)"></use>
          <use xlink:href="#card-wave" x="48" y="5" fill="rgba(26, 32, 53,0.25)"></use>
          <use xlink:href="#card-wave" x="48" y="8" fill="rgba(26, 32, 53,0.20)"></use>
          <use xlink:href="#card-wave" x="48" y="13" fill="rgba(50, 63, 98,0.15)"></use>
          <use xlink:href="#card-wave" x="48" y="16" fill="rgba(32, 41, 64,0.99)"></use>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '@/store/appStore.js'

export default {
  name: 'svg-footer-card',
  data() {
    return {
      store: useAppStore()
    }
  }
}
</script>
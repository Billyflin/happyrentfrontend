<template>
  <div class="card border">
    <img class="card-img-top" :src="dark" alt="">
    <div class="position-relative"
         style="height: 50px;overflow: hidden;margin-top: -50px;z-index:2;position: relative;">
      <div class="position-absolute w-100 top-0" style="z-index: 1;">
        <svg class="waves waves-sm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="card-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g class="moving-waves">
            <use xlink:href="#card-wave" x="48" y="-1" fill="rgba(255,255,255,0.30"></use>
            <use xlink:href="#card-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
            <use xlink:href="#card-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
            <use xlink:href="#card-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
            <use xlink:href="#card-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
            <use xlink:href="#card-wave" x="48" y="16" fill="rgba(255,255,255,0.99)"></use>
          </g>
        </svg>
      </div>
    </div>
    <div class="card-body">
      <h4>
        Soft UI Design System
      </h4>
      <p>
        One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That's pretty impressive.
      </p>
      <a href="javascript:;" class="text-primary icon-move-right">More about us
        <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card-waves',
  props: {
    dark: {}
  }
}
</script>
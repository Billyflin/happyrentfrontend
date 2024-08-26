<template>
  <div class="card border">
    <img :src="dark" alt="" class="card-img-top" />
    <div
      class="position-relative"
      style="height: 50px; overflow: hidden; margin-top: -50px; z-index: 2; position: relative"
    >
      <div class="position-absolute w-100 top-0" style="z-index: 1">
        <svg
          class="waves waves-sm"
          preserveAspectRatio="none"
          shape-rendering="auto"
          viewBox="0 24 150 40"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              id="card-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g class="moving-waves">
            <use fill="rgba(255,255,255,0.30" x="48" xlink:href="#card-wave" y="-1"></use>
            <use fill="rgba(255,255,255,0.35)" x="48" xlink:href="#card-wave" y="3"></use>
            <use fill="rgba(255,255,255,0.25)" x="48" xlink:href="#card-wave" y="5"></use>
            <use fill="rgba(255,255,255,0.20)" x="48" xlink:href="#card-wave" y="8"></use>
            <use fill="rgba(255,255,255,0.15)" x="48" xlink:href="#card-wave" y="13"></use>
            <use fill="rgba(255,255,255,0.99)" x="48" xlink:href="#card-wave" y="16"></use>
          </g>
        </svg>
      </div>
    </div>
    <div class="card-body">
      <h4>Soft UI Design System</h4>
      <p>
        One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That's
        pretty impressive.
      </p>
      <a class="text-primary icon-move-right" href="javascript:"
        >More about us
        <i aria-hidden="true" class="fas fa-arrow-right text-xs ms-1"></i>
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

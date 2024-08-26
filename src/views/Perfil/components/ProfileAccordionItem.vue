<template>
  <div class="mb-3 accordion-item">
    <h6 :id="accordionId" class="accordion-header">
      <button
        :aria-controls="collapseId"
        :aria-expanded="active ? 'true' : 'false'"
        :data-bs-target="`#${collapseId}`"
        class="accordion-button border-bottom font-weight-bold"
        data-bs-toggle="collapse"
        type="button"
      >
        <slot name="title" />
        <i
          class="pt-1 text-xs collapse-close fa fa-plus position-absolute end-0 me-3"
        ></i>
        <i
          class="pt-1 text-xs collapse-open fa fa-minus position-absolute end-0 me-3"
        ></i>
      </button>
    </h6>
    <div
      :id="collapseId"
      :aria-labelledby="accordionId"
      :class="active ? 'show' : ''"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionRental"
    >
      <div class="text-sm accordion-body opacity-8">
        <slot name="data" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAccordionItem',
  props: {
    accordionId: {
      type: String,
      default: ''
    },
    collapseId: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <timeline-list title="Timeline">
    <timeline-item
      :date-time="formatDateTime"
      :icon="{ component: 'list_alt_add', class: 'text-white text-sm' }"
      color="success"
      description="Se creó la propiedad en el sistema."
      title="Creación de la propiedad"
    />
    <timeline-item
      :date-time="formatDateTime"
      :icon="{ component: 'history_edu', class: 'text-white text-sm' }"
      color="success"
      description="Se creó el contrato en el sistema."
      title="Creación del contrato"
    />
    <TimelineItem
      :icon="{ component: 'price_change', class: 'text-white text-sm' }"
      color="info"
      date-time="9 de agosto de 2024, 7:56:11 a. m."
      description="Se reajustó el precio de la propiedad de $300.000 a $305.100 con una variación de 1.7%."
      title="Reajuste de precio"
    />
  </timeline-list>
</template>
<script>
import TimelineItem from '@/components/Cards/TimelineItem.vue'
import TimelineList from '@/components/Cards/TimelineList.vue'

export default {
  name: 'TimeLineContrato',
  components: { TimelineItem, TimelineList },
  props: {
    contrato: {},
    formatDateTime: {},
    store: {}
  }
}
</script>

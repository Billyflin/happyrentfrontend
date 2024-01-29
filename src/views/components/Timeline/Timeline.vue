<template>
  <div class="col-lg-4 col-md-6">
    <timeline-list
      class="h-100"
      title="Orders overview"
      description="<i class='fa fa-arrow-up text-success' aria-hidden='true'></i>
        <span class='font-weight-bold'>24%</span> this month"
    >
      <timeline-item
        v-for="{icon: {component, color}, title, dateTime} of TimelineData"
        :key="title"
        :icon="{component, color}"
        :title="title"
        :dateTime="dateTime"
      />
    </timeline-list>
  </div>
</template>

<script setup>
import TimelineList from '@/examples/Cards/TimelineList.vue'
import TimelineItem from '@/examples/Cards/TimelineItem.vue'
import {data} from './TimelineData.json'
const TimelineData = data
</script>

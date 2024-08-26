<template>
  <div class="row d-flex justify-content-center mt-70 mb-70">
    <div class="col-md-6">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
            <div
              v-for="(event, index) in events"
              :key="index"
              class="vertical-timeline-item vertical-timeline-element text-sm"
            >
              <div>
                <span class="vertical-timeline-element-icon bounce-in text-sm">
                  <i :class="`badge badge-dot badge-dot-xl text-sm ${event.badgeClass}`"></i>
                </span>
                <div class="vertical-timeline-element-content bounce-in text-sm">
                  <h4 class="timeline-title text-sm">{{ event.title }}</h4>
                  <p v-if="event.description" class="text-sm">
                    {{ event.description }}
                  </p>
                  <p v-if="event.additionalInfo" class="text-sm">
                    {{ event.additionalInfo }}
                  </p>
                  <span class="vertical-timeline-element-date text-sm">{{ event.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTimeline',
  props: {
    title: {
      type: String,
      default: 'User Timeline'
    },
    events: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
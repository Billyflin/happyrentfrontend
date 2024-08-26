<template>
  <div>
    <UserTimeline :events="timelineEvents" title="Today's Schedule" />
  </div>
</template>

<script>
import UserTimeline from '@/views/Shared/UserTimeline.vue'

export default {
  components: {
    UserTimeline
  },
  data() {
    return {
      timelineEvents: [
        {
          title: 'Meeting with client',
          description: 'Meeting with USA Client, today at 12:00 PM',
          time: '9:30 AM',
          badgeClass: 'badge-success'
        },
        {
          title: 'Another meeting with UK client',
          description: 'Another meeting with UK client today, at 3:00 PM',
          additionalInfo: 'Yet another one, at 5:00 PM',
          time: '12:25 PM',
          badgeClass: 'badge-warning'
        },
        {
          title: 'Discussion with team about new product launch',
          description:
            'Meeting with teammates about the launch of new product and tell them about new features',
          time: '6:00 PM',
          badgeClass: 'badge-danger'
        },
        {
          title: 'Discussion with marketing team',
          description: 'Discussion with marketing team about the popularity of last product',
          time: '9:00 AM',
          badgeClass: 'badge-primary'
        },
        {
          title: 'Purchase new hosting plan',
          description:
            'Purchase new hosting plan as discussed with development team, today at 10:00 AM',
          time: '10:30 PM',
          badgeClass: 'badge-success'
        }
      ]
    }
  }
}
</script>

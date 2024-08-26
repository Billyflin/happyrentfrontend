<template>
  <Aer />
  <div class="card border col-md-5 mx-auto">
    <img :src="light" alt="light" class="p-2 card-img-top" />
    <div class="card-body">
      <h5 class="card-title">Light Theme</h5>
      <p class="card-text">Activar el modo claro</p>
      <a class="btn btn-primary stretched-link" href="/">Boton de prueba</a>
    </div>
  </div>
  <prueba />
  <div class="py-4 container-fluid">
    <div class="row gx-4">
      <div class="mt-4 col-lg-6 mt-lg-0">
        <timeline-list title="Timeline">
          <timeline-item
            :icon="{ component: 'notifications', class: 'text-white text-sm' }"
            color="success"
            date-time="22 DEC 7:20 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="$2400 Design changes"
          />
          <TimelineItem
            :badges="['order', '#1832412']"
            :icon="{ component: 'code', class: 'text-white text-sm' }"
            color="danger"
            date-time="21 DEC 11 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="New order #1832412"
          />
          <TimelineItem
            :badges="['server', 'payments']"
            :icon="{ component: 'shopping_cart', class: 'text-white text-sm' }"
            color="info"
            date-time="21 DEC 9:34 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="Server payments for April"
          />
          <TimelineItem
            :badges="['Card', '#4395133', 'Priority']"
            :icon="{ component: 'credit_card', class: 'text-white text-sm' }"
            color="warning"
            date-time="20 DEC 2:20 AM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="New card added for order #4395133"
          />
          <TimelineItem
            :badges="['Development']"
            :icon="{ component: 'vpn_key', class: 'text-white text-sm' }"
            color="primary"
            date-time="18 DEC 4:54 AM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="Unlock packages for development"
          />
          <TimelineItem
            :badges="['Message']"
            :icon="{ component: 'inventory_2', class: 'text-white text-sm' }"
            color="success"
            date-time="16 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="New message unread"
          />
          <TimelineItem
            :icon="{ component: 'done', class: 'text-white text-sm' }"
            color="info"
            date-time="15 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="Notifications unread"
          />
          <TimelineItem
            :badges="['Request', 'Priority']"
            :icon="{ component: 'mail', class: 'text-white text-sm' }"
            color="warning"
            date-time="14 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="New request"
          />
          <TimelineItem
            :badges="['Controller']"
            :icon="{ component: 'sports_esports', class: 'text-white text-sm' }"
            color="dark"
            date-time="13 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="Controller issues"
          />
        </timeline-list>
      </div>
      <div class="mt-4 col-lg-6 mt-lg-0">
        <timeline-list dark-mode title="Timeline Dark">
          <timeline-item
            :badges="['design']"
            :icon="{ component: 'notifications', class: 'text-white text-sm' }"
            color="success"
            date-time="22 DEC 7:20 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="$2400 Design changes"
          />
          <TimelineItem
            :badges="['order', '#1832412']"
            :icon="{ component: 'code', class: 'text-white text-sm' }"
            color="danger"
            date-time="21 DEC 11 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="New order #1832412"
          />
          <TimelineItem
            :badges="['server', 'payments']"
            :icon="{ component: 'shopping_cart', class: 'text-white text-sm' }"
            color="info"
            date-time="21 DEC 9:34 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="Server payments for April"
          />
          <TimelineItem
            :badges="['Card', '#4395133', 'Priority']"
            :icon="{ component: 'credit_card', class: 'text-white text-sm' }"
            color="warning"
            date-time="20 DEC 2:20 AM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="New card added for order #4395133"
          />
          <TimelineItem
            :badges="['Development']"
            :icon="{ component: 'vpn_key', class: 'text-white text-sm' }"
            color="primary"
            date-time="18 DEC 4:54 AM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="Unlock packages for development"
          />
          <TimelineItem
            :badges="['Message']"
            :icon="{ component: 'inventory_2', class: 'text-white text-sm' }"
            color="success"
            date-time="16 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="New message unread"
          />
          <TimelineItem
            :icon="{ component: 'done', class: 'text-white text-sm' }"
            color="info"
            date-time="15 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="Notifications unread"
          />
          <TimelineItem
            :badges="['Request', 'Priority']"
            :icon="{ component: 'mail', class: 'text-white text-sm' }"
            color="warning"
            date-time="14 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="New request"
          />
          <TimelineItem
            :badges="['Controller']"
            :icon="{ component: 'sports_esports', class: 'text-white text-sm' }"
            color="dark"
            date-time="13 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            title="Controller issues"
          />
        </timeline-list>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineList from '@/components/Cards/TimelineList.vue'
import TimelineItem from '@/components/Cards/TimelineItem.vue'
import Prueba from '@/views/Shared/Prueba.vue'
import light from '@/assets/img/appearance/light.svg'
import UserTimeline from '@/views/Shared/UserTimeline.vue'
import Aer from '@/views/Shared/aer.vue'

export default {
  name: 'Timeline',
  components: { Aer, UserTimeline, Prueba, TimelineList, TimelineItem },
  data() {
    return {
      light: light
    }
  }
}
</script>

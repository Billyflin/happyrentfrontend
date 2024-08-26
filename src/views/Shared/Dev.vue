<template>
  <Aer />
  <div class="card border col-md-5 mx-auto">
    <img :src="light" alt="light" class="p-2 card-img-top">
    <div class="card-body">
      <h5 class="card-title">Light Theme</h5>
      <p class="card-text">
        Activar el modo claro
      </p>
      <a href="/" class="btn btn-primary stretched-link">Boton de prueba</a>
    </div>
  </div>
  <prueba />
  <div class="py-4 container-fluid">
    <div class="row gx-4">
      <div class="mt-4 col-lg-6 mt-lg-0">
        <timeline-list title="Timeline">
          <timeline-item
            color="success"
            :icon="{ component: 'notifications', class: 'text-white text-sm' }"
            title="$2400 Design changes"
            date-time="22 DEC 7:20 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
          />
          <TimelineItem
            color="danger"
            :icon="{ component: 'code', class: 'text-white text-sm' }"
            title="New order #1832412"
            date-time="21 DEC 11 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['order', '#1832412']"
          />
          <TimelineItem
            color="info"
            :icon="{ component: 'shopping_cart', class: 'text-white text-sm' }"
            title="Server payments for April"
            date-time="21 DEC 9:34 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['server', 'payments']"
          />
          <TimelineItem
            color="warning"
            :icon="{ component: 'credit_card', class: 'text-white text-sm' }"
            title="New card added for order #4395133"
            date-time="20 DEC 2:20 AM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Card', '#4395133', 'Priority']"
          />
          <TimelineItem
            color="primary"
            :icon="{ component: 'vpn_key', class: 'text-white text-sm' }"
            title="Unlock packages for development"
            date-time="18 DEC 4:54 AM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Development']"
          />
          <TimelineItem
            color="success"
            :icon="{ component: 'inventory_2', class: 'text-white text-sm' }"
            title="New message unread"
            date-time="16 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Message']"
          />
          <TimelineItem
            color="info"
            :icon="{ component: 'done', class: 'text-white text-sm' }"
            title="Notifications unread"
            date-time="15 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
          />
          <TimelineItem
            color="warning"
            :icon="{ component: 'mail', class: 'text-white text-sm' }"
            title="New request"
            date-time="14 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Request', 'Priority']"
          />
          <TimelineItem
            color="dark"
            :icon="{ component: 'sports_esports', class: 'text-white text-sm' }"
            title="Controller issues"
            date-time="13 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Controller']"
          />
        </timeline-list>
      </div>
      <div class="mt-4 col-lg-6 mt-lg-0">
        <timeline-list title="Timeline Dark" dark-mode>
          <timeline-item
            color="success"
            :icon="{ component: 'notifications', class: 'text-white text-sm' }"
            title="$2400 Design changes"
            date-time="22 DEC 7:20 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['design']"
          />
          <TimelineItem
            color="danger"
            :icon="{ component: 'code', class: 'text-white text-sm' }"
            title="New order #1832412"
            date-time="21 DEC 11 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['order', '#1832412']"
          />
          <TimelineItem
            color="info"
            :icon="{ component: 'shopping_cart', class: 'text-white text-sm' }"
            title="Server payments for April"
            date-time="21 DEC 9:34 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['server', 'payments']"
          />
          <TimelineItem
            color="warning"
            :icon="{ component: 'credit_card', class: 'text-white text-sm' }"
            title="New card added for order #4395133"
            date-time="20 DEC 2:20 AM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Card', '#4395133', 'Priority']"
          />
          <TimelineItem
            color="primary"
            :icon="{ component: 'vpn_key', class: 'text-white text-sm' }"
            title="Unlock packages for development"
            date-time="18 DEC 4:54 AM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Development']"
          />
          <TimelineItem
            color="success"
            :icon="{ component: 'inventory_2', class: 'text-white text-sm' }"
            title="New message unread"
            date-time="16 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Message']"
          />
          <TimelineItem
            color="info"
            :icon="{ component: 'done', class: 'text-white text-sm' }"
            title="Notifications unread"
            date-time="15 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
          />
          <TimelineItem
            color="warning"
            :icon="{ component: 'mail', class: 'text-white text-sm' }"
            title="New request"
            date-time="14 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Request', 'Priority']"
          />
          <TimelineItem
            color="dark"
            :icon="{ component: 'sports_esports', class: 'text-white text-sm' }"
            title="Controller issues"
            date-time="13 DEC"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            :badges="['Controller']"
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
  name: "Timeline",
  components: { Aer, UserTimeline, Prueba, TimelineList, TimelineItem },
  data() {
    return {
      light: light,
    };
  },
};
</script>

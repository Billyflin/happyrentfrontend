<template>
  <div class="position-fixed bottom-1 end-1 z-index-2">
    <MaterialSnackbar
      v-for="(notification, index) in store.notifications"
      :key="index"
      :title="notification.title"
      :date="notification.date"
      :description="notification.description"
      :icon="notification.icon"
      :color="notification.color"
      :closeHandler="() => store.removeNotification(index)"
    />
  </div>
</template>

<script>
import { useNotificationsStore } from '@/store/notifications.js'
import MaterialSnackbar from '@/components/Material/MaterialSnackbar.vue'

export default {
  name: 'Notifications',
  components: {
    MaterialSnackbar
  },
  setup() {
    const store = useNotificationsStore()
    return { store }
  }
}
</script>

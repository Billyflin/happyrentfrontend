import { defineStore } from 'pinia';

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notifications: [],
    showConfetti: false,

  }),
  actions: {
    addNotification(notification) {
      this.notifications.push(notification);
      if (notification.duration) {
        setTimeout(() => {
          this.removeNotification(notification);
        }, notification.duration);
      }
    },
    removeNotification(notification) {
      const index = this.notifications.indexOf(notification);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }
    },
    clearNotifications() {
      this.notifications = [];
    },
    createNotification(type, title = 'Material Dashboard', description = 'Hello, world! This is a notification message.', duration = 5000) {
      const notification = {
        type,
        title,
        description,
        date: new Date().toLocaleTimeString(),
        icon: {
          component: type === 'success' ? 'done' : type === 'info' ? 'notifications' : type === 'warning' ? 'travel_explore' : 'campaign',
          color: 'white'
        },
        color: type,
        duration
      };
      this.addNotification(notification);
    },
    triggerConfetti() {
      this.showConfetti = true;
    },
    resetConfetti() {
      this.showConfetti = false;
    }

  },
});

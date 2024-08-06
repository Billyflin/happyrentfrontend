import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    hideConfigButton: true,
    isPinned: true,
    showConfig: false,
    sidebarType: 'bg-white',
    color: 'happLight',
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    isDarkMode: false,
    navbarFixed: 'position-sticky shadow-blur left-auto top-1 z-index-sticky px-0 mx-4',
    absolute: 'position-absolute px-4 mx-0 w-100 z-index-2',
    bootstrap: null
  }),
  actions: {
    toggleConfigurator() {
      this.hideConfigButton = !this.hideConfigButton
      this.showConfig = !this.showConfig
    },
    navbarMinimize() {
      const sidenav_show = document.querySelector('.g-sidenav-show')

      if (sidenav_show.classList.contains('g-sidenav-pinned')) {
        sidenav_show.classList.remove('g-sidenav-pinned')
        this.isPinned = true
      } else {
        sidenav_show.classList.add('g-sidenav-pinned')
        this.isPinned = false
      }
    },
    navbarFixed() {
      this.isNavFixed = this.isNavFixed === false
    },
    toggleEveryDisplay() {
      this.showNavbar = !this.showNavbar
      this.showSidenav = !this.showSidenav
      this.showFooter = !this.showFooter
    },
    toggleNavbar() {
      this.showNavbar = !this.showNavbar
    },
    toggleSidenav() {
      this.showSidenav = !this.showSidenav
    },
    toggleHideConfig() {
      this.hideConfigButton = !this.hideConfigButton
    },
    setColor(payload) {
      this.color = payload
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'app',
        storage: localStorage
      }
    ]
  }
})

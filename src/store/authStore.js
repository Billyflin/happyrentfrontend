import { defineStore } from 'pinia'
import { authenticate, getCurrentUser } from '@/servicios/authService'
import instance from '@/axios.js'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    isAuthenticated: false,
    isAdministrator: false,
    errorMessage: null,
    currentUser: null,
    authorities: []
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await authenticate(username, password)
        if (response.data && response.data.access_token) {
          this.token = response.data.access_token
          instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
          await this.fetchCurrentUser()
          this.isAuthenticated = true
        } else {
          throw new Error('No access token found in response')
        }
      } catch (err) {
        console.error(err)
        this.errorMessage = 'Credenciales inválidas'
      }
    },
    async fetchCurrentUser() {
      if (this.token) {
        try {
          const response = await getCurrentUser()
          console.log(response.data)
          this.currentUser = response.data
          this.authorities = response.data.authorities || []
        } catch (err) {
          console.error(err)
          this.logout()
        }
      }
    },
    logout() {
      this.token = null
      this.isAuthenticated = false
      this.currentUser = null
      this.errorMessage = null
      this.authorities = []
      delete instance.defaults.headers.common['Authorization']
      router.push({ name: 'SignIn' }).then(r => r)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage
      }
    ]
  }
})

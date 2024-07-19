import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { authenticate, getCurrentUser } from '@/servicios/authService'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: null,
    isLoggedIn: false,
    errMsg: null,
    userInfo: { 'authorities': [] },
    rememberMe: false,
    isAdmin: false,
  }),
  persist: true,
  actions: {
    async loginHandler(username, password) {
      try {
        const response = await authenticate(username, password)
        this.auth = response.data.access_token
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.auth}`
        await this.getCurrentUser()
        this.isLoggedIn = true
      } catch (err) {
        switch (err.response.status) {
          case 400:
          case 401:
            this.errMsg = 'Invalid username or password'
            break
          case 403:
            this.errMsg = 'Contraseña o usuario incorrecto'
            break
        }
      }
    },
    async getCurrentUser() {
      if (this.auth) {
        try {
          const response = await getCurrentUser()
          this.userInfo = response.data
          this.isAdmin = this.userInfo.authorities.some(a => a.authority === 'ROLE_ADMIN')
        } catch (err) {
          this.userSignOut()
        }
      }
    },
    userSignOut() {
      this.auth = null
      this.isLoggedIn = false
      this.userInfo = null
      this.rememberMe = false
      this.errMsg = null
      this.isAdmin = false
      delete axios.defaults.headers.common['Authorization']
      useRouter().push({ name: 'SignIn' })
    },
    setRememberMe(value) {
      this.rememberMe = value
    },
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      filter: (mutation, state) => state.rememberMe
    })
  ]
})

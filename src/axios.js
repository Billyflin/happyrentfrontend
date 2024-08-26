import axios from 'axios'
import { useAuthStore } from '@/store/authStore.js'

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}`,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

instance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    console.log(authStore.token, 'aer')
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance

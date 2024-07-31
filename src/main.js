import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import 'animate.css';
import 'simple-datatables/dist/style.css'
import MaterialDashboard from './material-dashboard'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import setTooltip from '@/assets/js/tooltip.js'


setTooltip()

const appInstance = createApp(App)


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
appInstance.use(router)
appInstance.use(MaterialDashboard)
appInstance.use(pinia)
appInstance.mount('#app')

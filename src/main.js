import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import MaterialDashboard from "./material-dashboard";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axios from "axios";


axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
    'Access-Control-Allow-Credentials': true,
};

axios.defaults.withCredentials = true;


const appInstance = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
appInstance.use(router)
appInstance.use(MaterialDashboard)
appInstance.use(pinia)
appInstance.mount('#app')

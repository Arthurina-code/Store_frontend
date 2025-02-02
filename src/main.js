import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const instance = axios.create({
    baseURL: '/api',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});// configure for requirements
instance.defaults.withCredentials = true

// Configure axios to send cookie information to the backend

// const axiosPlugin = {
//     install(app) {
//
//     },
// };
const app = createApp(App)
app.config.globalProperties.$axios = instance;
app.use(router)
// app.use(axiosPlugin)
app.mount('#app')

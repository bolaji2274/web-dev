import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Status from './components/Status.vue'

Vue.component('Server-Status', Status);

// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

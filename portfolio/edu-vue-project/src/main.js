import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css' This is the first css file in the default vue 

import './assets/my_style.css' //This is my new css file

const app = createApp(App)

app.use(router)

app.mount('#app')

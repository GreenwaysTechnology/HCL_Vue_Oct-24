    // import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

//integrate pinia statement lib.
app.use(createPinia())

app.mount('#app')
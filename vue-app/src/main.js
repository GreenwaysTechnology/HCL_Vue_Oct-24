
import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/StatusBar.vue'

// createApp(App).mount('#app')
const app = createApp(App)
// app.component('my-component',{
//     //
// })
app.component('StatusBar',StatusBar)

app.mount('#app')

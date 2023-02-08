import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

// import VIcon from '../plugins/index.js'
import VIcon from './components/v-icon/index.vue'

const app = createApp(App)
app.component('v-icon', VIcon)
// app.use(VIcon)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

// createApp(App).use(store).use(router).mount('#app')



import { createApp } from 'vue'
import App from './App.vue'
import './styles/base.css'
import SvgIcon from './components/svg-icon/SvgIcon.vue'
import router from './router'
import { store, key } from './store'

const app = createApp(App)

app.component('svg-icon', SvgIcon)
app.use(router)
app.use(store, key)

app.mount('#app')

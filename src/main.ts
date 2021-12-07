import { createApp } from 'vue'
import App from './App.vue'
import './styles/base.css'
import SvgIcon from './components/svg-icon/SvgIcon.vue'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.mount('#app')

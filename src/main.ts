import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css' // animate 动画
import './styles/index.scss'
import SvgIcon from './components/svg-icon/SvgIcon.vue'
import router from './router'
import './permission'
import { store, key } from './store'
import 'element-plus/dist/index.css'

import { setupProdMockServer } from '../mock' // 模拟数据
setupProdMockServer()

const app = createApp(App)

app.component('svg-icon', SvgIcon)
app.use(router)
app.use(store, key)

app.mount('#app')

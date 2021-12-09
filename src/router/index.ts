import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import NotFound from '../views/404/404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import router from './router'
import { store } from '@/store' 

router.beforeEach(async (to, from) => {
  const token = localStorage.getItem('token')
  if (!token) {
    if (to.path !== '/login') {
      const path = `/login?redirect=${encodeURIComponent(to.path)}`
      router.push(path)
      return false
    }
  } else {
    const username = store.state.user.username
    if (!username) {
      const userInfo = await store.dispatch('user/getUserInfo')
    }

  }
})

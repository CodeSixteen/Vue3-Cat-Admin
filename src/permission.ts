import router from './router'

router.beforeEach(async (to, from) => {
  const token = localStorage.getItem('token')
  if (!token) {
    if (to.path !== '/login') {
      const path = `/login?redirect=${encodeURIComponent(to.path)}`
      router.push(path)
      return false
    }
  }
})

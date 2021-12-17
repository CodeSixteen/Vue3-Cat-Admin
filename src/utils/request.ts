import axios from 'axios'
import router from '@/router'
import { ElMessageBox, ElNotification } from 'element-plus'

const service = axios.create({
  baseURL: '',
  timeout: 0
})

service.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res: any = response.data
    if (res.code && res.code !== 200) {
      if (res.code === 401) {
        ElMessageBox.confirm('登录信息失效，请重新登录', '提示', {
          confirmButtonText: '重新登录',
          showCancelButton: false,
          showClose: false,
          closeOnClickModal: false,
          type: 'warning'
        })
          .then(() => {
            localStorage.clear()
            router.push('/login')
          })
          .catch(() => {
            localStorage.clear()
            router.push('/login')
          })
      } else {
        ElNotification.error({
          title: 'Error',
          message: res.msg
        })
      }
      return Promise.reject(res)
    } else {
      return res
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service

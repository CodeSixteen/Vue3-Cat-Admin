
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'post',
    response: (data:any) => {
      const { username, password } = data.body
      if (username !== 'admin') {
        return {
          code: 500,
          msg: '用户不存在'
        }
      }
      if (password !== '123456') {
        return {
          code: 500,
          msg: '密码错误'
        }
      }
      return {
        code: 200,
        message: "ok",
        data: 'k54djKJDA1856_adb86uanUIT'
      }
    }
  },
  {
    url: '/api/userinfo',
    method: 'get',
    response: (data: any) => {
      const { authorization } = data.headers
      if (!authorization || authorization !== 'k54djKJDA1856_adb86uanUIT') {
        return {
          code: 401,
          msg: 'Unauthorization'
        }
      }
      return {
        code: 200,
        message: "ok",
        data: {
          avatarUrl: "https://cytest123.oss-cn-shenzhen.aliyuncs.com/USER_AVATAR/1614047143235.jpg",
          name: "Admin",
          perms: ["becodeproduct:list", "becodeproduct:add", "becodeproduct:update"]
        }
      };
    }
  },
  {
    url: '/api/logout',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: ''
      };
    }
  },
] as MockMethod[]

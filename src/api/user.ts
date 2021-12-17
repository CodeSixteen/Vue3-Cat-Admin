import request from '@/utils/request'
const baseApi = '/api'
/**
 * 登录
 * @param data 
 * @returns 
 */
export function login(data: any) {
  return request({
    url: `${baseApi}/login`,
    method: 'post',
    data
  })
}
/**
 * 退出登录
 * @returns
 */
export function logout() {
  return request({
    url: `${baseApi}/logout`,
    method: 'post'
  })
}

export function getUserinfo() {
  return request({
    url: `${baseApi}/userinfo`,
    method: 'get'
  })
}

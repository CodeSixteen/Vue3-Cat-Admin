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

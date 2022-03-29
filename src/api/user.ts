import request from '~/axios/resquest'
import type { CostomResponse } from '~/types/user'

export function login(data: { username: string; password: string }) {
  return request<CostomResponse<string>>({
    url: '/login',
    method: 'post',
    data
  })
}

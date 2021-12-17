import { logout, login, getUserinfo } from '@/api/user'

export interface UserState {
  username: string,
  avatar: string
}

const state: UserState = {
  username: 'Admin',
  avatar: ''
}

const mutations = {
  SET_USERNAME: (state: UserState, name: string) => {
    state.username = name
  }
}

const actions = {
  setUsername(context: any, name: string) {
    context.commit('SET_USERNAME', name)
  },
  getUserInfo(context: any) {
    return new Promise((resolve: any, reject) => {
      getUserinfo()
        .then((res: any) => {
          const username = res.data.name
          context.commit('SET_USERNAME', username)
          resolve(res)
        })
        .catch((e: any) => {
          reject(e)
        })
    })
  },
  logout(context: any) {
    return new Promise((resolve: any, reject) => {
      logout()
        .then(() => {
          context.commit('SET_USERNAME', '')
          localStorage.removeItem('token')
          resolve()
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}

export const user = {
  namespaced: true,
  state,
  mutations,
  actions
}

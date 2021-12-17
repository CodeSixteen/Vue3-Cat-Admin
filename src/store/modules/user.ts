import { logout, login, getUserinfo } from '@/api/user'

export interface UserState {
  username: string,
  avatar: string
}

const state: UserState = {
  username: '',
  avatar: ''
}

const mutations = {
  SET_USERNAME: (state: UserState, name: string) => {
    state.username = name
  },
  SET_AVATAR: (state: UserState, avatar: string) => {
    state.avatar = avatar
  }
}

const actions = {
  getUserInfo(context: any) {
    return new Promise((resolve: any, reject) => {
      getUserinfo()
        .then((res: any) => {
          const { name, avatarUrl } = res.data
          context.commit('SET_USERNAME', name)
          context.commit('SET_AVATAR', avatarUrl)
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
          context.commit('SET_AVATAR', '')
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

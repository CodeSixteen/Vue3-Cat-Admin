export interface UserState {
  username: string
}

const state: UserState = {
  username: 'Admin'
}

const mutations = {
  SET_USERNAME: (state: UserState, name: string) => {
    state.username = name
  }
}

const actions = {
  setUsername(context: any, name: string) {
    context.commit('SET_USERNAME', name)
  }
}

export const user = {
  namespaced: true,
  state,
  mutations,
  actions
}

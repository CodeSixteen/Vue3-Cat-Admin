export interface AppState {
  device: string,
  openSidebar: boolean
}

const state: AppState = {
  device: 'desktop',
  openSidebar: true
}

const mutations = {
  TOGGLE_DEVICE: (state: AppState, device: string) => {
    state.device = device
  },
  TOGGLE_SIDEBAR: (state: AppState) => {
    state.openSidebar = !state.openSidebar
  },
  SET_SIDEBAR: (state: AppState, open: boolean) => {
    state.openSidebar = open
  }
}

const actions = {
  toggleDevice(context: any, device: string) {
    context.commit('TOGGLE_DEVICE', device)
  },
  toggleSidebar(context: any) {
    context.commit('TOGGLE_SIDEBAR')
  },
  openSidebar(context: any) {
    context.commit('SET_SIDEBAR', true)
  },
  closeSidebar(context: any) {
    context.commit('SET_SIDEBAR', false)
  }
}

export const app = {
  namespaced: true,
  state,
  mutations,
  actions
}

import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { user, UserState } from './modules/user'
import { app, AppState } from './modules/app'

export interface State {
  user: UserState,
  app: AppState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    user,
    app
  }
})

export function useStore() {
  return baseUseStore(key)
}

import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { user, UserState } from './modules/user'

export interface State {
  user: UserState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    user
  }
})

export function useStore() {
  return baseUseStore(key)
}

import { User } from '~/types/user'

export const useApiAuthStore = defineStore({
  id: 'apiAuthStore',
  state: () => ({ user: null as User | null, isAuth: false }),
  getters: {
    isLoggedIn: state => !!state.user
  },
  actions: {
    async login (credentials: {email: string, password: string}) {
      return await $fetch(useRuntimeConfig().public.apiUrl + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      }).then(() => this.getUser()).catch((error) => {
        throw error
      })
    },
    async getUser () {
      return await $fetch(useRuntimeConfig().public.apiUrl + '/users/me', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      }).then((res) => {
        this.user = res as User
      }).catch((error) => {
        this.user = null
        throw error
      })
    }
  }
})

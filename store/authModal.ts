
export const useAuthModalStore = defineStore({
  id: 'authModalStore',
  state: () => ({ status: false }),
  actions: {
    setStatus (status: boolean) {
      this.status = status
    }
  }
})

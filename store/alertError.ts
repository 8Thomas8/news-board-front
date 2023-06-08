
export const useAlertErrorStore = defineStore({
  id: 'alertErrorStore',
  state: () => ({ title: '', message: '', show: false }),
  actions: {
    setAlert (title: string, message: string) {
      this.title = title
      this.message = message
      this.showAlert()
      this.clearAlert()
    },
    clearAlert () {
      setTimeout(() => {
        this.resetAlert()
      }, 5000)
    },
    resetAlert () {
      this.hideAlert()
      this.title = ''
      this.message = ''
    },
    showAlert () {
      this.show = true
    },
    hideAlert () {
      this.show = false
    }
  }
})

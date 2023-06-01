<script setup lang="ts">
import { useAuthModalStore } from '~/store/authModal'
import validation from '~/config/validation'

const authModalStore = useAuthModalStore()
const modalAuthStatus = computed(() => authModalStore.status)
const isSignin = ref(false)
const updateModalAuthStatus = (newValue: boolean) => {
  authModalStore.setStatus(newValue)
}

const loginForm = ref({
  email: '',
  password: ''
})

const loginFormErrors: Ref<{ email: boolean | string; password: boolean | string; }> = ref({
  email: false,
  password: false
})

const signinForm = ref({
  username: '',
  email: '',
  plainPassword: ''
})
const plainPassword2 = ref('')

const signinFormErrors: Ref<{ username: boolean | string; email: boolean | string; plainPassword: boolean | string; plainPassword2: boolean | string; }> = ref({
  username: false,
  email: false,
  plainPassword: false,
  plainPassword2: false
})

const switchForm = () => {
  isSignin.value = !isSignin.value
  resetLoginForm()
  resetLoginErrors()
  resetSigninForm()
  resetSigninFormErrors()
}

const resetLoginForm = () => {
  loginForm.value.email = ''
  loginForm.value.password = ''
}

const resetLoginErrors = () => {
  loginFormErrors.value.email = false
  loginFormErrors.value.password = false
}

const resetSigninForm = () => {
  signinForm.value.username = ''
  signinForm.value.email = ''
  signinForm.value.plainPassword = ''
  plainPassword2.value = ''
}

const resetSigninFormErrors = () => {
  signinFormErrors.value.username = false
  signinFormErrors.value.email = false
  signinFormErrors.value.plainPassword = false
  signinFormErrors.value.plainPassword2 = false
}

const onSubmitLogin = () => {
  // Validation
  if (loginFormValidation()) {
    // Submit
  }
}

const loginFormValidation = () => {
  loginFormErrors.value.email = validation.email(loginForm.value.email, true)
  loginFormErrors.value.password = validation.required(loginForm.value.password)

  return !loginFormErrors.value.email && !loginFormErrors.value.password
}

const onSubmitSignin = () => {
  // Validation
  if (signinFormValidation()) {
    // Submit
  }
}

const signinFormValidation = () => {
  signinFormErrors.value.username = validation.username(signinForm.value.username, true)
  signinFormErrors.value.email = validation.email(signinForm.value.email, true)
  signinFormErrors.value.plainPassword = validation.plainPassword(signinForm.value.plainPassword, true)
  signinFormErrors.value.plainPassword2 = validation.plainPassword2(plainPassword2.value, signinForm.value.plainPassword)

  return !signinFormErrors.value.username && !signinFormErrors.value.email && !signinFormErrors.value.plainPassword && !signinFormErrors.value.plainPassword2
}
</script>

<template>
  <div>
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0 "
      enter-to-class="opacity-100 "
      leave-active-class="transition duration-100 ease-out"
      leave-from-class="opacity-100 "
      leave-to-class="opacity-0 "
    >
      <div v-if="modalAuthStatus" class="w-full h-full fixed top-0 left-0 z-[60] bg-gray-600/70 overflow-x-hidden overflow-y-auto" />
    </Transition>

    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="transform opacity-0 translate-y-[50px]"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-out duration-50"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform opacity-0 translate-y-[50px]"
    >
      <div v-if="modalAuthStatus" class="w-full h-full fixed top-0 left-0 z-[60]  overflow-x-hidden overflow-y-auto">
        <div class="m-3 transition-all ease-out mt-14 sm:max-w-lg sm:w-full sm:mx-auto">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <form v-if="!isSignin" @submit.prevent="onSubmitLogin()">
              <div class="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
                <h3 class="font-bold text-gray-800 dark:text-white">
                  Connexion
                </h3>
                <button type="button" class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-gray-500 transition-all rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" @click.prevent="updateModalAuthStatus(false)">
                  <span class="sr-only">Close</span>
                  <svg
                    class="w-3.5 h-3.5"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div class="flex flex-col p-6 overflow-y-auto gap-y-6">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium dark:text-white">Adresse email</label>
                  <div class="relative">
                    <input
                      id="email"
                      v-model="loginForm.email"
                      type="email"
                      :class="loginFormErrors.email ? 'border-red-200' : 'border-gray-200'"
                      class="block w-full px-4 py-3 text-sm border rounded-md shadow-sm pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="adresse@email.fr"
                    >
                    <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
                      <span class="text-gray-400 i-mdi-email" />
                    </div>
                    <div v-if="loginFormErrors.email" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-red-600 i-mdi-alert-circle" />
                    </div>
                  </div>
                  <p v-if="loginFormErrors.email" class="absolute mt-1 text-sm text-red-600">
                    {{ loginFormErrors.email }}
                  </p>
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium dark:text-white">Mot de passe</label>
                  <div class="relative">
                    <input
                      id="password"
                      v-model="loginForm.password"
                      :class="loginFormErrors.password ? 'border-red-200' : 'border-gray-200'"
                      type="text"
                      class="block w-full px-4 py-3 text-sm border rounded-md shadow-sm pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="********"
                    >
                    <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
                      <span class="text-gray-400 i-mdi-password" />
                    </div>
                    <div v-if="loginFormErrors.password" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-red-600 i-mdi-alert-circle" />
                    </div>
                  </div>
                  <p v-if="loginFormErrors.password" class="absolute mt-1 text-sm text-red-600 ">
                    {{ loginFormErrors.password }}
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-end px-4 py-3 border-t gap-x-2 dark:border-gray-700">
                <AtomicsCtaMainButton text="Créer un compte" type="button" @click.prevent="switchForm()" />
                <AtomicsCtaMainButton text="Se connecter" color="blue" type="submit" />
              </div>
            </form>
            <form v-else @submit.prevent="onSubmitSignin()">
              <div class="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
                <h3 class="font-bold text-gray-800 dark:text-white">
                  Créer un compte
                </h3>
                <button type="button" class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-gray-500 transition-all rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" @click.prevent="updateModalAuthStatus(false)">
                  <span class="sr-only">Close</span>
                  <svg
                    class="w-3.5 h-3.5"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div class="flex flex-col p-6 overflow-y-auto gap-y-6">
                <div>
                  <label for="username" class="block mb-2 text-sm font-medium dark:text-white">Pseudo</label>
                  <div class="relative">
                    <input id="username" type="text" :class="signinFormErrors.username ? 'border-red-200' : 'border-gray-200'" class="block w-full px-4 py-3 text-sm border rounded-md shadow-sm pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Rambo">
                    <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
                      <span class="text-gray-400 i-mdi-account" />
                    </div>
                    <div v-if="signinFormErrors.username" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-red-600 i-mdi-alert-circle" />
                    </div>
                  </div>
                  <p v-if="signinFormErrors.username" class="absolute mt-1 text-sm text-red-600 ">
                    {{ signinFormErrors.username }}
                  </p>
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium dark:text-white">Adresse email</label>
                  <div class="relative">
                    <input id="email" type="email" :class="signinFormErrors.email ? 'border-red-200' : 'border-gray-200'" class="block w-full px-4 py-3 text-sm border rounded-md shadow-sm pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="adresse@email.fr">
                    <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
                      <span class="text-gray-400 i-mdi-email" />
                    </div>
                    <div v-if="signinFormErrors.email" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-red-600 i-mdi-alert-circle" />
                    </div>
                  </div>
                  <p v-if="signinFormErrors.email" class="absolute mt-1 text-sm text-red-600 ">
                    {{ signinFormErrors.email }}
                  </p>
                </div>
                <div>
                  <label for="password1" class="block mb-2 text-sm font-medium dark:text-white">Mot de passe</label>
                  <div class="relative">
                    <input id="password1" type="text" :class="signinFormErrors.plainPassword ? 'border-red-200' : 'border-gray-200'" class="block w-full px-4 py-3 text-sm border rounded-md shadow-sm pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="********">
                    <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
                      <span class="text-gray-400 i-mdi-password" />
                    </div>
                    <div v-if="signinFormErrors.plainPassword" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-red-600 i-mdi-alert-circle" />
                    </div>
                  </div>
                  <p v-if="signinFormErrors.plainPassword" class="absolute mt-1 text-sm text-red-600 ">
                    {{ signinFormErrors.plainPassword }}
                  </p>
                </div>
                <div>
                  <label for="password2" class="block mb-2 text-sm font-medium dark:text-white">Répétez le mot de passe</label>
                  <div class="relative">
                    <input id="password2" type="text" :class="signinFormErrors.plainPassword2 ? 'border-red-200' : 'border-gray-200'" class="block w-full px-4 py-3 text-sm border rounded-md shadow-sm pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="********">
                    <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
                      <span class="text-gray-400 i-mdi-password" />
                    </div>
                    <div v-if="signinFormErrors.plainPassword2" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-red-600 i-mdi-alert-circle" />
                    </div>
                  </div>
                  <p v-if="signinFormErrors.plainPassword2" class="absolute mt-1 text-sm text-red-600 ">
                    {{ signinFormErrors.plainPassword2 }}
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-end px-4 py-3 border-t gap-x-2 dark:border-gray-700">
                <AtomicsCtaMainButton text="J'ai déjà un compte" type="button" @click.prevent="switchForm()" />
                <AtomicsCtaMainButton text="Créer mon compte" color="blue" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

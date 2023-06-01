<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import navigation from '~/config/navigation'
import { useAuthModalStore } from '~/store/authModal'

const authModalStore = useAuthModalStore()
</script>

<template>
  <header class="z-50 flex flex-wrap w-full py-4 text-sm bg-white sm:justify-start sm:flex-nowrap dark:bg-gray-800">
    <nav class="w-full px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <Menu>
        <div class="flex items-center justify-between">
          <a class="inline-flex items-center text-xl font-semibold gap-x-2 dark:text-white" href="#">
            <img class="w-10 h-auto" src="https://picsum.photos/75/75" alt="Logo">
            Newsboard
          </a>
          <MenuButton>
            <div class="sm:hidden">
              <button type="button" class="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-2" aria-controls="navbar-image-and-text-2" aria-label="Toggle navigation">
                <svg class="w-4 h-4 hs-collapse-open:hidden" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg class="hidden w-4 h-4 hs-collapse-open:block" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </MenuButton>
        </div>

        <!-- Mobile menu -->
        <div class="absolute left-0 w-full overflow-hidden transition-all duration-300 bg-white sm:hidden basis-full grow">
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems class="flex flex-col gap-5 pb-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <template v-for="item in navigation" :key="item.title">
                <MenuItem>
                  <nuxt-link class="font-medium" :to="item.href">
                    {{ item.title }}
                  </nuxt-link>
                </MenuItem>
              </template>
            </MenuItems>
          </transition>
        </div>
      </Menu>

      <!-- Desktop menu -->
      <div class="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <ul class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
          <template v-for="item in navigation" :key="item.title">
            <li>
              <nuxt-link class="font-medium" :to="item.href">
                {{ item.title }}
              </nuxt-link>
            </li>
          </template>
          <li>
            <AtomicsCtaMainButton text="Connexion" color="blue" type="button" @click.prevent="authModalStore.setStatus(true)" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
a {
    &.router-link-exact-active {
      @apply font-medium text-blue-500;
    }
    &:not(.router-link-exact-active) {
      @apply text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500;
    }
}
</style>

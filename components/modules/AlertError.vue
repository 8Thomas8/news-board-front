<script setup lang="ts">
import { useAlertErrorStore } from '~/store/alertError'

const alertErrorStore = useAlertErrorStore()
</script>

<template>
  <div v-if="alertErrorStore.show" class="p-4 border border-red-200 rounded-md bg-red-50" role="alert">
    <div class="flex">
      <div class="flex-shrink-0">
        <span class="text-red-400 mt-0.5 i-mdi-close-circle" />
      </div>
      <div class="ml-4">
        <h3 class="text-sm font-semibold text-red-800">
          {{ alertErrorStore.title }}
        </h3>
        <div class="mt-2 text-sm text-red-700">
          {{ alertErrorStore.message }}
        </div>
      </div>
      <div class="pl-3 ml-auto">
        <div class="-mx-1.5 -my-1.5">
          <button type="button" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600" data-hs-remove-element="#dismiss-alert" @click.prevent="alertErrorStore.resetAlert()">
            <span class="sr-only">Fermer</span>
            <span class="i-mdi-close" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

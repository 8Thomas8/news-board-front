<script setup lang="ts">
import footerNavigation from '~/config/footerNavigation'
</script>

<template>
  <footer class="py-4 border-t shadow-inner">
    <div class="flex flex-col items-center justify-center gap-y-3">
      <nav class="flex gap-x-4">
        <template v-for="item in footerNavigation" :key="item.title">
          <nuxt-link class="text-xs font-semibold text-gray-600 hover:underline focus:outline-none" :title="item.title" :to="item.href">
            {{ item.title }}
          </nuxt-link>
        </template>
      </nav>
      <!-- Copyright -->
      <p class="flex items-center gap-1 text-xs text-gray-500">
        Newsboard <span class="i-mdi-copyright" /> {{ new Date().getFullYear() }}, tous droits réservés.
      </p>
    </div>
  </footer>
</template>

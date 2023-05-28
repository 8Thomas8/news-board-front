<script setup lang="ts">
import { ModulesMainFooter } from '~/.nuxt/components'

</script>

<template>
  <div>
    <ModulesMainHeader />
    <main>
      <slot />
    </main>
    <ModulesMainFooter />
  </div>
</template>

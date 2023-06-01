<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Title'
  },
  message: {
    type: String,
    required: true,
    default: 'Text'
  }
})
</script>

<template>
  <div class="p-4 bg-white border border-blue-700 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700" role="info">
    <div class="flex">
      <div class="flex-shrink-0">
        <span class="text-blue-500 mt-0.5 i-mdi-info" />
      </div>
      <div class="ml-4">
        <h3 class="font-semibold text-gray-800 dark:text-white">
          {{ props.title }}
        </h3>
        <p class="mt-2 text-sm text-gray-700 dark:text-gray-400">
          {{ props.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>

</style>

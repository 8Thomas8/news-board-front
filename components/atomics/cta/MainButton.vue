<script setup lang="ts">
const props = defineProps({
  color: {
    type: String as PropType<'blue' | 'red' | 'green' | 'yellow'>,
    required: false,
    default: ''
  }
})

const returnColors = () => {
  switch (props.color) {
    case 'blue':
      return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 dark:focus:ring-offset-gray-800'
    case 'red':
      return 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:focus:ring-offset-gray-800'
    case 'green':
      return 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 dark:focus:ring-offset-gray-800'
    case 'yellow':
      return 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500 dark:focus:ring-offset-gray-800'
    default:
      return 'text-gray-700 border-gray-500 hover:bg-gray-100 focus:ring-blue-500 dark:focus:ring-offset-gray-800'
  }
}
</script>

<template>
  <button :class="returnColors()" class="inline-flex items-center justify-center gap-2 px-4 py-3 m-1 text-sm font-semibold transition-all border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
    <slot>Button</slot>
  </button>
</template>

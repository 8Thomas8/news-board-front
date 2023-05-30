<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Button'
  },
  color: {
    type: String as PropType<'blue' | 'red' | 'green' | 'yellow'>,
    required: false,
    default: 'blue'
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
      return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 dark:focus:ring-offset-gray-800'
  }
}
</script>

<template>
  <button :class="returnColors()" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm">
    {{ props.text }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
})
</script>
<template>
  <button
    :class="[
      'bg-yellow cursor-pointer ease-in duration-200 filter hover:outline-2',
      type !== 'transparent' && 'hover:bg-white hover:outline-yellow',
      type === 'transparent' && 'hover:bg-transparent hover:drop-shadow-none hover:outline-yellow',
    ]"
  >
    <p class="css-body text-white px-12 py-4 hover:text-yellow ease-in duration-200">{{ label }}</p>
  </button>
</template>

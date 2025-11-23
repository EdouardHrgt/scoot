<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: String,
  Spot: Object,
})
</script>

<template>
  <span
    class="bg-yellow w-[189px] py-[1rem] absolute grid place-content-center before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[17px] before:border-l-[25px] before:border-l-transparent before:border-r-[25px] before:border-r-transparent before:border-t-[32px] before:border-t-yellow"
    :style="{
      top: Spot?.top || 'auto',
      bottom: Spot?.bottom || 'auto',
      left: Spot?.left || 'auto',
      right: Spot?.right || 'auto',
    }"
  >
    <p class="css-h4 text-dark-navy">{{ label }}</p>
  </span>
</template>

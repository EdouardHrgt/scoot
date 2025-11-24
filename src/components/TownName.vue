<script setup>
const props = defineProps({
  label: String,
  desktop: Object,
  tablet: Object,
  mobile: Object,
})
</script>

<template>
<span
  :data-label="label"
  class="bg-yellow max-[1115px]:w-fit w-[189px] py-[1rem] absolute grid place-content-center text-center 
  before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[17px] before:border-l-[25px] before:border-l-transparent 
  before:border-r-[25px] before:border-r-transparent before:border-t-[32px] before:border-t-yellow
  max-[1115px]:before:-bottom-[8px] max-[1115px]:py-[.1rem] max-[1115px]:px-[5px]"
  :class="{
    'max-[899px]:hidden': !mobile,
    'min-[900px]:max-[1114px]:block': tablet,
    'min-[1115px]:block': desktop,
  }"
  :style="[
    desktop && {
      top: desktop.top || 'auto',
      bottom: desktop.bottom || 'auto',
      left: desktop.left || 'auto',
      right: desktop.right || 'auto',
    },
  ]"
>
    <p class="css-h4 text-dark-navy relative">{{ label }}</p>

    <component :is="'style'" v-if="tablet">
      {{
        `
        @media (min-width: 900px) and (max-width: 1114px) {
          span[data-label="${label}"] {
            top: ${tablet.top || 'auto'} !important;
            bottom: ${tablet.bottom || 'auto'} !important;
            left: ${tablet.left || 'auto'} !important;
            right: ${tablet.right || 'auto'} !important;
          }
        }
      `
      }}
    </component>

    <component :is="'style'" v-if="mobile">
      {{
        `
        @media (max-width: 899px) {
          span[data-label="${label}"] {
            display: none !important;
          }
        }
      `
      }}
    </component>
  </span>
</template>

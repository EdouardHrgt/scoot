<script setup>
import Button from '../components/Button.vue'
defineProps({
  label: String,
  location: String,
})
</script>

<template>
  <article class="flex items-center justify-between bg-light-grey px-[1rem] py-[1rem] my-[1rem] max-[900px]:flex-col">
    <div class="">
      <p>
        <strong class="css-h4 text-dark-navy max-[900px]:text-center">{{ label }}</strong>
      </p>
      <p class="css-body text-dark-navy max-[900px]:text-center max-[900px]:mb-[1rem]">{{ location }}</p>
    </div>
    <Button label="Apply" type="transparent"/>
  </article>
</template>

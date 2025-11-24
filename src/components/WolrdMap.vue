<script setup>
import TownName from './TownName.vue'
</script>

<template>
  <section class="grid place-content-center mt-[6rem]">
    <picture class="relative">
      <source media="(min-width: 1115px)" srcset="/images/assets/world-map-desktop.png" />
      <source media="(min-width: 900px)" srcset="/images/assets/world-map-tablet.png" />
      <img src="/images/assets/world-map-mobile.png" alt="World map with all Scoot locations" />

      <TownName label="New York" :desktop="{ top: '80px', left: '150px' }" :tablet="{ top: '60px', left: '93px' }" />

      <TownName label="London" :desktop="{ top: '30px', left: '395px' }" :tablet="{ top: '27px', left: '260px' }" />

      <TownName
        label="Jakarta"
        :desktop="{ top: '260px', right: '150px' }"
        :tablet="{ top: '150px', right: '110px' }"
      />

      <TownName label="Yokohama" :desktop="{ top: '85px', right: '60px' }" :tablet="{ top: '65px', right: '35px' }" />
    </picture>
  </section>
</template>

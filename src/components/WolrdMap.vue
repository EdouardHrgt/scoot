<script setup>
import TownName from './TownName.vue'
</script>

<template>
  <section class="grid place-content-center mt-[6rem]">
    <picture class="relative">
      <source media="(min-width: 1115px)" srcset="/images/assets/world-map-desktop.png" />
      <source media="(min-width: 900px)" srcset="/images/assets/world-map-tablet.png" />
      <img src="/images/assets/world-map-mobile.png" alt="Wold map with all Scoot locations" />
      <TownName label="New York" :Spot="{ top: '80px', left: '150px' }" />
      <TownName label="London" :Spot="{ top: '30px', left: '395px' }" />
      <TownName label="Jakarta" :Spot="{ top: '260px', right: '150px' }" />
      <TownName label="Yokohama" :Spot="{ top: '85px', right: '60px' }" />
    </picture>
  </section>
</template>

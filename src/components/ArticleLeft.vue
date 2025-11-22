<script setup>
import { defineProps, ref, computed } from 'vue'
import Button from './Button.vue'

const texts = ref([
  {
    label: 'Coming to a city near you',
    text: `Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to
        see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.`,
    icon: '/images/assets/near-you.jpg',
  },
  {
    label: 'Better urban living',
    text: `We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and
          we offset the minimal carbon footprint for each ride.`,
    icon: '/images/assets/better-living.jpg',
  },
])

const props = defineProps({
  isBtn: Boolean,
  index: Number,
})

const injector = computed(() => {
  const i = parseInt(props.index)
  return texts.value[i]
})
</script>

<template>
  <article
    class="my-[1.5rem] px-24 max-[900px]:px-6 relative py-20 grid grid-cols-2 gap-[3rem] max-[1024px]:grid-cols-1 bg-[url(/images/patterns/circle.svg)] bg-no-repeat bg-[left_-325px_center] max-[1024px]:bg-[left_-325px_top_4.5rem] bg-size-[445px] max-[900px]:bg-none"
  >
    <div class="max-[1024px]:order-1 w-full flex justify-center max-[1024px]:justify-center">
      <img
        :src="injector.icon"
        alt="Near-You"
        class="object-cover aspect-square block rounded-full w-full max-w-[445px] max-[900px]:max-w-[310px]"
      />
    </div>
    <div class="max-[1024px]:order-2 w-full">
      <h2 class="css-h2 text-dark-navy max-[1024px]:text-center">{{ injector.label }}</h2>
      <p class="css-body text-dim-grey my-[2rem] max-[1024px]:text-center">{{ injector.text }}</p>
      <Button class="max-[1024px]:mx-auto max-[1024px]:block" label="Learn More" v-if="isBtn" type="transparent" />
    </div>
    <svg
      class="absolute top-[4rem] max-[800px]:right-[4rem] max-[800px]:top-[5rem]"
      xmlns="http://www.w3.org/2000/svg"
      width="452"
      height="151"
    >
      <g fill="none" fill-rule="evenodd" stroke="#FCB72B" stroke-linejoin="bevel" stroke-width="15">
        <path d="M407.952 145.444l38.426-38.426-38.426-38.426" />
        <path d="M0 8h270.115v99.369h176.263" />
      </g>
    </svg>
  </article>
</template>

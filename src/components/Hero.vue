<script setup>
import { computed } from 'vue'
import Button from '../components/Button.vue'
const props = defineProps({
  label: String,
  text: String,
  isOnlyTitle: Boolean,
  bg: String,
})
const backgrounds = {
  About: {
    pc: '/images/assets/about-hero-desktop.jpg',
    tablet: '/images/assets/about-hero-tablet.jpg',
    mobile: '/images/assets/about-hero-mobile.jpg',
  },
  default: {
    pc: '/images/assets/careers-locations-hero-desktop.jpg',
    tablet: '/images/assets/careers-locations-hero-tablet.jpg',
    mobile: '/images/assets/careers-locations-hero-mobile.jpg',
  },
}

const backgroundStyle = computed(() => {
  const bgKey = props.bg || 'default'
  const bgImages = backgrounds[bgKey] || backgrounds.default
  return {
    '--bg-mobile': `url(${bgImages.mobile})`,
    '--bg-tablet': `url(${bgImages.tablet})`,
    '--bg-pc': `url(${bgImages.pc})`,
  }
})
</script>

<template>
  <!-- Big Hero for homepage only -->
  <section
    v-if="!isOnlyTitle"
    class="after:pointer-events-none px-24 max-[900px]:px-6 py-50 relative bg-[url(/images/assets/home-hero-desktop.jpg)] bg-no-repeat bg-cover before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/patterns/line.svg')] before:bg-no-repeat before:bg-[left_-75px_top_397px] after:content-[''] after:absolute after:inset-0 after:bg-[url('/images/patterns/r-white-circles.svg')] after:bg-no-repeat after:bg-[right_-35px_top_470px] max-[1024px]:bg-[url(/images/assets/home-hero-tablet.jpg)] max-[1024px]:before:hidden max-[1024px]:py-0 max-[1024px]:pt-36 max-[1024px]:after:bg-[right_-35px_bottom_35px] max-[900px]:after:hidden max-[900px]:bg-[url(/images/assets/home-hero-mobile.jpg)] max-[1200px]:before:hidden"
  >
    <h1 class="css-h1 text-white max-w-150 max-[1024px]:text-center max-[1024px]:mx-auto mb-10">
      Scooter sharing made simple
    </h1>
    <div
      class="relative max-[1024px]:text-center max-[1024px]:pl-0 pl-23 z-0 after:content-[''] after:absolute after:inset-0 after:bg-[url('/images/patterns/left-downward-arrow.svg')] after:bg-no-repeat after:bg-[left_150px_top_39px] after:origin-center after:scale-x-[-1] after:-z-10 after:pointer-events-none max-[1024px]:after:bg-[right_-370px_bottom_20px] max-[1024px]:pb-36 max-[900px]:after:bg-[right_-570px_bottom_32px]"
    >
      <p class="css-body text-white max-w-100 max-[1024px]:m-auto max-[900px]:mt-10 relative z-10">
        Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our
        cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
      </p>
      <Button class="mt-10 relative z-10" label="Get Scootin" type="transparent" />
    </div>
  </section>

  <!-- default Hero -->
  <section
    v-if="isOnlyTitle"
    :style="backgroundStyle"
    class="px-24 max-[900px]:px-6 py-18 relative bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-tablet)] lg:bg-[image:var(--bg-pc)] bg-cover bg-center after:content-[''] after:absolute after:bg-[url('/images/patterns/r-white-circles.svg')] after:bg-no-repeat after:bg-[right_-30px_top_50%] after:inset-0 max-[900px]:after:hidden"
  >
    <h1 class="css-h1 text-white max-[900px]:text-center max-[900px]:mx-auto">
      {{ props.label || 'Label Missing...' }}
    </h1>
  </section>
</template>

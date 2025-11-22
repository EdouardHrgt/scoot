<script setup>
import { defineProps, ref, computed } from 'vue'
import Button from './Button.vue'
const texts = ref([
  {
    label: 'Easy to use riding telemetry',
    txt: `The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've
          been using the scooter, your traveling distance, and many more things all in an easy to use app.`,
    icon: '/images/assets/telemetry.jpg',
  },
  {
    label: 'Zero hassle payments',
    txt: `Our payment is as easy as one two three. We accept most credit cards and debit
          cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment
          for up to a month.`,
    icon: '/images/assets/payments.jpg',
  },
   {
    label: 'Mobility for the digital era ',
    txt: `Getting around should be simple (and even
          fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.`,
    icon: '/images/assets/digital-era.jpg',
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
    class="max-[800px]:py-3 overflow-x-hidden px-24 max-[900px]:px-6 relative py-20 grid grid-cols-2 gap-[3rem] max-[1024px]:grid-cols-1 bg-[url(/images/patterns/circle.svg)] bg-no-repeat bg-[right_-325px_center] max-[1024px]:bg-[right_-325px_top_4.5rem] bg-size-[445px] max-[900px]:bg-none"
  >
    <div class="max-[1024px]:order-2 w-full">
      <h2 class="css-h2 text-dark-navy max-[1024px]:text-center">{{ injector.label }}</h2>
      <p class="css-body text-dim-grey my-[2rem] max-[1024px]:text-center">{{ injector.txt }}</p>
      <Button class="max-[1024px]:mx-auto max-[1024px]:block" label="Learn More" v-if="isBtn" type="transparent" />
    </div>
    <div class="max-[1024px]:order-1 w-full flex justify-center max-[1024px]:justify-center">
      <img
        :src="injector.icon"
        alt="Telemetry"
        class="object-cover aspect-square block rounded-full w-full max-w-[445px] max-[900px]:max-w-[310px]"
      />
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="741"
      height="151"
      class="absolute bottom-[5rem] right-0 max-[1080px]:bottom-[2rem] max-[1080px]:right-[-10rem] max-[1024px]:bottom-[45%] max-[1024px]:right-[0] max-[800px]:bottom-[56%] max-[800px]:left-[1rem]"
    >
      <g fill="none" fill-rule="evenodd" stroke="#FCB72B" stroke-linejoin="bevel" stroke-width="15">
        <path d="M740.969 8H182.854v99.369H6.591" />
        <path d="M44.64 145.64L6.214 107.214 44.64 68.787" />
      </g>
    </svg>
  </article>
</template>

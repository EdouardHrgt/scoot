<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: String,
})
const datas = ref([
  {
    label: 'Our tech',
    text: `We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric
           scooters are a joy to ride!`,
    icon: '/images/assets/our-tech.jpg',
    id: '01',
  },
  {
    label: 'Our integrity',
    text: `We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.`,
    icon: '/images/assets/our-integrity.jpg',
    id: '02',
  },
  {
    label: 'Our community',
    text: `We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.`,
    icon: '/images/assets/our-community.jpg',
    id: '03',
  },
])
</script>

<template>
  <section class="">
    <h2 class="css-h2 text-dark-navy text-center mb-[4rem] max-[900px]:mb-[1.5rem]">
      {{ props.title || 'Missing Props' }}
    </h2>
    <ol class="flex items-center justify-between max-[1024px]:flex-col gap-[2rem] px-24 max-[900px]:px-6 mb-[3rem]">
      <li v-for="el in datas" :key="el.id">
        <section class="relative w-fit mb-[5.5rem] mx-auto">
          <img :src="el.icon" alt="el.label" class="aspect-square max-w-[240px] w-full rounded-full object-cover" />
          <div
            class="absolute rounded-full bg-yellow bottom-[-57px] left-[50%] translate-x-[-50%] w-[96px] aspect-square grid place-content-center"
          >
            <p class="css-h4 text-dark-navy">{{ el.id }}</p>
          </div>
        </section>
        <div class="text-center">
          <h3 class="text-dark-navy css-h4 mb-[1.5rem]">{{ el.label }}</h3>
          <p class="css-body text-dim-grey max-w-[25rem]">{{ el.text }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

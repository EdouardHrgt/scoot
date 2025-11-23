<script setup>
import Job from '../components/Job.vue'
const jobs = [
  { label: 'General Manager', location: 'Jakarta, Indonesia' },
  { label: 'UI/UX Designer', location: 'Yokohama, Japan' },
  { label: 'Blog Content Copywriter', location: 'New York, United States' },
  { label: 'Graphic Designer', location: 'New York, United States' },
  { label: 'Fleet Supervisor', location: 'Jakarta, Indonesia' },
  { label: 'UX Analyst', location: 'London, United Kingdom' },
]
</script>

<template>
  <section class="px-24 max-[900px]:px-6 mt-[5rem] mb-[5rem]">
    <Job v-for="j in jobs" :key="j.label" :label='j.label' :location='j.location'/>
  </section>
</template>

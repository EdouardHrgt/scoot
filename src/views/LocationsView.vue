<script setup>
import Footer from '../components/Footer.vue'
import SignUp from '../components/SignUp.vue'
import Hero from '../components/Hero.vue'
import Button from '../components/Button.vue'
</script>

<template>
  <section>
    <Hero isOnlyTitle="true" label="Locations" />
    <div class="px-24 max-[900px]:px-6 flex items-center justify-between gap-[1rem] max-[1024px]:flex-col py-20">
      <h2 class="css-h2 text-dark-navy max-w-fit min-w-[250px]">Your city not listed?</h2>
      <p class="css-body text-dim-grey max-w-[450px] max-[1024px]:text-center max-[1024px]:my-[1.5rem] max-[900px]:my-[1rem]">
        If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based
        on demand. Feel free to message us by clicking the link or messaging us on social.
      </p>
      <Button label="Message Us" />
    </div>
    <SignUp />
    <Footer />
  </section>
  <!-- About Location Careers Get Scootin Locations New York London Yokohama Jakarta Your city not listed? If you’d like to
    see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free
    to message us by clicking the link or messaging us on social. Message Us Sign up and Scoot off today About Location
    Careers -->
</template>

<style scoped></style>

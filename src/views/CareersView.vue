<script setup>
import Footer from '../components/Footer.vue'
import SignUp from '../components/SignUp.vue'
import Hero from '../components/Hero.vue'
import BubbleList from '../components/BubbleList.vue'
import ArticleRight from '../components/ArticleRight.vue'
import Jobs from '../components/Jobs.vue'
</script>

<template>
  <section>
    <Hero isOnlyTitle="true" label="Careers" />
    <ArticleRight :isBtn="true" :index="3" />
    <BubbleList title="Why join us?" />
    <Jobs />
    <SignUp />
    <Footer />
  </section>
</template>

<style scoped></style>

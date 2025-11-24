<script setup>
import Footer from '../components/Footer.vue'
import SignUp from '../components/SignUp.vue'
import Hero from '../components/Hero.vue'
import ArticleRight from '../components/ArticleRight.vue'
import ArticleLeft from '../components/ArticleLeft.vue'
import BubbleList from '../components/BubbleList.vue'
import Faqs from '../components/Faqs.vue'
</script>

<template>
  <section>
    <Hero :isOnlyTitle="true" label="About" bg="About" />
    <span class="block max-[1024px]:py-[2rem]"></span>
    <ArticleRight :isBtn="true" :index="2" />
    <ArticleLeft :isBtn="true" :index="1" />
    <BubbleList title="Our Values" />
    <Faqs />
    <SignUp />
    <Footer />
  </section>
</template>

<style scoped></style>

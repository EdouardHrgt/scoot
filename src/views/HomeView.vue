<script setup>
import Footer from '../components/Footer.vue'
import SignUp from '../components/SignUp.vue'
import Hero from '../components/Hero.vue'
import Instructions from '../components/Instructions.vue'
import ArticleRight from '../components/ArticleRight.vue'
import ArticleLeft from '../components/ArticleLeft.vue'
</script>

<template>
  <section>
    <Hero :isOnlyTitle="false" />
    <Instructions />
    <ArticleRight :isBtn="true" :index="0"/>
    <ArticleLeft :isBtn="true" :index="0"/>
    <ArticleRight :isBtn="true" :index="1"/>
    <SignUp />
    <Footer />
  </section>
</template>

<style scoped></style>

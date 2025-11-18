<script setup>
</script>

// APP.Vue
<template>
  <nav>
    <RouterLink to="/" class="bg-yellow">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>

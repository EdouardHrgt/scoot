<script setup>
const props = defineProps({
  isMobile: Boolean,
  menuOpen: Boolean, 
})

const emit = defineEmits(['close-menu'])

const handleClick = () => {
  emit('close-menu')
}
</script>

<template>
  <nav :class="isMobile ? 'flex flex-col gap-6 py-16 px-6' : 'bg-white py-10'">
    <RouterLink
      to="/about"
      :class="[
        'px-3 hover:text-yellow ease-in duration-200',
        isMobile ? 'text-white css-body-bold' : 'text-dim-grey css-body',
      ]"
      active-class="text-yellow"
      @click="isMobile ? handleClick() : null"
    >
      About
    </RouterLink>
    <RouterLink
      to="/locations"
      :class="[
        'px-3 hover:text-yellow ease-in duration-200',
        isMobile ? 'text-white css-body-bold' : 'text-dim-grey css-body',
      ]"
      active-class="text-yellow"
      @click="isMobile ? handleClick() : null"
    >
      Locations
    </RouterLink>
    <RouterLink
      to="/careers"
      :class="[
        'px-3 hover:text-yellow ease-in duration-200',
        isMobile ? 'text-white css-body-bold' : 'text-dim-grey css-body',
      ]"
      active-class="text-yellow"
      @click="isMobile ? handleClick() : null"
    >
      Careers
    </RouterLink>
  </nav>
</template>

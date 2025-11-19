<script setup>
defineProps({
    label: String,
})
</script>
<template>
    <button class="bg-yellow cursor-pointer ease-in duration-200 hover:bg-white filter hover:drop-shadow-[0_0_4px_var(--color-yellow)]">
    <p class="css-body text-white px-10 py-4 hover:text-yellow ease-in duration-200">{{ label }}</p>
    </button>

</template>
<style scoped></style>

    
<script setup lang="ts">
const props = defineProps({
  routeName: String,
  label: String,
})
</script>

<template>
  <li class="p-2 bg-blue-400 text-white rounded m-1"><NuxtLink :to="{ name: props.routeName }">{{ props.label }}</NuxtLink></li>
</template>

<style scoped>

</style>
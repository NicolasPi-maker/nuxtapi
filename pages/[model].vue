<script setup lang="ts">
import EntityFetcher from "~/components/EntityFetcher.vue";
const { params } = useRoute();
</script>

<template>
  <EntityFetcher :entity="params.model"/>
</template>

<style scoped>

</style>
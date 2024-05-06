<script setup lang="ts">
import NavLink from "~/components/NavLink.vue";

const routes = [
  { name: "books", path: "/books", label: "Livres" },
  { name: "posts", path: "/posts", label: "Articles" },
  { name: "users", path: "/users", label: "Utilisateurs" },
];
</script>

<template>
  <ul class="flex gap-3">
    <NavLink v-for="route in routes" :key="route" :routeName="route.name" :label="route.label" />
  </ul>
</template>

<style scoped>

</style>
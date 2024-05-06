<template>
  <nav class="w-full flex justify-center">
    <ul class="space-x-4">
      <li class="capitalize m-3">
        <nuxt-link v-for="{path, name} in menu" :to="path" class="m-3 p-2 bg-blue-400 text-white rounded">{{ name }}</nuxt-link>
      </li>
    </ul>
  </nav>
  <NuxtPage />
</template>
<script setup>

const menu = [
  {path: '/', name: 'Home'},
  {path: '/users', name: 'Users'},
  {path: '/books', name: 'Books'},
  {path: '/posts', name: 'Posts'},
]

</script>

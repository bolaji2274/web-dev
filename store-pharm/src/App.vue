<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView />
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

</style>

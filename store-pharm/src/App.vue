<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Dup from './components/Dup.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView />
  <Dup/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif, 'Open sans';
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
body{
  background-color: #920d0d;
  /* background-image: url('image/buy.jpeg'); */
  background-image: url('image/bg-image.jpg');
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  background-position: center;
}
</style>

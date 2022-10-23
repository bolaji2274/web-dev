<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue'


export default {
  components: {
    Header,HomeView
  }
}

</script>

<template>
  <div>

  <Header />
  <HomeView />
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,800;1,200;1,700&display=swap');
body{
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
    display: block;
}

</style>

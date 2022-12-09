<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footers from './components/Footer.vue';


export default {
  components: {
    Header,
    Footers
  }
}

</script>

<template>
  <div>

  <Header />

</div>
  <RouterView />
<Footers name='company' help='get help' shop='online shop' follow='follow us'/>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,800;1,200;1,700&display=swap');
body{
    font-family: 'Poppins', sans-serif;
    display: block;
}

</style>

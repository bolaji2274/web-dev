<script>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
export default{
  components: {
    NavbarVue
  }
}

</script>

<template>
  <header>
    <NavbarVue/>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


</style>

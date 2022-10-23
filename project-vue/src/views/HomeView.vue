<script>
import HeroPage from '../components/HeroPage.vue'
import Product from '../components/Product.vue'
import HowTo from '../components/HowTo.vue'
import Blog from '../components/Blog.vue'
import Footers from '../components/Footer.vue'

export default {
  components: {
    HeroPage, Product, HowTo, Blog, Footers
  }
}


</script>

<template>
  <main>
    <HeroPage />
    <Product />
    <HowTo />
    <Blog />
    <Footers />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
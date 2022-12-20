<template>
  <header>
    <Store/>
  </header>

  <RouterView />
</template>



<script>
import { RouterLink, RouterView } from 'vue-router'
import Store from '@/components/Store.vue'
export default {
  components: {
    Store
  }
}
</script>



<style scoped>

</style>

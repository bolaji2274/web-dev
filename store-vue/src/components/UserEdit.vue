<template>
  <div>
    <ul>
      <li v-for="i in getName" :key="i.id">{{i.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    getName(){
      return this.$store.state.names.filter(item => item.name)
    }
  }
}
</script>

<style>

</style>
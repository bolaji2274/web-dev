<template>
  <div>
    <ul>
        <li v-for="(i, index) in myName" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
    computed: {
        myName(){
            return this.$store.state.names.filter(name => name.month)
        }
    }
}
</script>

<style>

</style> 
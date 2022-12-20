<template>
  <div>
    <h1>Hello,Wolrd</h1>
    <!-- <h1>Server Status {{status}}</h1> -->
    <!-- <button @click="changeStatus">Chnage Status</button> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            status: 'Critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal'
        }
    },
}
</script>

<style>

</style>
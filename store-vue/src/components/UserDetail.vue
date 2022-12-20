<template>
  <div>
    <h1>User Detail component</h1>
    <h2>User Name is : {{switchName()}}</h2>
    <button @click="$$emit('resetName', myName)">Reset Name</button>
  </div>
</template>

<script>
export default {
    props: {
        myName: {
            type: String
        }
    },
    methods: {
        switchName() {
            return this.myName.split('').reverse().join('');
        },
        resetName(){
            this.myName = 'Bolajis';        }
    },
}
</script>

<style>

</style>
<template>
    <div class="container">
            <h1 style="text-align: center;">Hi welcome voice ai</h1>
                <div class="heart"></div>
            <div class="btn">
                <button id="start" @click="onStart">Voice Start</button>
                <button id="stop" @click="onStop">Voice Stop</button>
                <button id="speak" @click="readOut">Speak out</button>
            </div>
    </div>
</template>

<script setup>

</script>
<style scoped>
div.container{
  background: aqua;
}
.heart{
    position: relative;
    height: 160px;
    width: 100px;
    margin: 0 auto;
    background-color: #d16ba5;
    border-radius: 200px 200px 0 0;
    transform: rotate(45deg);
}
.heart::before{
    content: "";
    position: absolute;
    background: #d16ba5;
    height: 160px;
    width: 100px;
    transform: rotate(-90deg);
    border-radius: 200px 200px 0 0;
    left: -30px;
    top: 30px;
}
.btn{
    margin-left: 40%;
    margin-top: 10%;
    padding: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
}
</style>
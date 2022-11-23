<template>
    <div class="body">
    <div class="container">
        <div class="header">
            <h2>Goute Generator</h2>
        </div>
        <div class="main-content">
            <div class="text-area">
                <span class="quteo">
                    "I do the very best I know - the very best I
                    can; and I mean to keep on doing so until the end"
                </span>
            </div>
            <div class="person">Abraham Lincoln</div>

            <div class="button-area">
                <button id="new-qoute" @click="newQoute">New Qoute</button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            
        }
    },
    methods: {
        newQoute() {
            // let random = Math.floor(Math.random() * qotes.length);
        }
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.body{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('post-three.jpg') no-repeat center center/ cover;
    height: 100vh;
}
.container{
    width: 550px;
    height: 450px;
}
.header{
    font-size: 1.2rem;
    border: solid 2px #fff;
    color: #fff;
    padding: 5px;
    background-color: #262626;
    padding: 5px;
    width: 80%;
    margin: 20px auto;
    border-radius: 5px;
}
.main-content{
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 15px;
    padding: 50px 40px;
    box-shadow: 0 0 10px;
}
.main-content .text-area {
    font-size: 1.5rem;
    line-height: 1.5;
}
.main-content .person{
    font-sise: 1.6rem;
    color: red;
    text-transform: uppercase;
    margin-top: 20px;
}
.button-area button {
    background-color: #262626;
    color: #fff;
    padding: 10px 15px;
    margin-top: 20px;
    border-radius: 5px;
}
.button-area button:active {
    background-color: lightblue;
}
</style>

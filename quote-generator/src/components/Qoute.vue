<template>
    <div class="body">
    <div class="container" v-on:mousemove="onStart">
        <div class="header">
            <h2>HB Qoute Generator</h2>
        </div>  
        <div class="loading"  v-if="loading">
            <p>{{loader()}} loading .....</p>
        </div>
        <div class="main-content" v-if="!loading"> 
            <div class="text-area">
                <span class="quote">
                   {{qoute.content}}
                </span>
            </div>
            <div class="person">{{qoute.character}}</div>

            <div class="button-area">
                <button id="new-qoute" @click="newQoute">New Qoute</button>
            </div>
        </div>
    </div>
    <!-- <button @click="onStart">Start BTN</button>
    <button @click="onStop">Stop BTN</button> -->
    </div>
</template>
<script>
export default{
    data() {
        return {
            loading: true,
            qoute: {
        content: '',
        anime: '',
        character: '',
        load: 'Loading '
        }
    }
    },
    methods: {
        loader(){
            setInterval(() => {
                this.load += '.';
                if (this.load === 'Loading ....'){
                    this.load = 'Loading '
                }
            }, 300);
        },
        async newQoute() {
            // let random = Math.floor(Math.random() * qotes.length);
            //const data = await fetch('https://animechan.vercel.app/api/random').then(res => res.json());
		const data = await fetch('https://free-quotes-api.herokuapp.com').then(res => res.json());
            //https://free-quotes-api.herokuapp.com/
            this.qoute = {
                content: data.quote,
                anime: data.anime,
                character: data.character
        }
        this.readOut(`${this.qoute.character} said `);
	setTimeout(() => {
			this.readOut(`${this.qoute.content}`);
			}, 3000)

        this.loading = false;        
    },
       
        readOut(message){
            const speech = new SpeechSynthesisUtterance();
            // get differences voice 
            const allVoices = speechSynthesis.getVoices();
            speech.text = message;
            speech.volume = 1;
            window.speechSynthesis.speak(speech);
            console.log("Speak Begin");
        }

    },
        created() {
        this.newQoute();
    },
    mounted(){
        this.readOut("Hi, Welcome To Qoute generator API service, You are welcome to be here . Thanks.");
    }
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
    /* height: 300px; */
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
    font-size: 1.6rem;
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
.loading{
    color: white;
    font-size: 1.5rem;
}
</style>

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

<script>
export default {
    name: 'Voice',
    data() {
        return {
            
        }
    },
    methods: {
        onStart() {
            this.recogniton.start();
        },
        onStop() {
            this.recogniton.stop();
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
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        const recogniton = new SpeechRecognition();

        // speechRecognition Start
        recogniton.onstart = function(){
            console.log("Voice enable");
        };
        //   speechRecogniton on Result
        recogniton.onresult = function(event){
            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript;
            transcript = transcript.toLowerCase();
            console.log(`My word : ${transcript}`);
            if (transcript.includes("good evening")){
                this.readOut("evening sir");
            }
            if (transcript.includes("open youtube")){
                this.readOut("okay sir.i am opening || youtube for you sir");
                open("https://www.youtube.com/");
            }
            if (transcript.includes("open google")){
                this.readOut("okay sir.i am opening google for you sir");
                open("https://www.google.com/");
            }
            if (transcript.includes("open github") ||
                transcript.includes('git')){
                this.readOut("okay sir.i am opening github for you sir");
                open("https://www.github.com/");
            }
            // how to treat two sylablle
            if (
                transcript.includes("open firebase") || 
                transcript.includes("open fire base"))
                {
                this.readOut("okay sir.i am opening firebase for you sir");
                open("https://www.firebase.com/");
            }
            if (transcript.includes("what is today's date")) {
                const date = new Date();

                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();

                // This arrangement can be altered based on how we want the date's format to appear.
                let currentDate = `${day}-${month}-${year}`;
                this.readOut(currentDate);
            };
        };
        //speechRecognition End
        recogniton.onend = function(){
            console.log("Voice Disable");
        };
    },
}
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
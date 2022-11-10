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
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recogniton = new SpeechRecognition();

// speechRecognition Start
recogniton.onstart = function(){
    console.log("Voice enable");
}
//   speechRecogniton on Result
recogniton.onresult = function(event){
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    console.log(`My word : ${transcript}`);
    if (transcript.includes("good evening")){
        readOut("evening sir");
    }
    if (transcript.includes("open youtube")){
        readOut("okay sir.i am opening || youtube for you sir");
        open("https://www.youtube.com/");
    }
    if (transcript.includes("open google")){
        readOut("okay sir.i am opening google for you sir");
        open("https://www.google.com/");
    }
    if (transcript.includes("open github") ||
        transcript.includes('git')){
        readOut("okay sir.i am opening github for you sir");
        open("https://www.github.com/");
    }
    // how to treat two sylablle
    if (
        transcript.includes("open firebase") || 
        transcript.includes("open fire base"))
        {
        readOut("okay sir.i am opening firebase for you sir");
        open("https://www.firebase.com/");
    }
    if (transcript.includes("what is today's date")) {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        readOut(currentDate);
    }
};

//speechRecognition End
recogniton.onend = function(){
    console.log("Voice Disable");
}

//speechrecogniton continous this may not work on chrome
// recogniton.continuous = true;


// function for start and stop
// startBtn.addEventListener("click", () => {
//     recogniton.start();
// });
// stopBtn.addEventListener("click", () => {
//     recogniton.stop();
// });

let onStart = () => {
    recogniton.start();
}
let onStop = () => {
    recogniton.stop();
}

// Speech speak

function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    // get differences voice 
    const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("Speak Begin");
}

// speakBtn.addEventListener("click", () => {
//     readOut("Hi, Bolaji Ammed .my dear lovers, let code a simple voice artificial inteligence using web API")
// })




</script>
<style scoped>
div.container{
  background: aqua;
  max-width: 60%;
  margin: 0 auto;
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
.btn button{
    padding: 10px;
    max-width: 70%;
    margin: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
}
</style>
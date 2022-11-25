import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'


const app = createApp(App)

app.use(router)

app.mount('#app')

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
}
recogniton.onend = function(){
    console.log("Voice Disable");
}

let onStart = () => {
    recogniton.start();
}
let onStop = () => {
    recogniton.stop();
}
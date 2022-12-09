<template>

  <main class="app">
    <h1>The Quiz</h1>

    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score {{ score }} / {{ questions.length }}</span>
      </div>
      <div class="options">
        <label v-for="(option, index) in getCurrentQuestion.options" :key="index" :class="`option ${getCurrentQuestion.selected == index
          ? index == getCurrentQuestion.answer
            ? 'correct'
            : 'wrong'
          : ''
        } ${getCurrentQuestion.selected != null &&
          index != getCurrentQuestion.selected
          ? 'disabled'
          : ''
        }`">
          <input type="radio" :name="getCurrentQuestion.index" :value="index" v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected" @change="setAnswer">

          <span>{{ option }}</span>
        </label>
      </div>

      <button
      @click="nextQuestion"
      :disabled="!getCurrentQuestion.selected">
      {{
        getCurrentQuestion.index == questions.length - 1
        ? ' Finish'
        : getCurrentQuestion.selected == null
        ? 'select an option'
        : 'Next Question'
      }}
    </button>

    </section>

    <section v-else>
      <h2>You have finished the Quiz !</h2>
      <p>Your Score is {{score}} / {{questions.length}}</p>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'


const questions = ref([

  {
    question: 'What is vue js',
    answer: 0,
    options: [
      'Vuejs is a prgresive framwork for building a web user interfaces',
      'A google Api framework for promoting google product',
      'To view the distance between two point',
      'No Idea !!!'
    ],
    selected: null
  },
  {
    question: 'A vuejs Directive use for displaying an input data is ',
    answer: 1,
    options: [
      'v-bind',
      'v-model',
      'v-if',
      'No Idea !!!'
    ],
    selected: null
  },
  {
    question: 'Who developed Vuejs ?',
    answer: 2,
    options: [
      'Dennis Richie',
      'Elon Musk',
      'Evan You',
      'No Idea !!!'
    ],
    selected: null
  },
  {
    question: 'Which of the following is not a property of an object',
    answer: 3,
    options: [
      'Enumerable',
      'Configurable',
      'Writable',
      'Mutable'
    ],
    selected: null
  },
  {
    question: 'One of This is not a property in vuejs .',
    answer: 1,
    options: [
      'Methods',
      'Slot',
      'props',
      'data'
    ],
    selected: null
  }
])

const quizCompleted = ref(false);
const currentQuestion = ref(0);

const score = computed(() => {
  let value = 0;
  questions.value.map(q => {
    if (q.selected == q.answer) {
      value++
    }
  })
  return value;
})

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const setAnswer = evt => {
  questions.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}
const nextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
  } else {
    quizCompleted.value = true;
  }
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montsarrat', sans-serif;
}

body {
  background-color: #271636;
  color: #fff;
}
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}
h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.quiz {
  background-color: #382a4b;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
}
.quiz-info{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.quiz-info .question {
  color: #8f8f8f;
  font-size: 1.25rem;
}
.quiz-info .score{
  color: #fff;
  font-size: 1.25rem;
}
.options{
  margin-bottom: 1rem;
}
.option{
  display: block;
  padding: 1rem;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
.option:hover{
  background-color: #2cce7d;
}
.option.wrong{
  background-color: #ff5a5f;
}
.option:last-of-type{
  margin-bottom: 0;
}
.options.disable {
  opacity: 0.5;
}
.option input{
  display: none;
}
button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;

  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.5rem;
  border-radius: 0.5rem;
}
button:disabled{
  opacity: 0.5;
}
h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}
</style>

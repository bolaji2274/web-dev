<template>
<div id="app">
  <TodosVue v-bind:todos="todos"/>
</div>

  <RouterView />
</template>


<script>
// import { RouterLink, RouterView } from "vue-router";
import TodosVue from "./components/Todos.vue";


export default {
  name: 'app',
  components: {
    TodosVue
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Todo One',
          completed: false
        },
        {
          id: 2,
          title: 'Todo two',
          completed: true
        },
        {
          id: 3,
          title: 'Todo three',
          completed: false
        }
      ]
    }
  },
}

</script>



<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>

<template>
<div id="app">
  <HeaderVue />
  <AddTodo />
  <TodosVue v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
</div>

  <RouterView />
</template>


<script>
// import { RouterLink, RouterView } from "vue-router";
import HeaderVue from "./components/Layout/Header.vue";
import TodosVue from "./components/Todos.vue";
import AddTodo from './components/AddTodo.vue'


export default {
  name: 'app',
  components: {
    HeaderVue,
    TodosVue,
    AddTodo
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
          completed: true
        }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
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
.btn{
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>

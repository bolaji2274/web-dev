<script>
import TodoVue from '../components/Todo.vue';
import TodoItemVue from '../components/TodoItem.vue';
export default{
  components:{
    TodoVue,
    TodoItemVue
  }
}
</script>

<template>
  <main>
    <TodoVue/>
    <TodoItemVue :todos="todos"/>
    
</main>
</template>

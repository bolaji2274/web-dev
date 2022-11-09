<template>
    <div class="container">
       <h1 style="text-align: center;">Todo-List App</h1>
     <form @submit="createTodo">
        <label for="">Title</label>
        <input v-model="title" type="text" class="form-control" required>
        <label for="">Description</label>
        <textarea v-model="description" class="form-control" rows="4" required></textarea>   
     <br>
        <button class="btn btn-success">Submit</button>
     </form> 
     <div class="row">
        <div class="col-md-6">
            <h3>Todo-App List</h3>
        </div>

     </div>
<TodoItemVue :todos="todos"/>

    </div>
</template>
<script>
import TodoListVue from './TodoList.vue';
import TodoItemVue from './TodoItem.vue';
export default {
    name: 'app',
    components: {
      TodoListVue,
      TodoItemVue
    },
    data() {
      return {
        todos: [
          {
            title: 'Add Title....',
            description: 'Add Desc...',
        }
      ]
      }
    },
    methods: {
      createTodo(e) {
        e.preventDefault();
        this.todos.Ob
      }
    },
}
</script>

<style scoped>
/* div {
    margin: auto;
    width: 50%;
}
form{
    font-size: 25px;
}
input{
    height: 100px;
    width: 400px;
}
label{
    text-align: left;
}
.input-title{
    height: 80px;
}
input[type=text], select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.btn {
  width: 80px;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; 
}


.row:after {
  content: "";
  display: table;
  clear: both;
} */
</style>
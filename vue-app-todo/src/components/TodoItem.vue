<template>
    <div class="card">
        <div class="panel panel-default" v-for="todo in todos" :key="todo">
            <div class="panel-header">
                {{todo.title}}
            </div>
            <div class="panel-body">
               {{todo.description}}
            </div>
            <div class="panel-footer">
                <button class="btn btn-success">Update</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'todo-item',
    props: ['todos'],
    methods: {
        completed(){

        },
        deleteTodo(){

        }
    },
}
</script>
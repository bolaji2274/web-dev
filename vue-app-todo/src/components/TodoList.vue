<template>
    <div>
        <TodoItemVue/>
    </div>
</template>

<script>
import TodoItemVue from './TodoItem.vue';

export default{
components: {
    TodoItemVue
},
name: 'todo-list',
}
</script>
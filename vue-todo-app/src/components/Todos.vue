<template>
    <div>
        <div v-for="todo in todos" :key="todo.id">
            <TodosItem :todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>
<script>
import TodosItem from './TodosItem.vue'

export default {
    name: "Todos",
    components: {
        TodosItem
    },
    props: ["todos"]
}
</script>
<style scoped>

</style>
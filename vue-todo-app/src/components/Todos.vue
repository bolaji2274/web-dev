<template>
    <div>
        <div v-for="todo in todos" :key="todo">
            <TodosItem :todo="todo"/>
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
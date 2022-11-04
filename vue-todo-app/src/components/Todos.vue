<template>
    <div>
        <div v-for="todo in todos" :key="todo">
            {{todo.title}}
        </div>
    </div>
</template>
<script>
export default {
    name: "Todos",
    props: ["todos"]
}
</script>
<style scoped>

</style>
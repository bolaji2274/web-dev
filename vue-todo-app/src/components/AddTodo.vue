<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="AddTodo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>
<script>
export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo: function(){
            const newTodo = {
                id: ''
            }
        }
    },
}
</script>

<style scoped>
form {
    display: flex;
}
input[type="text"]{
    flex: 10;
    padding: 5px;
    height: 50px;
}
input[type="submit"]{
    flex: 2;
}
</style>
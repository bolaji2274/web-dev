<template>
    <div>
        <p>Todos Item</p>
    </div>
</template>
<script>
export default {
    name: "TodosItem"
}
</script>
<style scoped>
.todo-item{
    background: #f4f4f4;
    padding: 18px;
    border: 1px #ccc dotted;
}
.is-complete{
    text-decoration: line-through;
}
.del{
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50px;
    cursor: pointer;
    float: right;
}

</style>
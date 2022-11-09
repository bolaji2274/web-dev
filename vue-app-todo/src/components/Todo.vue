<template>
    <div class="container">
       <h1>Todo-List App</h1>
     <form>
        <label for="">Title</label>
        <input type="text" class="input-title" required>
        <label for="">Description</label>
        <input type="text" class="desc">
        <button class="btn">Submit</button>
     </form>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
div {
    display: block;
    text-align: center;
}
form{
    margin: 15px;
    display: inline-block;
}

</style>
<template>
    <div class="container">
       <h1>Todo-List App</h1>
     <form>
        <label for="">Title</label>
        <br>
        <input type="text" class="input-title" required>
        <br>
        <label for="">Description</label>
        <br>
        <input type="text" class="desc">
        <br>
        <button class="btn">Submit</button>
     </form>

     <div class="row">
        <div class="colum">
            <h3>Completed</h3>
        </div>
        <div class="colum">
            <h3>Pending</h3>
        </div>
     </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
div {
    /* display: block; */
    /* text-align: center; */
    margin: auto;
    width: 50%;
    /* align-items: center; */
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
  /* width: 100px; */
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
  height: 300px; /* Should be removed. Only for demonstration */
}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
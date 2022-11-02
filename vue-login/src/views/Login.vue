<template>
    <body>
       <div class="sign-up">
        <form @submit.prevent="">
        <h1>Log IN</h1>
        <label>Email</label>
        <input type="email">
        <label>Password</label>
        <input type="password">
        <input type="button" value="Submit">
    </form>
    </div>
</body>
</template>

<style>
 body{
    background-color: #344a72;
    font-family: 'Roboto', sans-serif;
}
.sign-up{
    width: 420px;
    height: 350px;
    margin: auto;
    background-color: aliceblue;
    border-radius: 5px;
}
h1{
    text-align: center;
    padding-top: 20px;
}
form{
    width: 300px;
    margin-left: 20px;
}
form label{
    display: flex;
    margin-top: 20px;
    font-size: 18px;
}
form input{
    width: 100%;
    padding: 7px;
    border: none;
    border: 1px solid grey;
    border-radius: 6px;
    outline: none;
}
input[type="button"]{
    width: 320px;
    height: 35px;
    margin-top: 20px;
    border: none;
    background-color: #49c1a2;
    color: white;
    font-size: 18px;
}
</style>
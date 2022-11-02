<template>

    <div class="wrapper">
        <header class="sign-up">
            <h1>SIGN UP HERE :</h1>
        
            <form action="" @submit.prevent="validate" method="post">
                <div class="container">
                    <div class="item">
                        <p>First Name:</p>
                        <input type="text" v-model="user.firstName">
                    </div>
                    <div class="item">
                        <p>Last Name:</p>
                        <input type="text" v-model="user.lastName">
                    </div>
                    <div class="item">
                        <p>Email:</p>
                        <input type="email" v-model="user.email">
                    </div>
                    <div class="item">
                        <p>Password:</p>
                        <input type="password" v-model="user.password">
                    </div>
                    <div class="item">
                        <p>Address:</p>
                        <input type="text" v-model="user.address">
                    </div> 
                </div>
                <button type="submit" id="btn" class="container">Submit</button> 
            </form>
            
       
        <div class="text" style="text-align:center; color:greenyellow; font-size: 20px;">

        </div>
    </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
            firstName: 'Bolaji',
            lastName: 'Adekunle',
            email: 'hammedbolaji@gmail.com',
            password: '',
            address: ''
        }
    }
    },
    methods: {
        validate: function(){
            if (!this.user.lastName || !this.user.firstName || !this.user.email || !this.user.password || !this.user.address) {
                return alert('Enter all required input');
            } else{
                let myObj = JSON.stringify(this.user);
                localStorage.setItem('user', myObj);
                console.log(localStorage)
                // console.log(localStorage.getItem('password'));
                
                return alert('Registration successfully');
            }



            // if (!this.user) {
            //     return alert('Enter all required input');
            // }
            // else {
            //     console.log(!this.user)
            //     return alert('Registration successfull');
            // }
        },
        
        
    }
}
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
}


/* .sign-up {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
} */
.sign-up{
    width: 4500px;
    height: 600px;
    margin: auto;
    background-color: aliceblue;
    border-radius: 5px;
}
header .sign-up form{
    display: flex;
    align-items: center;
    justify-content: center;
}
.sign-up h1 {
    font-size: 25px;
    text-align: center;
    text-transform: uppercase;
    margin: 17px 0;
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* margin-left: 50%; */
    margin: 0 auto;
    width: 400px;
    /* top: 50%;
    left: 50%; */
}

.container p {
    font-size: 20px;
    margin: 15px 0;
}

.container input {
    font-size: 16px;
    padding: 15px 10px;
    width: 80%;
    justify-content: space-between;
    border: 2px solid grey;
    border-radius: 5px;
    outline: none;
}

#btn{
    width: 100px;
    height: 40px;
    text-align: center;
    padding: auto;
    font-size: 25px;
    color: red;
    margin-left: 34%;
    margin: 10px auto;
}
button:hover {
    color: red;
    background-color: aqua;
}
.text {
    color: #fff;
}

.item {
    width: 100%;
}


.container>div {
    flex: 50%;
    margin-bottom: 10px;
}
input:hover{
    background-color: aquamarine;
}
</style>
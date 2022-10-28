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
                <button type="submit" class="btn">Submit</button>
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
            // firstName: 'Bolaji',
            // lastName: 'Adekunle',
            // email: 'hammedbol',
            // password: '',
            // address: '',
            // valid: '',
            user: {}
        }
    },
    methods: {
        validate: function(){
            // if ((this.firstName === '') || (this.lastName === '') || (this.email === '') || (this.password === '') || (this.address === '')) {
            //     return this.valid = 'Failed';
            // } else{
            //     return this.valid = 'Passed';
            // }
            console.log(this.user)
            // if (!this.lastName || !this.firstName || !this.email || !this.password || !this.address) {
            //     return alert('Enter all required input');
            // }
            if (!this.user) {
                return alert('Enter all required input');
            }
            else   {
                return alert('Registration successfull');
            }
        },
        
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
}

body {
    background: url('./fourth.jpeg') no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    /* justify-content: center; */
    color: rgb(94, 28, 28);
    font-weight: bolder;
}

/* .sign-up {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
} */

.sign-up h1 {
    font-size: 25px;
    text-align: center;
    text-transform: uppercase;
    margin: 17px 0;
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

 .btn {
    font-size: 18px;
    font-weight: bold;
    padding: 15px 10px;
    margin-left: 25%;
    margin-top: 10px;
    width: 100px;
    border: 0;
    color: rgb(94, 28, 28);
    border-radius: 5px;
    background-color: #fff;
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

.container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* margin-left: 50%; */
    width: 400px;
    /* top: 50%;
    left: 50%; */
}

.container>div {
    flex: 50%;
    /* or - flex: 0 50% - or - flex-basis: 50% - */
    /*demo*/
    /* box-shadow: 0 0 0 1px black; */
    margin-bottom: 10px;
}
header {
    align-items: center;
}
</style>
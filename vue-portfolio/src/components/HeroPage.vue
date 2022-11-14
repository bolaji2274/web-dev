<template>
     <div class="container">
        <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-5">
             <div class="word">
                <p id="heart">&hearts;</p>
                <p class="speed">speed up communications</p>
                <h1>Hi I'm Bolaji Hammed</h1>
                <p class="studio">AU Studio is the place for everything related
                    a project, to-do-list or communication
                </p>
                <button type="button" class="btn btn-primary">Hire Me</button> <span class="triangle">&#9658;</span>
                <div class="icons-tag">
                    <div class="row">
                        <div class="col">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div class="col">
                            <i class="fa-brands fa-twitter"></i>                         
                        </div>
                        <div class="col">
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-7 sec-collum">
        <div class="image-content">
            <p class="user">&#128269; User Research</p>
            <div class="great">
                <p><span>&hearts;</span> Great Project</p>
                <h2>212+ Done</h2>
                <h3><span>2.1%</span> vs last 7 days</h3>
                <span style="text-align: center; font-size: 30px; margin: 0 auto;">&#9658;</span>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Hi I\'m Bolaji Hammed',
            speed: 'speed up communications',
            studio: 'AU Studio is the place for everything related a project, to-do-list or communication',
            hire: 'Hire Me',
            icons: [
                {title: 'fa-brands fa-instagram'},
                {title: 'fa-brands fa-twitter'},
                {title: 'fa-brands fa-facebook-f'}
            ]
        }
    },
}
</script>

<style scoped>

/* .container{
    max-height: 70%;
    margin: 0 auto;
} */
/* .col-lg-5{
    margin-top: 20%;
} */
div.word{
    margin-top: 15%;
    max-width: 90%;
    margin: 20% auto;
    /* margin-left: 50px; */
}
p.speed {
    color: red;
    width: 100px;
    opacity: 0.6;
    text-transform: uppercase;
    font-size: 13px;
}
p#heart{
    color: red;
    margin-bottom: 0px;
    opacity: 0.6;
}
.word h1{
    width: 300px;
    font-weight: bold;
}
.word p.studio{
    width: 340px;
    color: gray;
    margin-top: 40px;
}
div.sec-collum{
    background: url('about.jpg');
    background-position: center;
    background-size: cover;
    height: 450px;
    width: 100%;
    border-radius: 20px;
}
.image-content{
    position: relative;
    top: 90px;
}
div.image-content p.user{
    float: right;
    height: 40px;
    font-size: 13px;
    font-weight: bold;
    padding-top: 10px;
    margin-top: 0px;
    margin-right: 70px;
    border-radius: 8px;
    color: rgb(29, 108, 228);
    background-color: rgb(243, 221, 221);
    cursor: pointer;
    position: relative;
    bottom: 150px;
    opacity: 0.6;
}
div.great{
    width: 200px;
    font-size: 12px;
    margin-top: 30%;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    padding-left: 20px;
    /* position: fixed; */
}
div.great p{
    color: gray;
    margin-bottom: 0px;
}
div.great p span{
    color: red;
    font-size: 22px;
    width: 100px;
}
div.great h2{
    font-size: 18px;
    font-weight: bold;
}
div.great h3{
    font-size: 11px;
    margin-bottom: 0px;
}
div.great h3 span{
    color: rgb(21, 197, 21);
}
.triangle{
    color: blue;
    vertical-align: middle;
    margin-left: 20px;
    font-size: 20px;
    padding-top: 20px;
}
button.btn{
    border-radius: 20px;
    width: 130px;
    margin-top: 15px;
}
.icons-tag{
    color: red;
    margin-top: 30%;
    word-spacing: 100px;
    max-width: 200px;
    width: 150px;
    opacity: 0.7;
}
.fa-brands{
    border: 1px solid;
    width: 25px;
    height: 25px;
    border-radius: 60%;
    text-align: center;
    padding: 2px 2px 2px 2px;
}
</style>
<template>
    <div>
        <div class="container">
            <div class="row">
                <hr>
                <div class="col-md-6 first-col">
                    <div class="texts">
                        <h1>Hi! I Am <span class="span-text">UI/UX</span> Bolaji Hammed</h1>
                        <p class="text-design">Designing a user interfaces for over <span style="font-weight: bold;">7 years</span> as a product designer</p>
                        <div class="row inner-row">
                            <div class="col">
                                <button class="btn btn-danger">Hire Me</button>
                            </div>
                            <div class="col">
                                <h3>Projects</h3>
                            </div>
                        </div>
                        <div class="text-plus">
                            <h1>+84</h1>
                            <p>Clients on work worldwide</p>
                        </div>
                        <div class="row">
                                <div class="col-md-6">
                                    <h2>572</h2>
                                    <p>Project Done</p>
                                </div>
                                <div class="col-md-6">
                                    <h2>Contact</h2>
                                    <p>hammedbolajihammed@gmail.com</p>
                                </div>
                            </div>  
                         </div>
                    <div class="footer">
                                <div class="container bg-black p-footer">
                                    <div class="row">
                                        <div class="col-md-6 project row-footer">
                                            <h2>Project <br>Statistics 2022</h2>
                                            <button class="btn btn-warning warning">Know More</button>
                                        </div>
                                        <div class="col-md-6 row-footer" style="width:200px;" >
                                            <p>Website Design  <span>75</span></p> <hr>
                                            <p>Mobile App Design <span>64</span></p> <hr>
                                            <p>Brand Identity <span>37</span></p> <hr>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
                <div class="col-md-6 second-col bg-brown">
                    <img class="image-page" src="about.jpg"  alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            web: [
                {name: 'Website Design', sp: '75'},
                {name: 'Mobile App Design', sp: '64'},
                {name: 'Brand Identity', sp: '37'}
            ]
        }
    },
}
</script>

<style scoped>
hr{
    margin-bottom: 0px;
}
.row .col-md-6 .texts{
    width: 330px;
    margin-top: 10%;
}
.second-col{
    margin-top: 0px !important;
}
.texts h1{
    font-size: 40px;
    font-weight: bolder;
    color: black;
    line-height: 1.2;
}
.first-row{
    padding-left: 20%;
}
.texts h1 span{
    color: #fff;
    background-color: blue;
    border-radius: 30px;
    margin-left: 15px;
    vertical-align: bottom;
    font-size: 30px;
    /* width: 190px; */
    padding: 10px;
    opacity: 0.7;
}
.text-design{
    margin-top: 30px;
}
.inner-row{
    width: 300px;
    padding-top: 30px;
}
.inner-row .col .btn{
    width: 120px;
    border-radius: 0px;
    margin-right: 0px;
    background-color: orangered;
    opacity: 0.9;
}
.inner-row .col h3{
    font-size: 14px;
    vertical-align: bottom;
    padding-top: 15px;
    margin-left: 0px;
}
.text-plus{
    width: 120px;
    margin-top: 28px;
}
.text-plus h1{
    font-size: 25px;
}
.image-page{
    object-fit: cover;
    width: 110%;
    height: 100%;
}
.footer{
    width: 100%;
}
.p-footer{
    padding-bottom: 10%;
}
.row-footer{
    margin-top: 10%;
    color: #fff;
}

.row-footer span{
    float: right;
}
.row-footer p{
    margin-bottom: 0px;
}
.row .project h2{
    color: #fff;
    font-size: 18px;
}
.warning{
    margin-top: 10%;
    border-radius: 0;
}
</style>
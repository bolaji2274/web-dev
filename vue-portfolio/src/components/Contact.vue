<template>
    <div>
        <div class="container">
            <div class="row text-center">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <i class="fa-solid fa-location-dot"></i>
                    <h2>ADDRESS</h2>
                    <p>Oke Awesin Area, Ede Rd,
                        Erin-Osun, Osun State</p>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 hello">
                    <i class="fa-solid fa-phone"></i>
                    <h2>PHONES</h2>
                    <p>+2348051642109</p>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 last">
                    <i class="fa-solid fa-envelope"></i>
                    <h2>EMAIL</h2>
                    <p>hammedbolajihammed@gmail.com</p>
                    <p>@github.com/bolaji2274</p>
                </div>
        </div>
</div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
div.row{
    /* margin-top: 10%; */
    max-width: 70%;
    margin: 10% auto;
    background-color: black;
    padding: 40px 40px 40px 40px;
    border-collapse: collapse;
    color: #757575;
    line-height: 1.8;
    font-family: 'Poppins' !important;
}
.fa-solid{
    color: rgb(204, 59, 59);
    font-size: 25px;
    margin-bottom: 10px;
}
.row h2{
    font-size: 30px;
    color: #fff;
}
.row p2{

}
.row .hello{
    border-left: 1px solid white;
    border-right: 1px solid #fff;
}
.last p{
    margin-top: 0px;
    margin-bottom: 0px;
    width: 250px;
    overflow: hidden;
}
</style>
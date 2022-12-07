<template>
  <div>
    <div class="footer-content">
        <div class="container">
            <div class="row">
                <div class="col-md-3" style="border: 4px solid springgreen;">
                    <div class="content">
                        <a href="#"><img src="../../images/logo_2.webp" alt="" class="logo"></a>
                    </div>
                </div>
                <div class="col-md-2" style="border: 4px solid springgreen;">
                    <h1>Col 2</h1>
                </div>
                <div class="col-md-2" style="border: 4px solid springgreen;">
                    <h1>Col 2</h1>
                </div>
                <div class="col-md-2" style="border: 4px solid springgreen;">
                    <h1>Col 4</h1>
                </div>
                <div class="col-md-3" style="border: 4px solid springgreen;">
                    <h1>Col 5</h1>
                </div> 
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.footer-content{
    width: 100%;
    height: 400px;
    border: 4px solid springgreen;
    background-color: #1e1c1c;
    color: #fff;
}
.container{
    max-width: 60%;
    margin: 10% auto;
}
.logo{
    max-height: 200px;
}
a img{
    border: 0;
}
img{
    border-style: none;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
}
</style>
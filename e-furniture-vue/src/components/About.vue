<template>
  <div>
    <div class="container">
        <p>Trendy Collections</p>
        <div class="row">
            <div class="col-md-3 colum-1">
               <div class="text-content">
                <p>Alex Study Chair</p>
                <p class="price">$208.00</p>
               </div>
            </div>
            <div class="col-md-3 colum-2">
                
            </div>
            <div class="col-md-3 colum-3">
                
            </div>
            <div class="col-md-3 colum-4">
              
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
    font-family: sans-serif;
}
.container{
    width: 100%;
    max-width: 90%;
    height: 500px;
    margin: 0 auto;
    margin-top: -40px;
}
.container p{
    color: #6f5948;
    font-size: 1.8rem;
    margin-bottom: 25px;
}
.row{
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
    width: 100%;
    height: 100%;
}
.colum-1{
    flex-basis: 24%;
    background-image: url('../../images/p1_600x.webp');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: center;
    border: 10px solid #6f5948;
    border-color: #e3e1e0;
    position: relative;
}
.colum-1 .text-content{
    text-align: center;
    position: absolute;
    left: 90px;
    bottom: -6px;
}
.colum-1 .text-content p{
    font-size: 12px;
    margin-top: 20%;
}

.colum-2{
    background-image: url('../../images/p8_600x.webp');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: center;
    border: 10px solid;
    border-color: #e3e1e0;
}
.colum-3{
    flex-basis: 24%;
    background-image: url('../../images/p2_600x.webp');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: center;
    border: 10px solid #6f5948;
    border-color: #e3e1e0;
}

.colum-4{
    flex-basis: 24%;
    background-image: url('../../images/p14_600x.webp');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: center;
    border: 10px solid #6f5948;
    border-color: #e3e1e0;
}
</style>
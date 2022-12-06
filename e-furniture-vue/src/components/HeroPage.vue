<template>
  <div>
  <div class="containers">
    <div class="container-fluids ">
        <div class="text-content">
          <h1>Sofa Set with Lounger</h1>
          <p>Reveal Yourself THROUGH YOUR CHOICE</p>
          <button type="submit" class="myBtn">SHOP NOW</button>
        </div>
    </div>
  </div>
  <div id="card">
    <div class="card-content">
      <div class="containers">
        <div class="row">
          <div class="colum-1">
            <div class="text">
              <p>Relax with yourself</p>
              <h1>Coffe Tables</h1>
              <p>Lorem ipsum sit armet, consectur adispscing elit.</p>
              <button type="submit" class="myBtn">SHOP NOW</button>
            </div>
        </div>
        <div class="colum-2">
          <h1>Hello World</h1>
        </div>
        <div class="colum-3">
          <h1>Hello here</h1>
        </div>
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
.containers{
  height: 75vh;
  width: 100%;
}
.container-fluids{
  background-image: url('../../images/furni-slideshow_1.webp');
  background-size: cover;
  height: 100%;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px 10%;
  position: relative;
}
.text-content{
  position: absolute;
  top: 40%;
  left: 10%;
  color: #fff;
}
.text-content h1{
  padding: 10px 0 10px;
  font-size: 2.8rem;
}
.text-content p {
  font-size: 14px;
}
.myBtn{
  width: 100px;
  height: 40px;
  font-size: 13px;
  color: #6f5948;
  background-color: #fff;
  margin-top: 20px;
  padding: 5px;
  transition: 0.45s;
}
.myBtn:hover{
  color: #fff;
  background-color: #6f5948;
}
.row{
  height: 65%;
  width: 100%;
  max-width: 90%;
  margin: 5% auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.colum-1{
  flex-basis: 33%;
  background-image: url('../../images/img1.webp');
  background-size: cover;
  background-position: center;
}
.colum-1:hover{
  display: block;
  background-color: #6f5948;
  opacity: 0.6;
}
.colum-2{
  flex-basis: 33%;
  background-image: url('../../images/img2.webp');
  background-size: cover;
  background-position: center;
}
.colum-3{
  flex-basis: 33%;
  background-image: url('../../images/img3.webp');
  background-size: cover;
  background-position: center;
}
.text{
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 80%;
  color: #fff;
  margin: 50% auto;
  font-size: 12px;

}
</style>
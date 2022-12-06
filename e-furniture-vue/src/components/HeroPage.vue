<template>
  <div>
  <div class="containers">
    <div class="container-fluids ">
        <div class="text-content">
          <h1>Sofa Set with Lounger</h1>
          <p>Reveal Yourself THROUGH YOUR CHOICE</p>
          <button type="submit" class="myBtn">Shop Now</button>
        </div>
    </div>
  </div>
  <div id="card">
    <div class="card-content">
      <div class="container">
        <div class="row">
          <div class="colum-1">

          </div>
          <div class="colum-1">
            <h1>Hello Bolaji</h1>
        </div>
        <div class="colum-2">
          <h1>Hello World</h1>
        </div>
        <div class="colum-3">
          <h1>Hello</h1>
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
</style>
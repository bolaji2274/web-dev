<template>
  <main>
    <div>
      <nav class="text-center content">
        <div class="container">
          <h1>product</h1>
          <a href="#">All</a>
          <span> / Alex Study Chair</span>
        </div>
      </nav>

      <div class="description">
        <div class="container overflow-hidden">
          <div class="row gy-5">
            <div class="col-md-2">
              <div class=" border">
                <div class="text-content colum1">
                    <h5>Category</h5>
                    <hr>
                    <div class="list-content">
                    <ul>
                        <li><a href="#">Elegant styles</a> 
                        <i class="fa-solid fa-plus"></i>
                    </li>
                        <li><a href="#">Luxury collection</a>
                        <i class="fa-solid fa-plus"></i>
                    </li>
                        <li><a href="#">Casual dining</a>
                        <i class="fa-solid fa-plus"></i>
                    </li>
                    </ul>
                    </div>
                    <div class="text-content">
                        <h4>Best Seller</h4>
                    </div>
                    <div class="best-seller">

                    </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="p-3 border bg-light">

              </div>
            </div>

            <div class="col-md-5">
              <div class="p-3 border bg-light">

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
.content {
  background: url("../../images/fall-leaves.webp");
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 200px;
  width: 100%;
  position: relative;
}
.content::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  background: #000000;
  opacity: 0.6;
}
.content h1 {
  font-size: 28px;
  text-transform: uppercase;
  margin: 0px 0px 15px;
}
.content a {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}
.content span {
  font-size: 15px;
}
.container {
  padding-top: 50px;
  color: #fff;
}
.colum1{
    color: #6f5948;
    font-size: 14px;
    /* margin-left: 0px; */
}
.colum1 h1{
    position: relative;
}
.colum1 h1::after{
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: -5%;
    background-color: #6f5948;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: #6f5948;
}
.list-content ul li{
    margin-left: -30px;
    list-style: none;
    font-size: 12px;
    margin-bottom: 10px;
}
.list-content ul li a{
    text-decoration: none;
    color: #6f5948;

}
.list-content ul li i{
    float: right;
    font-size: 14px;
    font-weight: bold;
}
.best-seller{
    widows: 100%;
    height: 200px;
    background-image: url('../../images/img4.webp');
    background-position: center;
    background-size: 300px;
    background-repeat: no-repeat;
}
</style>

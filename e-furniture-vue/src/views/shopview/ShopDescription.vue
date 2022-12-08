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
            <div class="col-md-3">
              <div class=" border">
                <div class="colum1">
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
                    <div class="text-contents">
                        <h4>Best Seller</h4>
                    </div>
                    <div class="best-seller text-center">
                        <div class="text-content">
                            <p>Hetal Enterprises Chair</p>
                            <p class="price">$106.00</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="p-3 border bg-light">
                    <div class="row g-2">
                            <div class="col-6">
                            <div class="p-3 border bg-light">
                                <img src="../../images/p12_600x.webp" width="100%" height="100%" class="img" alt="">
                            </div>
                            </div>
                            <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                            </div>
                </div>
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
    height: 350px;
    background-image: url('../../images/p12_600x.webp');
    background-position: center top;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    border: 8px solid #e3e1e0;
    margin-top: 30px;
    position: relative;
}
.text-content{
    text-align: center;
    position: absolute;
    left: 30px;
    bottom: -6px;
}
.text-content p{
    font-size: 12px;
    width: 80%;
    font-weight: bold;
    margin-top: 20%;
}
.text-content p.price{
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 50px;
}
</style>

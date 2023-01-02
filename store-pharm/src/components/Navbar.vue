<template>
  <div>

    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand images" href="#"><img src="logo.png" alt=""> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link navbar-brand shop-by" aria-current="page" href="#"><span>Shop By <br>Category</span></a>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link navbar-brand" href="#">Link</a> -->
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
        <div class="cart">
          <i class="fa fa-shopping-cart"></i>
          <span class="list">1</span>
          <span>My Basket</span>
        </div>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
  max-width: 85%;
  margin: 10px auto;
}
.cart{
  vertical-align: middle;
  margin-top: 20px;
  font-size: 60px;
  color: #01b6c1;
  position: relative;
}
.cart span{
  font-size: 10px;
  vertical-align: middle;
  margin-left: 12px;
}
.cart .list{
  position: absolute;
  top: 15%;
  left: 15%;
  color: yellow;
  font-weight: bold;
  font-size: 19px;
}
.collapse ul li a{
  color: #56d1d7;
  padding-top: 20%;
}
</style>
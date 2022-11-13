<template>
    <div class="nav-container">
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span class="p-s">P<span class="j-s">J</span> </span> Studio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav" v-for="link in links" :key="link">
        <a class="nav-link active" aria-current="page" href="#">{{link.name}}</a>
      </div>
    </div>
    <ul class="nav justify-content-end">
        <button type="button" class="btn btn-light">{{contact}}</button> 
</ul>
  </div>
</nav>

    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {name: 'Home'},
                {name: 'About'},
                {name: 'Portfolio'},
                {name: 'Pricing'}
            ],
            contact: 'Contact us'
        }
    },
}
</script>
<style scoped>

.nav-container{
    max-width: 90%;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
}
.navbar {
    font-size: 18px;
}
.navbar-brand{
    font-size: 15px;
}
.navbar-nav a{
    margin-left: 35px;
}
.p-s{
    color: black;
}
.j-s{
    color: blue;
}
.btn{
    border-radius: 30px;
    border: 2px solid gray;
}
.navbar-brand .p-s{
    letter-spacing: -7px;
    font-size: 40px;
    margin-right: 10px;
    font-family: 'Poppins';
}
</style>
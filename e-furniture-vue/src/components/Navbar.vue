<template>
<div class="nav-container">
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><span class="p-s">P<span class="j-s">J</span> </span> Studio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <!-- <div class="navbar-nav" v-for="link in links" :key="link">
                        <a class="nav-link active" aria-current="page" href="#">{{ link.name }}</a>
                    </div> -->
                    <div class="search">
                        <form action="">
                            <input type="search" class="search" placeholder="Search">
                            <button type="submit"><i class="fa-regular fa-magnifying-glass"></i> </button>
                        </form>
                    </div>
                </div>
                <ul class="nav justify-content-end">
                    <button type="button" class="btn btn-light">{{ contact }}</button>
                    <i class="fa-sharp fa-solid fa-backward"></i>
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
                { name: 'Home' },
                { name: 'About' },
                { name: 'Portfolio' },
                { name: 'Pricing' }
            ],
            contact: 'Contact us'
        }
    },
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.nav-container{
    margin-top: 20px;
    max-width: 100%;
    margin: 30px auto;
    background-color: #f5f5f5;
    height: 100px;
}
.container-fluid{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 70%;
    margin: 30px auto;
}
</style>
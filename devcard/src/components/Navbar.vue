<template>
    <div class="container">
        <div class="nav-container">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand images" href="#"><img src="logo.png" alt=""> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div class="navbar-nav" v-for="link in links" :key="link">
                            <a class="nav-link active" aria-current="page" href="#">{{ link.name }}</a>
                        </div>
                    </div>
                    <ul class="nav justify-content-end">
                        <button type="button" class="btn">{{ contact }}</button>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Home' },
                { name: 'Works' },
                { name: 'About' },
                { name: 'Projects' },
                { name: 'Services' }
            ],
            contact: 'Let\'s chat'
        }
    },
}
</script>

<style scoped>
.navbar-nav{
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
}
.btn{
    border: 2px solid grey;
    border-radius: 0px !important;
    font-weight: bold;
}
.images{
    width: 200px;
    height: 80px;
    object-fit: contain;
}
</style>
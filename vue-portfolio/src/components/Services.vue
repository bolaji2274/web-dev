<template>
    <div>
        <div class="container text-center">
            <h1>Our Services</h1>
        <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 hello" v-for="text in services" :key="text">
                <div class="card" style="width: 18rem;">
                    <img :src="text.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{text.name}}</h5>
                        <p class="card-text">{{text.desc}}</p>
                        <a href="#" class="btn btn-danger">{{text.link}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {image: '/src/assets/image/bolaji.png', name: 'JavaScript Developer', desc: 'We are expert in developer a responsive and animation website', link: 'Youtube'},
                {image: '/src/assets/image/bolaji.jpg', name: 'Full-Stack Developer', desc: 'Full-Stack developer both Front-End And Back-End', link: 'GitHub'},
                {image: '/src/assets/image/my-hb.png', name: 'Python Developer', desc: 'Python crash Developer , Dev-ops and PHP', link: 'Instagram'}
            ]
        }
    },
}
</script>

<style scoped>
.container{
    max-width: 80%;
    margin: auto;
    margin-top: 7%;
    justify-content: space-between;
}
.container h1{
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 5%;
    text-decoration: 4px underline rgb(224, 214, 156);
}
.container h1::before{
    content: '';
    width: 100px;
    margin-top: 5%;
    background-color: brown;
    top: 10px;
    bottom: -6;
}
.row{
    
}
.card-img-top{
    height: 240px;
}
.btn{
    border-radius: 20px !important;
}
</style>

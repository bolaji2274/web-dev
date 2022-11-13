<template>
    <div>
        <div class="container text-center">
        <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 hello">
                <div class="card" style="width: 18rem;">
                    <img src="program.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">JavaScript Developer</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 hello">
                <div class="card" style="width: 18rem;">
                    <img src="software.png" style="100px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Full-Stack Developer</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>            
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 hello">
                <div class="card" style="width: 18rem;">
                    <img src="program.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Python Developer</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
                {image: 'program.png', name: 'JavaScript Developer', desc: 'We are expert in developer a responsive and animation website', link: 'Youtube'},
                {image: 'software.png', name: 'Full-Stack Developer', desc: 'Full-Stack developer both fro', link: 'Go somewhere'},
                {image: 'program.png', name: 'Python Developer', desc: 'some text', link: 'Go somewhere'}
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
.row{
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    margin: -12px;
}
.card-img-top{
    height: 240px;
}
</style>
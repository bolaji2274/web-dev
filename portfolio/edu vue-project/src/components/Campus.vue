<template>
    <div>
                    <!-- campus -->
    <section class="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet, consectetur
            adispisciing elit.
        </p>
        <div class="row">
            <div class="campus-col" v-for="item in items" :key="item">
                <img :src="item.image" alt="images">
                <div class="layer">
                    <h3>{{item.location}}</h3>
                </div>
            </div>
            <!-- <div class="campus-col">
                <img src="newyork.png" alt="images">
                <div class="layer">
                    <h3>Erin Osun @ Hub</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src="washington.png" alt="images">
                <div class="layer">
                    <h3>Erin Osun @OKe Awesin</h3>
                </div>
            </div> -->
        </div>
    </section>
    </div>
</template>
<script>
export default {
    data () {
        return {
            items: [
                {image:'london.png',location:'Erin Osun'},
                {image:'newyork.png',location:'Erin Osun @ Hub'},
                {image:'washington.png',location:'Erin Osun @ Oke Awesin'}

            ]
        }
    }
}
</script>

<style>

</style>
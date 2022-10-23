<template>
    <div>
                    <!-- campus -->
    <section class="campus">
        <h1>{{heading}}</h1>
        <p>{{desc}}</p>
        <div class="row">
            <div class="campus-col" v-for="item in items" :key="item">
                <img :src="item.image" alt="images">
                <div class="layer">
                    <h3>{{item.location}}</h3>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
export default {
    data () {
        return {
            heading: 'Our Global Campus',
            desc:'Lorem ipsum dolor sit amet, consectetur adispisciing elit.',
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
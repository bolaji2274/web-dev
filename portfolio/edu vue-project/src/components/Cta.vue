<template>
    <div>
           <!-- Call To Action -->

<section class="cta">s
    <h1 v-html="head"></h1>
    <a href="" class="hero-btn">{{contact}}</a>
</section>
    </div>
</template>
<script>
export default {
    props: {
        head: String,
        contact: String
    },
}
</script>

<style>

</style>
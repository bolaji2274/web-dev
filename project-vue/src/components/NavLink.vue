
<template>
    <section class="nav-links">
        <nav>
            <img class="imgl" src="images/logo.PNG">
            <div class="nav-links" id="navLinks">
                <ul>
                    <li v-for="link in links" :key="link"><a :href="link.url">{{link.name}}</a></li>
                    <i :class="icon"></i>
                </ul>
            </div>
        </nav>
    </section>
</template>
<script>
export default {
    data() {
        return {
            icon:'fa fa-shopping-bag',
            links: [
                { name: 'Home',url:'www.google.com' }, { name: 'Product' }, { name: 'How it works' }, { name: 'Blog' },

            ]
        }
    }
}
</script>


<style>
nav {
    display: flex;
    flex-wrap: wrap;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;
}

nav img {
    width: 150px;
}

.nav-links {
    flex: 1;
    text-align: right;
}

.nav-links ul li {
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;

}

nav ul li a {
    color: rgb(49, 50, 155);
    text-decoration: none;
    font-size: 17px;
}
</style>
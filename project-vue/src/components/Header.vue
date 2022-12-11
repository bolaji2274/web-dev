<template>
    <section class="nav-links">
        <nav>
            <img class="imgl" src="images/logo.PNG">
            <div id="navLinks">
                <ul>
                    <li v-for="link in links" :key="link"><a :href="link.url">{{link.name}}</a></li>
    
                </ul>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {name:'Home',url:'#'},
                {name:'Product',url:'#'},
                {name:'How its Works',url:'#'},
                {name:'Blog',url:'#'}
            ]
        }
    }
}
</script>


<style>
nav {
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;
}

nav img {
    width: 140px;
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

.nav-links ul li a {
    color: rgb(50, 51, 139);
    text-decoration: none;
    font-size: 14px;
}
</style>
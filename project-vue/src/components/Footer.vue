<template>
    <div>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>{{name}}</h4>
                        <ul>
                            <li><a href="#" v-for="item in companys" :key="item">{{item.about}}</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>{{help}}</h4>
                        <ul>
                            <li><a href="#" v-for="get in helps" :key="get">{{get.name}}</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>{{shop}}</h4>
                        <ul>
                            <li><a href="#" v-for="items in online" :key="items">{{items.shop}}</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>{{follow}}</h4>
                        <div class="social-links">
                            <a href="#" v-for="link in icons" :key="link"><i :class="link.social"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        help: String,
        shop: String,
        follow: String
    },
    data() {
        return {
            companys: [
                { about: 'about us' }, { about: 'our services' }, { about: 'privacy policy' }, { about: 'affiliate program' }
            ],
            helps: [
                { name: 'FAQ' }, { name: 'shipping' }, { name: 'returns' }, { name: 'order status' }, { name: 'payment options' }
            ],
            online: [
                { shop: 'watch' }, { shop: 'bag' }, { shop: 'shoes' }, { shop: 'dress' }
            ],
            icons: [
                { social: 'fab fa-facebook-f' }, { social: 'fab fa-twitter' }, { social: 'fab fa-instagram' }, { social: 'fab fa-linkedin-in' }
            ]
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.footer {
    width: 100%;
    margin-top: 30px;
}

.container {
    max-width: 1170px;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

.footer {
    background-color: #24262b;
    padding: 70px 0;
}

.footer-col {
    width: 25%;
    padding: 0 15px;
}

.footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 30px;
    font-weight: 500;
    position: relative;
}

.footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    columns: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
}

.footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgb(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50px;
    color: #ffff;
    transition: all 0.5s ease;
}

.footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
}

/* responsive */
@media(max-width: 767px) {
    .footer-col {
        width: 50%;
        margin-bottom: 30px;
    }
}

@media(max-width: 574px) {
    .footer-col {
        width: 100%;
    }
}
</style>>

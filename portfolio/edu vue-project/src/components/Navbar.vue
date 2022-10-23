
<template>
<div>

 <section class="header">
         <nav>
            <a href=""><img src="logo.png" alt=""></a>
            <div class="nav-links">
                <i class="fa fa-times"></i>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">COURSE</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
            <i class="fa fa-bars"></i>
         </nav>
    
<div class="text-box">
    <h1>{{headMessage}}</h1>
    <P>This is a website for ELERINMOSA UNIVERSITY OF TECHNOLOGY 
        located in Erin Osun. The founder was Coxxxx 
        and led by Cohortxxxx learning <br> 
        all different kind of course in all aspect of study
    </P>
    <a href="" class="hero-btn">Visit Us To Know More About Our Services</a>
</div>
    </section>
    <RouterView /> 
</div>
</template>

<script>
export default {
    props: ['headMessage'],
    data(){
        return{
            links: [
                {name: 'HOME'},
                {name: 'ABOUT'},
                {name: 'COURSE'},
                {name: 'CONTACT'},
                {name: 'BLOG'}
            ],
            icons: [
                {icon: 'fa fa-times'},
                {icon: 'fa fa-bars'}
            ]
        }
    }
}
</script>
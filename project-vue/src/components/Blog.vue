
<template>
    <div>
        <section class="blog">
                <div class="row">
                <div v-for="blog in blogs" :key="blog"> 
                    <h1>{{blog.title1}}</h1>
        
                    <p>{{blog.desc}}</p>
        
                    <a :href="blog.url" class="bbb">Read in 2 minutes</a>
                    
                    <h1 class="HHH">{{blog.title2}}</h1>
                </div>
        
                <div>
                    <img :src="image">
                </div>
                </div>
        
            </section>
    </div>
</template>
<script>
// import { list } from 'postcss';

export default {
    data(){
        return{
            image:'images/lassadf.jfif',
            blogs:[
                {title1:'7 Big Myths About UV Light You Shouldn\'t Believe',desc:'Throughout the Years, Several experts have progressed in innovating UV\'s applications with a myriad of opportunities',title2:'The Significant Benefits of Using UV-C',url:'#'}
            ]
        }
    }
}
</script>


<style>
.blog{
    width: 80%;
    margin-left: 90px;
    margin-top: 35px;
}
.blog p{
    color: rgb(49, 50, 155);
    margin-top: 12px;
    margin-bottom: 12px;
}
.blog img{
    margin-left: 70%;
    border-radius: 10px;
}
.HHH{
    font-size: 19px;
    margin-top: 15px;
}
</style>

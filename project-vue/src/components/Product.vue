<template>
  <section class="product">
    <!-- <div class="row">
            <div class="pro-list" v-for="item in items" :key="item">
                <img :src="item.image">
                <h1 v-html="item.title"></h1>
                <p v-html="item.desc"></p>
                <a class="btn2" href="#">Read Article</a>
            </div>

            <div class="pro-list2">
                <img :src="proImage" alt="pro List 2 image">
                <h1 v-html="proTitle"></h1>
                <p v-html="proDesc"></p>
                <a href="#" class="btn2">Read Article</a>
            </div>

            <div class="pro-list3">
               
                <h1>{{benefit.head1}}</h1>
                <p>{{benefit.p1}}</p>
                <a v-html="link"></a> 

                <h1>{{benefit2.head2}}</h1>
                <p v-html="benefit2.p2"></p>
                <a v-html="link"></a> 

                <h1>{{benefit3.head3}}</h1>
                <p v-html="benefit3.p3"></p>
                <a v-html="link"></a> 

            </div>
        </div> -->
    <div class="container">
      <div class="row g-2">
        <div class="col-md-4" v-for="item in items" :key="item">
          <img :src="item.image" />
          <h1 v-html="item.title"></h1>
          <p v-html="item.desc"></p>
          <a class="btn2" href="#">{{item.read}}</a>
        </div>

       <div class="col-md-4"> 
            <div class="pro-list3">
   
                <h1>{{benefit.head1}}</h1>
                <p>{{benefit.p1}}</p>
                <a v-html="link"></a> 

                <h1>{{benefit2.head2}}</h1>
                <p v-html="benefit2.p2"></p>
                <a v-html="link"></a> 

                <h1>{{benefit3.head3}}</h1>
                <p v-html="benefit3.p3"></p>
                <a v-html="link"></a> 

            </div>
        </div>

      </div>
    </div>
  </section>
  >
</template>
<script>
export default {
  props: {
    proImage: String,
    proTitle: String,
    proDesc: String,
  },
  data() {
    return {
      items: [
        {
          image: "images/bottle.jpeg",
          title: "Time to Get Your House ",
          desc: " ng elit. Enim dolores tempora quo.",
          read: 'Read Article'
        },
        {
          image: "images/web 3.PNG",
          title: "How VOC Affects Your <br>IndoornAir quality",
          desc: "Using UV Light for disinfection is becoming an <br> essential hygiene practice for both home and workspaces.",
          read: 'Read Article'
        }
      ],
      benefit: {
        head1: "The Benefit of Using UV-C Light in the Hospitality Industry",
        p1: "Experience Clean and easier breathing of Your restaurant with the latest in chemical free cleaning technology",
      },
      benefit2: {
        head2: "What is UV-C Light",
        p2: "Most People have a basic knowledge of <br>Ultraviolet(UV) light from tanning and vitamin D",
      },
      benefit3: {
        head3: "UV Light at Home",
        p3: "Everything You Should Know About Using <br>a UV Lamp in the Kitchen",
      },
      link: '<a href="#" class="bbb">Read in 3 minutes</a>',
    };
  },
};
</script>

<style scoped>
.product {
  margin-left: 30px;
  width: 100%;
  margin-top: 40px;
}
.col-md-4{
    border: 2px solid springgreen;
}


.pro-list img {
  height: 250px;
  margin-left: 40px;
  border-radius: 10px;
  width: 400px;
}

.pro-list h1 {
  margin-left: 40px;
  color: rgb(49, 50, 155);
  margin-top: 10px;
}

.pro-list p {
  color: rgb(49, 50, 155);
  font-size: 13px;
  margin-left: 40px;
  margin-top: 7px;
  margin-bottom: 20px;
}

.pro-list2 img {
  margin-left: 40px;
  height: 250px;
  border-radius: 10px;
  width: 400px;
}

.pro-list2 h1 {
  margin-left: 40px;
  color: rgb(49, 50, 155);
  margin-top: 10px;
}

.pro-list2 p {
  color: rgb(49, 50, 155);
  font-size: 13px;
  margin-top: 7px;
  margin-left: 40px;
  margin-bottom: 20px;
}

.btn2 {
  border: 1px solid rgb(49, 50, 155);
  padding: 8px 12px;
  text-decoration: none;
  font-size: 13px;
  margin-left: 40px;
  border-radius: 6px;
  transition: 1s;
}

h1 {
  color: rgb(49, 50, 155);
}

.btn2:hover {
  background: lightblue;
}

.pro-list3 {
  margin-left: 35px;
}

.pro-list3 h1 {
  color: rgb(49, 50, 155);
  font-size: 20px;
  margin-top: 10px;
}

.pro-list3 p {
  color: rgb(49, 50, 155);
  font-size: 13px;
  margin-top: 7px;
  margin-bottom: 20px;
}

.bbb {
  font-size: 13px;
}
</style>

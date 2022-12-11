<template>
  <div>
    <section class="product">
      <div class="container">
        <div class="row g-2">
          <div class="col-md-4" v-for="item in items" :key="item">
            <div class="text-content">
              <img :src="item.image" />
              <h1 v-html="item.title"></h1>
              <p v-html="item.desc"></p>
              <a class="btn2" href="#">{{ item.read }}</a>
            </div>
          </div>

          <div class="col-md-4">
            <div class="pro-list3">
              <h1>{{ benefit.head1 }}</h1>
              <p>{{ benefit.p1 }}</p>
              <a v-html="link"></a>

              <h1 class="head">{{ benefit2.head2 }}</h1>
              <p v-html="benefit2.p2"></p>
              <a v-html="link"></a>

              <h1 class="head">{{ benefit3.head3 }}</h1>
              <p v-html="benefit3.p3"></p>
              <a v-html="link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
          title: "Time to Get Your House Clean and in Order",
          desc: " Sit ac non gravido lacus. Gravido non est purus scelerisque gravido morbi quam elitng elit.",
          read: "Read Article",
        },
        {
          image: "images/web 3.PNG",
          title: "How VOC Affects Your <br>IndoornAir quality",
          desc: "Using UV Light for disinfection is becoming an <br> essential hygiene practice for both home and workspaces.",
          read: "Read Article",
        },
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins' sans-serif;
}
.product {
  height: 100%;
  width: 100%;
  padding-top: 24px;
  margin-top: 3%;
  border: 2px solid springgreen;
}

.container {
  margin: 0px 4%;
}
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 3px solid springgreen;
  width: 100%;
}
.col-md-4 {
  flex-basis: 33% !important;
  border: 2px solid springgreen;
}

.text-content img {
  height: 370px;
  border-radius: 10px;
  width: 100%;
}
.text-content h1{
  color: rgb(49, 50, 155);
  font-weight: bold;
  font-size: 30px;
  margin: 18px 0;
  line-height: 1.2;
}
.text-content p {
  color: rgb(49, 50, 155);
  font-size: 14px;
  margin-top: 7px;
  margin-bottom: 20px;
}

.text-content a{
  border: 1px solid rgb(49, 50, 155);
  padding: 8px 12px;
  text-decoration: none;
  color: rgb(49, 50, 155);
  font-size: 13px;
  border-radius: 6px;
  transition: 1s;
}

.btn2:hover {
  background: lightblue;
}

.pro-list3 {
  width: 350px;
}

.pro-list3 h1 {
  color: rgb(49, 50, 155);
  font-size: 25px;
  margin-top: 10px;
  font-weight: bold;
}

.pro-list3 p {
  color: rgb(49, 50, 155);
  font-size: 16px;
  margin-top: 7px;
  margin-bottom: 20px;
}
.pro-list3 .head{
  margin-top: 10%;
}

.bbb {
  font-size: 13px;
}
</style>

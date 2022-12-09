<template>
  <div>
    <!-- <section class="how" v-for="item in how" :key="item">
            <h1>{{item.title}}</h1>
            <a class="btt" :href="item.url">See All Articles</a>
        </section>

        <div class="ggg">
            <div class="how-list" v-for="list in howList1" :key="list">
                <img :src="list.image">

                <h1>{{list.title}}</h1>
                <p>{{list.desc}}</p>

                <a :href="list.url" class="bbb">Read in 2 minutes</a>
            </div>

            <div class="how-list2" v-for="list in howList2" :key="list">
                <img :src="list.image">

                <h1>{{list.title}}</h1>
                <p>{{list.desc}}</p>

                <a :href="list.url" class="bbb">Read in 8 minutes</a>
            </div>

            <div class="how-list2" v-for="list in howList3" :key="list">
                <img :src="list.image">

                <h1>{{list.title}}</h1>
                <P>{{list.desc}}</P>

                <a :href="list.url" class="bbb">Read in 1 minutes</a>
            </div>

            <div class="how-list2" v-for="list in howList4" :key="list">
                <img :src="list.image">
                <h1>{{list.title}}</h1>
                <p>{{list.desc}}</p>
                <a :href="list.url" class="bbb">Read in 12 minutes</a>
            </div>
        </div> -->
    <section class="how">
      <div class="container">
        <div class="row">
          <div class="col-md-3" v-for="list in howList" :key="list">
            <img :src="list.image" />
            <h1>{{ list.title }}</h1>
            <p>{{ list.desc }}</p>
            <a :href="list.url" class="bbb">Read in 12 minutes</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      how: [{ title: "The Science Behind SmartUV", url: "#hhome" }],
      howList: [
        {
          image: "images/first.PNG",
          title: "Chemical Free Cleaning",
          desc: "We have all learned about germs the hard way sickness.",
          url: "#about",
        },
        {
          image: "images/sec.PNG",
          title: "What is UV-C Light",
          desc: "UV-C light is growing in popularity as form of disinfection - but it isn't new.",
          url: "#cont",
        },
        {
          image: "images/third.PNG",
          title: "Lesser-Known Uses of UV",
          desc: "Safety practices were developed to best \<br\>handle with care.",
          url: "#",
        },
        {
          image: "images/fourth.jpeg",
          title: "UV Light in Healthcare",
          desc: "It's most common to see UV-C used in \<br\>hospitals as it is steri;izing the air.",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.how {
  height: 100%;
  width: 100%;
  padding-top: 24px;
  margin-top: 3%;
  border: 2px solid springgreen;
}
.container {
  /* padding: 30px 4%; */
  margin: 0px 4%;
  margin-bottom: 14px;
}
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 3px solid springgreen;
  width: 100%;
}
.col-md-3{
  flex-basis: 24.8% !important;
  border: 2px solid springgreen;
}
.btt {
  border: 1px solid rgb(49, 50, 155);
  background: transparent;
  text-decoration: none;
  margin-left: 650px;
  font-size: 13px;
  padding: 8px 11px;
  border-radius: 7px;
}

.ggg {
  width: 80%;
  margin-top: 25px;
  display: flex;
}

.how-list img {
  margin-left: 90px;
  height: 150px;
  border-radius: 10px;
  width: 250px;
}

.how-list2 img {
  margin-left: 50px;
  height: 150px;
  border-radius: 10px;
  width: 250px;
}

.how-list h1 {
  margin-left: 90px;
  font-size: 20px;
}

.how-list2 h1 {
  margin-left: 50px;
  font-size: 20px;
}

.how-list p {
  color: rgb(49, 50, 155);
  margin-left: 90px;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.how-list2 p {
  color: rgb(49, 50, 155);
  margin-left: 50px;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.how-list a {
  margin-left: 90px;
}

.how-list2 a {
  margin-left: 50px;
}
</style>

<template>
  <div>
    <section class="how">
      <div class="container">
        <div class="row g-2">
          <div class="col-md-3" v-for="list in howList" :key="list">
            <div class="text-content">
            <img :src="list.image" />
            <h1>{{ list.title }}</h1>
            <p v-html="list.desc"></p>
            <a :href="list.url" class="bbb">Read in 12 minutes</a>
            </div>
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins' sans-serif;
}
.how {
  height: 100%;
  width: 100%;
  padding-top: 15px;
  margin-top: 2%;
}

.container {
  margin: 0px 4%;
}
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.col-md-3{
  flex-basis: 24.8% !important;
}
.col-md-3 img{
  width: 100%;
  height: 200px;
  border-radius: 5%;
}
.col-md-3 h1{
  font-size: 20px;
  font-weight: bold;
  color: rgb(49, 50, 155);
  margin: 10px 0 12px 0;
}
.col-md-3 p{
  color: rgb(49, 50, 155);
  margin-bottom: 10px;
}
.col-md-3 a{
  color: rgb(49, 50, 155);
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

</style>

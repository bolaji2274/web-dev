<template>
  <div>
    <section class="hero-btn">
      <div class="hero-page" v-for="hero in heros" :key="hero">
        <h1>{{ titles }}</h1>
        <p>{{ hero.desc }}</p>

        <a :href="url" class="btn">Read Article</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["titles"],
  data() {
    return {
      url: "#",
      heros: [
        {
          title: "Time to get Your House Clean and in Order",
          desc: "To have good air quality is not as moving away from the city to a quiet suburb or rural environment.",
        },
      ],
    };
  },
};
</script>

<style>
.hero-btn {
  height: 85vh;
  width: 100%;
  background: url("images/background.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  padding-top: 24px;
  opacity: 0.8;
}

.hero-page {
  color: rgb(49, 50, 155);
  margin-left: 6%;
  margin-top: 16%;
}

.hero-page h1 {
  font-size: 45px;
  width: 600px;
  line-height: 60px;
  font-weight: 600;
}

.hero-page p {
  margin-top: 15px;
  width: 550px;
  margin-bottom: 25px;
  font-size: 16px;
}

.btn {
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  border: 1px solid blueviolet;
  background: blueviolet;
  padding: 12px 24px;
  border-radius: 5px;
}
</style>

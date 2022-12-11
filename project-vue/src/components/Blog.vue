<template>
  <div>
    <section class="blog">
      <div class="container">
        <div class="row g-2">
          <div class="col-md-6" v-for="blog in blogs" :key="blog">
            <div class="text-content">
              <h1>{{ blog.title1 }}</h1>

              <p>{{ blog.desc }}</p>

              <a :href="blog.url" class="bbb">Read in 2 minutes</a>

              <h3>{{ blog.title2 }}</h3>
            </div>
          </div>
          <div class="col-md-6 colum2" :style="{'background-image': image}">
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
      image: "url('images/lassadf.jfif')",
      blogs: [
        {
          title1: "7 Big Myths About UV Light You Shouldn't Believe",
          desc: "Throughout the Years, Several experts have progressed in innovating UV's applications with a myriad of opportunities",
          title2: "The Significant Benefits of Using UV-C",
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
.blog {
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

.col-md-6{
  flex-basis: 49.5% !important;
}
.colum2{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.text-content h1{
    color: rgb(49, 50, 155);
    font-size: 35px;
}
.text-content p{
    color: rgb(49, 50, 155);
}
.text-content h3{
    padding-top: 25px;
    color: rgb(49, 50, 155);
}
.text-content a{
  color: rgb(49, 50, 155);
}
</style>

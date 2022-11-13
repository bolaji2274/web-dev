<script>
import HeroPageVue from '../components/HeroPage.vue';
import ServicesVue from '../components/Services.vue';
import FootersVue from '../components/Footers.vue';
export default{
  components:{
    HeroPageVue,
    ServicesVue,
    FootersVue
  }
}

</script>

<template>
  <main>
    <HeroPageVue/>
    <ServicesVue/>
    <FootersVue/>
  </main>
</template>

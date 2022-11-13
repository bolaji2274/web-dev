<script>
import HeroPageVue from '../components/HeroPage.vue';
import ServicesVue from '../components/Services.vue';
import FootersVue from '../components/Footers.vue';
import ContactVue from '../components/Contact.vue';
export default{
  components:{
    HeroPageVue,
    ServicesVue,
    ContactVue,
    FootersVue
  }
}

</script>

<template>
  <main>
    <HeroPageVue/>
    <ServicesVue/>
    <ContactVue/>
    <FootersVue/>
  </main>
</template>

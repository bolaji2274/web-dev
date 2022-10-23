<template>
  <main>
  <course/>
  <campus/>
  <facility/>
  <testimony/>
  <cta head="Enroll For Our Various Online Course <br>Anywhere From The World" contact="CONTACT US"/>
  <Footers/>
  </main>
</template>


<script>
import course from '@/components/Course.vue'
import campus from '@/components/Campus.vue'
import facility from '@/components/Facility.vue'
import testimony from '@/components/Testimony.vue'
import cta from '@/components/Cta.vue'
import Footers from '@/components/Footer.vue'


export default {
  components: {
    course,campus,facility,testimony,cta,Footers
  }
}


</script>
<template>
  <main>
  <course/>
  <campus/>
  <facility/>
  <testimony/>
  <cta/>
  <FOOTER/>
  </main>
</template>


<script>
import course from '@/components/Course.vue'
import campus from '@/components/Campus.vue'
import facility from '@/components/Facility.vue'
import testimony from '@/components/Testimony.vue'
import cta from '@/components/Cta.vue'
import FOOTER from '@/components/Footer.vue'


export default {
  components: {
    course,campus,facility,testimony,cta,FOOTER
  }
}


</script>
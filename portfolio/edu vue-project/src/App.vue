<script>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/Navbar.vue'



export default {
  components: {
    navbar,course,campus,facility,testimony,cta,FOOTER
  }
}
</script>

<template>
	<div>
	<navbar/>
	</div>
  <RouterView /> 

</template>

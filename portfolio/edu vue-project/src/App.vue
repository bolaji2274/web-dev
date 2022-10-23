<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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

<script>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/Navbar.vue'



export default {
  components: {
    navbar
  }
}
</script>

<template>
	<div>
	<navbar headMessage="ELERINMOSA UNIVERSITY OF TECHNOLOGY"/>
	</div>
  <RouterView /> 

</template>

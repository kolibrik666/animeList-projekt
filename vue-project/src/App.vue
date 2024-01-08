<template>
  <div id="nav">
  <TheNavigation/>
  </div>
   <div class="container">
     <router-view></router-view>
   </div>
  <Footer />

</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
import Footer from '@/components/Footer.vue';

export default{
 components: {
   TheNavigation,
   Footer,
 }
}
</script>

<style scoped>
.container {
  background-color: #c9c9c9;
  flex: 1;
  padding: 20px;
}

</style>
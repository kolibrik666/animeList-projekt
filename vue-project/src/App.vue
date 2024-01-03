<template>
  <div id="nav">
  <TheNavigation/>
  </div>
   <div class="container">
     <router-view></router-view>
   </div>
</template>
<script>
// import TheNavigation from '@/components/TheNavigation.vue'
// export default{
//  components: {TheNavigation}
// }
</script>

<style scoped>
.container {
  background-color: #c9c9c9;
  flex: 1;
  padding: 20px;
}

</style>
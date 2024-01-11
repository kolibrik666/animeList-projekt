<template>
  <div id="nav">
    <router-link to="/">
      <img src="/images/logo.jpg" alt="Logo" class="logo" />
    </router-link>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/myAnimeList" class="nav-link">My Anime List</router-link>
    <router-link to="/help" class="nav-link">Help</router-link>
  </div>
</template>

<script>

</script>

<style>
#nav {
  display: flex;
  align-items: center;
  background-color: #2c50a1;
  padding: 10px;
}

#nav .active-link {
  color: #ffffff;
}

.logo {
  width: 210px;
  height: 100px;
  margin-left: 20px;
}

.nav-link {
  font-size: 28px;
  color: white;
  text-decoration: none;
  margin-left: 40px;
  margin-right: 20px;
}
</style>

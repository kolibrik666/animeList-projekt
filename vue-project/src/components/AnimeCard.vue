<template>
  <router-link
      :to="{ name: 'animeShow', params: { id: anime.id, slug: anime.slug } }"
      class="anime-card"
  >
    <img :src="'/images/' + anime.image" :alt="anime.name" class="anime-image">
    <h2 class="anime-title">{{ anime.name }}</h2>
  </router-link>
</template>

<script>
export default {
  props: {
    anime: { type: Object, required: true}
  }
};
</script>

<style scoped>
.anime-card {
  text-decoration: none;
  color: inherit;
  background-color: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.anime-image {
  height: 300px;
  width: 200px;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
}

.anime-title {
  font-size: 18px;
  padding: 5px;
  text-align: center;
}
</style>

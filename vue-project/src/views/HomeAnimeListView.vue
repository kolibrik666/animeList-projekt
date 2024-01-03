<template>
  <div class="home">
    <h1>All Anime</h1>
    <div class="anime-list">
      <router-link
          v-for="anime in animes"
          :key="anime.name"
          :to="{ name: 'animeShow', params: { id: anime.id, slug: anime.slug } }"
          class="anime-card"
      >
        <img :src="'/images/' + anime.image" :alt="anime.name" class="anime-image">
        <h2 class="anime-title">{{ anime.name }}</h2>
      </router-link>
    </div>

  </div>
</template>

<script>
import dataAnime from '../dataAnime.json';

export default {
  data() {
    return {
      animes: dataAnime.animes,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.anime-list {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

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

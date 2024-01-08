<template>
  <div class="home">
    <h1>All Anime</h1>
    <div class="anime-list">
      <AnimeCard v-for="anime in animes" :key="anime.name" :anime="anime" />
    </div>
  </div>
</template>

<script>
import AnimeCard from '@/components/AnimeCard.vue';
import dataAnime from '../dataAnime.json';

export default {
  components: {
    AnimeCard,
  },
  data() {
    return {
      animes: dataAnime.animes,
    };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
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
</style>
